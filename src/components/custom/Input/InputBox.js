import React  from "react";
import "./InputBox.css";
import { BsSearch } from "react-icons/bs";

const InputBox = (props) => {


  return (
    <div className="searchbar">
      <input
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        onChange={(e)=>props.onChange(e)}
        className="searchbar__input"
      />
      <button onClick={props.handleSubmit} type="submit" className="searchbar__button">
        <BsSearch className="text-white" />
      </button>
    </div>
  );
};

export default InputBox