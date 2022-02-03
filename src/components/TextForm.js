
import React, {useState} from 'react'

export default function TextForm(props) {
  
  
  const HandleUpClick =() => {
    console.log('Button was clicked');
    let newText = text.toUpperCase();
    setText(newText)

  }

  const HandleLowClick =() => {
    console.log('Button was clicked');
    let newText = text.toLowerCase();
    setText(newText)

  } 

  const HandleCapClick =() => {
    console.log('Button was clicked');
   let words = text.split(" ")
   let uppercaseword = ''

   words.forEach(element => {

    uppercaseword += element.charAt(0).toUpperCase() + element.slice(1) + " "
    
   });
   setText(uppercaseword)

  } 




  const HandleOnChange = (event) =>{
   console.log("On change");
   setText(event.target.value);

  }

  const HandleCopClick = () =>{
    console.log('Text is copied')
    var text = document.getElementById('TxtBox');
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const[text, setText] = useState('Enter text here');  
  
  return (
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
      {/* Remember that there are two {} brackets one is for the style tag itself and the other is to use the javascript */}
     <h1>{props.heading}</h1>
      <div className="mb-3">
      
      <textarea className="form-control" id='TxtBox' style= {{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} value={text} onChange={HandleOnChange} rows="4"></textarea>
      {/* Important point -One thing is to note here that we didnt use back ticks and $ dollar sign maybe because we are entering value in style css sheet  */}
      </div>
      <button className='btn btn-primary mx-1' onClick={HandleUpClick} >Convert to Uppercase</button>
      <button className='btn btn-primary mx-1' onClick={HandleLowClick} >Convert to Lowercase</button>
      <button className='btn btn-primary mx-1' onClick={HandleCapClick} >Convert to Capital</button>
      <button className='btn btn-primary mx-1' onClick={HandleCopClick} >Copy Text</button>

      <div className="container my-3 " style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text changes</h2>
        <p>{text.split(" ").length}  word and {text.length}characters</p>
        {/* {text.split(" ").length} it takes the string then returns it as an array  */}

        <h2>Preview</h2>
        <p>{text}</p>
      </div>

    </div>
  )
}
