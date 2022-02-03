import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';



function App() {
  const [mode,setmode] = useState('light');   
 // -->This useState set the default as light color
 
 const [alert, setAlert] = useState(null);
//  -->Alert usestate is initialized with null 

 const showAlert = (message, type)=>{
     setAlert({
       msg: message,
       type: type
     })
    //  set alert is declared as an object 
     setTimeout(() => {
         setAlert(null);
     }, 1500);
 }
//  showalert function is made to pass two values namely message and type for the alert to show 
// set timeout is used dimiss the alert by its own for it to remain intact even if msg gets disappeared because if user \
// himself dimisses the msg by clicking on cross mark then it never appears again 

    const togglemode = () =>{
  if (mode=== 'light'){
    setmode('dark');
    document.body.style.backgroundColor = '#042743';
    document.title= 'Textutils- Dark mode '
    // Changes the title on click 
    showAlert("Dark mode activated" ,"success")
  }
  // We have inserted the showalert function here for it to get activated on clicking the button 
  // it also passes the message and type value into setalert object 
  else{
    setmode('light');
    document.body.style.backgroundColor = 'white';
    document.title= 'Textutils- Home '
        // Changes the title on click 

    showAlert("Dark mode is deactivated" ,"success")
  }
}

// This toggle mode is used to make the set mode as dark if the color is light and vice versa ,it is basically to inverse the color 

  return (
    <>
    
 
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
    <Navbar title="TextUtdssdvils" aboutText='LOLde' mode={mode} togglemode={togglemode} />
    {/* Navbar has been inserted with two things one mode function and one toggle mode function  */}
    <Alert alert={alert}/>
    <div className="container">
    
    <TextForm heading = "Enter the text to analyze below" mode={mode} togglemode={togglemode}/>
{/* <About/> */}
    
    </div>
    </> 
  );
}

export default App;