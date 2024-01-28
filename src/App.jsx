
import { useState } from 'react'
import './App.css'
import Navbar from './componets/Navbar'
import TextArea from './componets/TextArea'
import Alert from './componets/Alert';


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [color, setColor] = useState('#040D12')
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const colorChange = (e) => {
    setColor(e.target.value);
    document.body.style.background = color;
  }
  const clickColor = (e) => {
    setColor(e.target.value);
    document.body.style.background = color;

  }




  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#040D12";
      showAlert("Dark mode has been enabled", "success")
    }
    else if (mode === "dark") {
      setMode("light");
      document.body.style.background = '#F5EEE6';
      showAlert("Light mode has been enabled", "success")
    }
  }; 


  return (
    <>
      <Navbar clickColor={clickColor}  colorChange={colorChange} title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextArea showAlert={showAlert} heading="Write/Paste here" mode={mode} />

    </>
  )
}

export default App
