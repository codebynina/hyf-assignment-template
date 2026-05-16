const SocialMediaItem = ({ url, title, icon }) => {
  return (
    <li>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {icon && <img src={icon} alt={title} width="24" />}
        <span>{title}</span>
      </a>
    </li>
  );
};

export default SocialMediaItem;
