const Icons = ({ path, icon, text }) => {
  return (
    <div>
      {text && <p>{text} </p>}
      <a
        href={path}
        target="_blank"
        aria-label="Read more about projects and author"
      >
        {icon}
      </a>
    </div>
  );
};
export default Icons;
