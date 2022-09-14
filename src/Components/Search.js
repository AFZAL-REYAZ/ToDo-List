import React,{useState} from 'react'
import './Search.css';
import List from './List';

const Search = () => {
  const [name1, setName1] = useState("");
  const [bname, setBname] = useState([]);

  const change=(event)=>{
    setName1(event.target.value);
  }

  const clik=()=>{
    setBname((oame)=>{
      return [...oame,name1]
    });
    setName1("");
  }

  const deleteitms=(id)=>{
    console.log("deleted");
    setBname((oame)=>{
      return oame.filter((arrEle,index)=>{
        return index!==id;
      })
    });
  }
  return (
    <div className='cardbox'>
       <div className="box">
            <h1>TODO LIST</h1>
            <input className="inputfield" type="text" placeholder='Enter list' value={name1} name="name1" onChange={(event)=>{change(event)}}/>
            <button onClick={clik}>+</button>
            <ol>
              {bname.map((cname,index) => {
                return (
                <>
                <List 
                   text={cname} 
                   key={index}
                   id={index}
                   onSelect={deleteitms}
                />
                </>
                )
              })}
            </ol>
       </div>
    </div>
  )
}

export default Search