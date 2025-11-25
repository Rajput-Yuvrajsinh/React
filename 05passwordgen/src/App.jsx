import { useState,useCallback,useEffect,useRef } from 'react'

function App() {
  const[length, setlength] = useState(8)
  const[num, setnum] = useState(false )
  const[char, setchar] = useState(false)
  const[password, setpassword] = useState("")

  const passRef =useRef(null) 
  const passwordgenerator = useCallback(()=>{
    let pass ="";
    let str  ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (num) str +="0123456789"
    if (char) str +="!@#$%^&*_-+=[]{}`~"
    
    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
    }setpassword(pass)
  },[length,num,char,setpassword])

  const copypasswordtoclipboard = useCallback(()=>{
    passRef.current?.select();
    passRef.current?.setSelectionRange(0,999);
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() =>{
    passwordgenerator()
  },[length,num,char,passwordgenerator])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
    <h1 className='text-white text-center'>Password generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white
    '>
      <input 
      type='text'
      value={password}
      className='outline-none w-full py-1 px-3'
      placeholder='password'
      readOnly
      ref={passRef}
      />
      <button onClick={copypasswordtoclipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
    </div>

    <div className='flex text-sm gap-x-2'>
      <div className="flex item-center gap-x-1">
        <input type="range"
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{setlength(e.target.value)}} />
        <label> length:{length}</label> 
      </div>

      <div className='flex items-center gap-x-1'>
        <input type="checkbox" defaultChecked={num} id="numberInput" 
        onChange={()=>{setnum((prev=>!prev))}}/>

        <label htmlFor="numberinput">numbers</label>
      </div>

      <div className='flex items-center gap-x-1'>
        <input type="checkbox" id="charecterinput" onChange={()=>{setchar((prev)=>!prev)}} />
        <label htmlFor="charecterinput">charecter</label>
      </div>
    </div>

    </div>
    </>
  )

}

export default App
