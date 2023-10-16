const Project = ({ url, num }) => {
  return (
    <div key={num} className="video-container">
      <video width="500px" src={url} controls>
        <source src={url} />
      </video>
    </div>
  );
};

export default Project;
