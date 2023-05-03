const HomeSecTitleAnimated = (props) => {
  return (
    <div className="flex items-center mb-7">
      <lord-icon
        src={props.source}
        trigger="loop"
        style={{ width: "60px", height: "60px", display: "block" }}
      ></lord-icon>
      <h4 className="ml-3 text-2xl font-bold dark:text-white">{props.title}</h4>
    </div>
  );
};

export default HomeSecTitleAnimated;
