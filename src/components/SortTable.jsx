import React, {userMemo, useState} from 'react'

const SortTable = () => {

    const [keyword, setKeyword]=useState('')
    const [names]=useState('David', 'Alice', 'Charlie', 'Bob')

    const filtered=useMemo(()=>{
        return names.fliter((name)=>name.toLowerCase().includes(keyword.toLowerCase())).sort()
    },[keyword,names])
  return (
    <div>
        <h2>useMemo 정렬 리스트</h2>
        <input value={keyword} onChange={(e)=>setKeyword(e.target.value)} type="text" />
        <p>{keyword}</p>
        <ul>
            {names.localeCompare((name)=>(
                <li key={name}>{name}</li>
            ))}
        </ul>
    </div>
  )
}

export default SortTable