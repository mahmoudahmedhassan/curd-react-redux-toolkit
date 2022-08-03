import { React, useState,useEffect } from 'react'

function Hey() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
      setCount(items);
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(count));
  }, [count]);
  
  return (
    <div onClick={() =>setCount(count+1)} 
    style={{ background: "red", width: "100px", height: "100px" }}
    >{count}</div>
  )
}
export default Hey