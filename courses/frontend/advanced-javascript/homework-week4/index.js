class AppError extends Error {
  toUserMessage() {
    return "Something went wrong. Please try again.";
  }
}

class ValidationError extends AppError {
  toUserMessage() {
    return this.message;
  }
}

class ApiError extends AppError {
  constructor(message, status) {
    super(message);
    this.status = status;
  }

  toUserMessage() {
    if (this.status >= 500) {
      return "Server error. Please try again later.";
    }

    return this.message;
  }
}

class NetworkError extends AppError {
  toUserMessage() {
    return "Network error. Please check your internet connection.";
  }
}

class ScreenshotApiService {
  constructor() {
    this.crudcrudBaseUrl = `https://crudcrud.com/api/${CRUDCRUD_API_KEY}/screenshots`;
    this.rapidApiUrl = SCREENSHOT_API_URL;
  }

  validateUrl(url) {
    if (!url || url.trim() === "") {
      throw new ValidationError("Please enter a website URL.");
    }

    try {
      new URL(url);
    } catch {
      throw new ValidationError("Please enter a valid URL.");
    }
  }

  async generateScreenshot(url) {
    this.validateUrl(url);

    try {
      const response = await fetch(
        `${this.rapidApiUrl}?url=${encodeURIComponent(url)}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key": RAPID_API_KEY,
            "x-rapidapi-host": RAPID_API_HOST,
          },
        },
      );

      console.log("status:", response.status);

      const data = await response.json();
      console.log("API response:", data);

      if (!response.ok) {
        throw new ApiError(
          data.message || "Could not generate screenshot.",
          response.status,
        );
      }

      // 🔥 THIS IS THE IMPORTANT PART
      const screenshotUrl =
        data.screenshot || data.image || data.url || data.screenshotUrl;

      if (!screenshotUrl) {
        throw new ApiError(
          "No screenshot URL found in response.",
          response.status,
        );
      }

      return {
        url,
        screenshotUrl,
      };
    } catch (error) {
      console.log("generateScreenshot error:", error);

      if (error instanceof AppError) {
        throw error;
      }

      throw new NetworkError();
    }
  }

  async saveScreenshot(screenshot) {
    try {
      const response = await fetch(this.crudcrudBaseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(screenshot),
      });

      if (!response.ok) {
        throw new ApiError("Could not save screenshot.", response.status);
      }

      return await response.json();
    } catch (error) {
      if (error instanceof AppError) {
        throw error;
      }

      throw new NetworkError();
    }
  }

  async getSavedScreenshots() {
    try {
      const response = await fetch(this.crudcrudBaseUrl);

      if (!response.ok) {
        throw new ApiError(
          "Could not load saved screenshots.",
          response.status,
        );
      }

      return await response.json();
    } catch (error) {
      if (error instanceof AppError) {
        throw error;
      }

      throw new NetworkError();
    }
  }

  async deleteScreenshot(id) {
    try {
      const response = await fetch(`${this.crudcrudBaseUrl}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new ApiError("Could not delete screenshot.", response.status);
      }
    } catch (error) {
      if (error instanceof AppError) {
        throw error;
      }

      throw new NetworkError();
    }
  }
}

class PreviewCard {
  constructor(screenshot, onSave) {
    this.screenshot = screenshot;
    this.onSave = onSave;
  }

  render() {
    const card = document.createElement("div");
    card.className = "preview-card";

    const title = document.createElement("h2");
    title.textContent = "Preview";

    const urlText = document.createElement("p");
    urlText.className = "card-url";
    urlText.textContent = this.screenshot.url;

    const image = document.createElement("img");
    image.src = this.screenshot.screenshotUrl;
    image.alt = `Screenshot preview of ${this.screenshot.url}`;

    const button = document.createElement("button");
    button.className = "secondary-btn";
    button.textContent = "Save screenshot";

    button.addEventListener("click", () => {
      this.onSave(this.screenshot);
    });

    card.appendChild(title);
    card.appendChild(urlText);
    card.appendChild(image);
    card.appendChild(button);

    return card;
  }
}

class ScreenshotCard {
  constructor(screenshot, onDelete) {
    this.screenshot = screenshot;
    this.onDelete = onDelete;
  }

  render() {
    const card = document.createElement("div");
    card.className = "screenshot-card";

    const urlText = document.createElement("p");
    urlText.className = "card-url";
    urlText.textContent = this.screenshot.url;

    const image = document.createElement("img");
    image.src = this.screenshot.screenshotUrl;
    image.alt = `Saved screenshot of ${this.screenshot.url}`;

    const button = document.createElement("button");
    button.className = "danger-btn";
    button.textContent = "Delete";

    button.addEventListener("click", () => {
      this.onDelete(this.screenshot._id);
    });

    card.appendChild(urlText);
    card.appendChild(image);
    card.appendChild(button);

    return card;
  }
}

class ScreenshotApp {
  constructor(rootElement) {
    this.rootElement = rootElement;
    this.apiService = new ScreenshotApiService();
    this.savedScreenshots = [];
    this.previewScreenshot = null;
    this.message = "";
    this.messageType = "";
  }

  async init() {
    await this.loadSavedScreenshots();
    this.render();
  }

  showMessage(message, type) {
    this.message = message;
    this.messageType = type;
  }

  clearMessage() {
    this.message = "";
    this.messageType = "";
  }

  handleError(error) {
    if (error instanceof ValidationError) {
      this.showMessage(error.toUserMessage(), "error");
    } else if (error instanceof ApiError) {
      this.showMessage(error.toUserMessage(), "error");
    } else if (error instanceof NetworkError) {
      this.showMessage(error.toUserMessage(), "error");
    } else {
      this.showMessage("Unexpected error happened.", "error");
    }

    this.render();
  }

  async loadSavedScreenshots() {
    try {
      this.savedScreenshots = await this.apiService.getSavedScreenshots();
    } catch (error) {
      this.handleError(error);
    }
  }

  async generatePreview(url) {
    try {
      this.clearMessage();
      this.previewScreenshot = await this.apiService.generateScreenshot(url);
      this.render();
    } catch (error) {
      this.handleError(error);
    }
  }

  async savePreview() {
    try {
      if (!this.previewScreenshot) {
        throw new ValidationError("Generate a screenshot before saving.");
      }

      this.clearMessage();
      const savedItem = await this.apiService.saveScreenshot(
        this.previewScreenshot,
      );
      this.savedScreenshots.unshift(savedItem);
      this.previewScreenshot = null;
      this.showMessage("Screenshot saved successfully.", "success");
      this.render();
    } catch (error) {
      this.handleError(error);
    }
  }

  async deleteSavedScreenshot(id) {
    try {
      await this.apiService.deleteScreenshot(id);
      this.savedScreenshots = this.savedScreenshots.filter(
        (item) => item._id !== id,
      );
      this.showMessage("Screenshot deleted.", "success");
      this.render();
    } catch (error) {
      this.handleError(error);
    }
  }

  renderHeader() {
    const section = document.createElement("section");
    section.className = "hero-section";

    const titleBox = document.createElement("div");
    titleBox.className = "app-title";

    const title = document.createElement("h1");
    title.textContent = "Capture websites beautifully";

    const text = document.createElement("p");
    text.textContent =
      "Generate a website screenshot from a URL, save it, and manage your screenshots in one place.";

    titleBox.appendChild(title);
    titleBox.appendChild(text);
    section.appendChild(titleBox);

    return section;
  }

  renderFormPanel() {
    const panel = document.createElement("section");
    panel.className = "panel form-panel";

    const title = document.createElement("h2");
    title.textContent = "Generate screenshot";

    const form = document.createElement("form");
    const row = document.createElement("div");
    row.className = "form-row";

    const input = document.createElement("input");
    input.type = "text";
    input.name = "websiteUrl";
    input.placeholder = "https://example.com";

    const button = document.createElement("button");
    button.type = "submit";
    button.className = "primary-btn";
    button.textContent = "Generate";

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const url = formData.get("websiteUrl");
      await this.generatePreview(url);
    });

    row.appendChild(input);
    row.appendChild(button);
    form.appendChild(row);

    panel.appendChild(title);
    panel.appendChild(form);

    if (this.message) {
      const messageBox = document.createElement("div");
      messageBox.className = `message ${this.messageType}`;
      messageBox.textContent = this.message;
      panel.appendChild(messageBox);
    }

    return panel;
  }

  renderPreviewPanel() {
    if (!this.previewScreenshot) {
      return null;
    }

    const panel = document.createElement("section");
    panel.className = "panel preview-panel";

    const previewCard = new PreviewCard(this.previewScreenshot, async () => {
      await this.savePreview();
    });

    panel.appendChild(previewCard.render());

    return panel;
  }

  renderSavedPanel() {
    const panel = document.createElement("section");
    panel.className = "panel saved-panel";

    const title = document.createElement("h2");
    title.textContent = "Saved screenshots";

    panel.appendChild(title);

    if (this.savedScreenshots.length === 0) {
      const empty = document.createElement("p");
      empty.className = "empty-state";
      empty.textContent = "No screenshots saved yet.";
      panel.appendChild(empty);
      return panel;
    }

    const grid = document.createElement("div");
    grid.className = "screenshot-grid";

    for (const screenshot of this.savedScreenshots) {
      const card = new ScreenshotCard(screenshot, async (id) => {
        await this.deleteSavedScreenshot(id);
      });

      grid.appendChild(card.render());
    }

    panel.appendChild(grid);

    return panel;
  }

  render() {
    this.rootElement.innerHTML = "";

    const shell = document.createElement("div");
    shell.className = "app-shell";

    shell.appendChild(this.renderHeader());
    shell.appendChild(this.renderFormPanel());

    const previewPanel = this.renderPreviewPanel();
    if (previewPanel) {
      shell.appendChild(previewPanel);
    }

    shell.appendChild(this.renderSavedPanel());

    this.rootElement.appendChild(shell);
  }
}

const appRoot = document.getElementById("app");
const app = new ScreenshotApp(appRoot);
app.init();
