const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onCancel} />; // if no content we dont need closing in jsx
};

export default Backdrop;
