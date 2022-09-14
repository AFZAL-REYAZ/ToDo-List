import React,{useState} from 'react'
import './Form.css'

const Form = () => {
    const [name, setname] = useState("");
    const [fname, setfname] = useState("");
    // const [fnamet, setfnamet] = useState("");
    // const [fnameth, setfnameth] = useState("");
    const sam=(event)=>{
    setname(event.target.value)
    }
    const onSubmit=(event)=>{
        event.preventDefault();
        setfname(name)
    }
  return (
    <>
    <div className='form1'>
    <form onSubmit={onSubmit}>
    <div className='form'>
        <h1>FORM{fname}</h1>
        <input type="text" placeholder='Enter Your Name' onChange={sam} value={name}></input>
        {/* <input type="text" placeholder='Enter Your Number' onChange={sam2} value={name}></input>
        <input type="text" placeholder='Enter Your email' onChange={sam3} value={name}></input> */}
        <button type='submit'>Click</button>
    </div>
    </form>
    </div>
    </>
  )
}

export default Form