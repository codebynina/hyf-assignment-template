"use client";

import { useState, useEffect } from "react";
import { RoverPhoto } from "../../pages/NasaCollaborationPage/RoverPhoto";
import { SpaceNameGenerator } from "../../pages/NasaCollaborationPage/SpaceNameGenerator";
import styles from "../../pages/NasaCollaborationPage/NasaCollaborationPage.module.css";

const API_KEY = process.env.NEXT_PUBLIC_NASA_API_KEY;

const NASA_URLs = {
  astronomyPicOfTheDay: `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`,
  marsRoverPhoto: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${API_KEY}`,
};

export default function NasaCollaboration() {
  const [dailyImg, setDailyImg] = useState({});
  const [roverPhoto, setRoverPhoto] = useState({});

  useEffect(() => {
    const fetchDailyImage = async () => {
      const response = await fetch(NASA_URLs.astronomyPicOfTheDay);
      const data = await response.json();
      setDailyImg(data);
    };

    const fetchRoverPhotos = async () => {
      const response = await fetch(NASA_URLs.marsRoverPhoto);
      const data = await response.json();
      setRoverPhoto(data);
    };

    fetchDailyImage();
    fetchRoverPhotos();
  }, []);

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Collaboration with NASA</h1>

        <SpaceNameGenerator />

        <section className="card">
          <h2>Astronomy Picture of the day</h2>

          {dailyImg?.url ? (
            <>
              <h3>{dailyImg.title}</h3>
              <img
                className={styles.nasaPicOfTheDayImg}
                src={dailyImg.url}
                alt={dailyImg.title}
              />
              <p>{dailyImg.explanation}</p>
            </>
          ) : (
            <p>Loading daily image...</p>
          )}
        </section>

        <section className="card">
          <h2>Rover Photos</h2>

          {roverPhoto?.photos?.length ? (
            roverPhoto.photos.map((photo) => (
              <RoverPhoto
                key={photo.id}
                src={photo.img_src}
                date={photo.earth_date}
                roverName={photo.rover.name}
              />
            ))
          ) : (
            <p>Loading rover photos...</p>
          )}
        </section>
      </main>
    </div>
  );
}
