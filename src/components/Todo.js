import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

const Todo = (props) => {
  // state manager
  // first arr modelIsOpn retursn value inside useState(i.e false)
  // second arr helps to change that value
  const [modalIsOpen, setModelIsOpen] = useState(false);

  function deleteHandler() {
    console.log("clicked " + props.title);

    setModelIsOpen(true);
  }

  function closeModal() {
    setModelIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen ? (
        <Modal onCancel={closeModal} onConfirm={closeModal} />
      ) : null}
      {modalIsOpen && <Backdrop onCancel={closeModal} />}
    </div>
  );
};

export default Todo;
