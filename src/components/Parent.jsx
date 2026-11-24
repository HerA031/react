import React, { useState } from 'react'
import LifeCycle from './LifeCycle'

const Parent = () => {
    const [show, setShow] = useState(false)
    return (
        <div>
            <h1>부모영역</h1>
            <button onClick={()=>setShow(true)}>마운트</button>
            <button onClick={()=>setShow(false)}>언마운트</button>
            {show &&    <LifeCycle />
            }
        </div>
    )
}

export default Parent