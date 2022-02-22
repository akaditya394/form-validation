import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);
  const [inputIsTouched, setInputIsTouched] = useState(false);
  // const inputNameRef = useRef();

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);

    if (event.target.value.trim().length !== 0) {
      setFormIsValid(true);
    }
  };

  const nameInputBlurHandler = () => {
    setInputIsTouched(true);

    if (enteredName.trim().length === 0) {
      setFormIsValid(false);
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    setInputIsTouched(true);
    if (enteredName.trim().length === 0) {
      setFormIsValid(false);
      return;
    }
    setFormIsValid(true);
    // const enteredName = inputNameRef.current.value;
    console.log(enteredName);
    setEnteredName("");
  };

  const inputNameIsInvalid = !formIsValid && inputIsTouched;

  const formInputClasses = inputNameIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form className={formInputClasses} onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
      </div>
      {inputNameIsInvalid && (
        <p className="error-text">Form cannot be empty.</p>
      )}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
