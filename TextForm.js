import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        console.log("uppercase was clicked" + text);
      let newText = text.toUpperCase();
      setText(newText)
    }
    const handleLoClick = ()=>{
        console.log("lowercase was clicked" + text)
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearClick = ()=>{
        console.log("Clear was clicked" + text)
         let newText = '';
        setText(newText)
    }
    const handleCopyClick = ()=>{
        console.log("copy was clicked" + text)
        let coptext = document.getElementById("my-box");
        coptext.select();
        coptext.setSelectionRange(0,99999);
        navigator.clipboard.writeText(coptext.value)
    }
    
    const handleOnChange = (event) =>{
        console.log("on change")
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter Text To Analyze');
    //setText("")way to change state
    
  return (
    <>
        <h1>{props.heading}</h1>
<div className="mb-8">
<textarea className="form-control"  onChange={handleOnChange}  value = {text} id="my-box" rows="8"></textarea>
<button className="btn btn-primary mx-2"  onClick={handleUpClick}>Convert to UpperCase</button>
<button className="btn btn-primary my-2" onClick={handleLoClick}>Convert to LowerCase</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
<button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Clipboard</button>



<div className="container my-3" >
    <h1>Preview </h1>
    <p>{text}</p>
    <p><b>Word count</b> is <i>{text.split(" ").length}</i> and  <b>Character</b> are <i>{text.length}</i></p>
    <h4>{0.08 * text.split(" ").length }minute took to read</h4>
</div>
</div>
</>
  );
}
