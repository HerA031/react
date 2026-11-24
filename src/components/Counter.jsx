import React ,{useRef} from 'react'

const Counter = () => {
    const countRef=useRef(0)
    const increseCount=()=>{
        countRef.current+=1
        console.log(`현재의 카운트 : ${countRef.current}`);
        
    }

  return (
    <div>
        <p>현재의 카운트 {countRef.current}</p>
        <button onClick={increseCount}>+</button>
    </div>
  )
}

export default Counter