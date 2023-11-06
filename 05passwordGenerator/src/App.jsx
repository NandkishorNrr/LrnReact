import { useState, useCallback, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setLengthj] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharaterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGeneraror = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "'~!@#$%^&*()_+{}[]|/'";

    for (let i = 1; i <= length; i++) {
      let cAt = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(cAt);
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);
  useEffect(()=>{
    passwordGeneraror()
  }, [length, numberAllowed, characterAllowed, passwordGeneraror])

  const copyPasswordToClipboard = useCallback(() =>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 100)
    window.navigator.clipboard.writeText(password)
  }, [password])

  const passwordRef = useRef(null)

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-5 my-10 text-orange-500 bg-gray-700 ">
        <h1 className="text-4xl text-center my-4 text-white">Password generator</h1>
        <div className="flex shadow rounded-lg my-2 overflow-hidden md-4">
          <input 
          type="text"
          value={password}
          placeholder="Password"
          className="outline-none w-full py-1  px-3"
          readOnly
          ref={passwordRef}
          />
          <button
          onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
              <input 
              type="range" 
              name="" 
              id="range" 
              min={8}
              max={120}
              value={length}
              onChange={(e)=>{setLengthj(e.target.value)}}
              className="cursor-pointer"
              />
              <label name="range">Length {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox" 
            defaultChecked={numberAllowed}
            id="numberInput" 
            onChange={
              () =>{
                setNumberAllowed((prev) => ! prev)
              }
            }
            />
            <label>Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type="checkbox" 
            defaultChecked={characterAllowed}
            id="characterInput" 
            onChange={
              () =>{
                setCharaterAllowed((prev) => ! prev)
              }
            }
            />
            <label>Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
