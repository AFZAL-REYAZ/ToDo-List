import React from 'react'
import './List.css'
import DeleteIcon from '@mui/icons-material/Delete';
const List = (props) => {
  
  return (
    <>
    <div className='todostyle'>
       <li>{props.text}</li>
       <DeleteIcon onClick={()=>{
        props.onSelect(props.id);
       }} />
    </div>
    </>
  )
}

export default List