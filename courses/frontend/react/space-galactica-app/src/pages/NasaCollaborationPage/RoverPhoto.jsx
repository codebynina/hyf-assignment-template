export const RoverPhoto = ({ src, date, roverName }) => {
  return (
    <div>
      <img src={src} alt={roverName} width="200" />
      <p>{roverName}</p>
      <p>{date}</p>
    </div>
  );
};
