import PropTypes from 'prop-types';
import { useState } from 'react';

function TextArea(props) {
  const toUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to UpperCase", "success");
  }
  const toLowwerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to LowerCase", "success");
  }

  const handleOnChange = (e) => {
    setText(e.target.value);
  }


  const [text, setText] = useState('');


  return (
    <div className={`container mt-5 px-4 py-5 rounded-3 bg-${props.mode} text-${props.mode === "light" ? "dark" : "light"}`}>

      <div className="mb-3 ">
        <label htmlFor="exampleFormControlTextarea1" className={`form-label text-${props.mode === "light" ? "dark" : "light"}`}>{props.heading}</label>
        <textarea placeholder='Enter your text' value={text} className="form-control" onChange={handleOnChange} id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <button className='btn btn-primary ' onClick={toUpperCase}>Convert To UPPERCASE</button>
      <button className='btn btn-primary ms-3 ' onClick={toLowwerCase}>Convert To lowercase</button>
      <p>{text.split(" ").filter((ele)=> {return ele.length!==0}).length} word and {text.length} character.</p>
      <p>It will take {.008 * text.split(" ").length} minutes to read.</p>
      <h3 className='text-info '>Preview</h3>
      <div className="card">
        <div className="card-body">
          {text.length > 0 ? text : "Enter Your text Plz"}
        </div>
      </div>




      {/* End */}
    </div>
  )
}
TextArea.propTypes = {
  heading: PropTypes.string.isRequired,
}

export default TextArea;