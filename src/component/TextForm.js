import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
  const handleUperclick=()=>{
console.log("Uppercase Was Clicked"+text);
let newtext = text.toUpperCase();

 setText(newtext);
  }
  const handlelowerclick=()=>{
    console.log("Uppercase Was Clicked"+text);
    let newtext = text.toLowerCase();
    
     setText(newtext);
      }
      const handleclearclick=()=>{
        console.log("Uppercase Was Clicked"+text);
        let newtext ='';
        
         setText(newtext);
          }
          const copy=()=>{
           // console.log("Uppercase Was Clicked"+text);
          //  let newtext ='';
            navigator.clipboard.write(text);
            alert("Coped to Clipboard"+text);
            
            // setText(newtext);
              }
  let handleonchange=(event)=>{
    console.log("On Change");
    setText(event.target.value);
      }
  const [text, setText] = useState('');
    return (
      <>
        <div>
            <h1>{props.heading}</h1>
            
  
    <label  className="form-label">Enter your Pargraph here</label>
    <textarea   className="form-control" value={text}  onChange={handleonchange} id="exampleInputEmail1" row="10"/>
  <button   className="btn btn-warning mx-2" onClick={handleUperclick}>Convert To Uppercase</button>
  <button   className="btn btn-danger mx-2" onClick={handlelowerclick}>Convert To LowerCase</button>
  <button   className="btn btn-danger mx-2" onClick={handleclearclick}>CLEAR Text </button>
  <button   className="btn btn-danger mx-2" onClick={copy}>Copy Text </button>

</div>
<div className="container">
  <h1>Your Text Here </h1>
  <p>{text.split(" ").length} words and {text.length} charcater </p>
  <p>{0.008*text.split(" ").length} Minutes Read</p>
  <h2>Preview</h2>
  <p>{text}</p>

</div>
</>
    )
}
TextForm.PropTy = {heading:PropTypes.string,};