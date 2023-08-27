import './App.css';
import Timer from "./Timer";
import Settings from "./Settings";
import {useEffect, useState} from "react";
import SettingsContext from "./SettingsContext";
import { auth,provider } from './config';
import {signInWithPopup} from "firebase/auth";

function App() {

  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);
  const [value, setValue] = useState('');
  const handleCLick = ()=>{
     signInWithPopup(auth,provider).then((data)=>{
      setValue(data.user.email)
      localStorage.setItem("email",data.user.email)
     })
  }

  useEffect(()=>{
    setValue(localStorage.getItem("email"));
  },[])
  return (
    <main>
      <SettingsContext.Provider value={{
        showSettings,
        setShowSettings,
        workMinutes,
        breakMinutes,
        setWorkMinutes,
        setBreakMinutes,
      }}>
        {value ? 
        <Timer />: <button style={{background:"black", marginTop:"50%",width:"160px", height:"50px", borderRadius:"50px", fontSize:"15px"}}
         onClick={handleCLick}> Please Sign In!</button>
        }
      </SettingsContext.Provider>
    </main>
  );
}

export default App;
