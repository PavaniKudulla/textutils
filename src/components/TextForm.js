import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText]=useState('Enter text here');
    const handleOnClick=()=>{
        console.log("uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Uppercase is enabled","success");
    }
    const handleOnChnage=(event)=>{
        console.log('on change');
        setText(event.target.value)
    }
    const handleOnClear=()=>{
        setText("");
    }
    const countwords=(sentence)=>{
        let count=0;
        let arr=sentence.split(" ");
        arr.forEach(element => {
            if(element!==" ")
                count++;
        });
        return count;
    }
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#0a032b'}}>
        <h1>{props.heading}</h1>
        <div>
            <div className="mb-3">
            <textarea className="form-control" id="myBox" value={text} onChange={handleOnChnage} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#0a032b'}} rows="3"></textarea>
        </div>
            <button className={`btn btn-${props.togglemode} mx-1 `} onClick={handleOnClick}>Convert To UpperCase</button>
            <button className={`btn btn-${props.togglemode} mx-1 `} onClick={handleOnClear}>clearText</button>
        </div>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#0a032b'}}>
        <h1>Your Text summary</h1>
        <p> {countwords(text)} words and {text.length} characters </p>
        <h1>Preview</h1>
        <p>{text}</p>
    </div>
    </>
  )
}
