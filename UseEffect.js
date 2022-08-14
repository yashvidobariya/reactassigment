import React, { Component } from 'react'

export default function useEffect(){
    const [count,setCount] = useState(0)
    const [count1,setCount1] = useState(0)
    useEffect(() => {
        for(var i=0;i<10000000;i++){}
    },[count,count1])
    return (
        <div>
        <h1>count:{count}</h1>
        <h1>count:{count1}</h1>
        <button onClick={()=> setCount (count+1)}>click</button>
        <button onClick={()=> setCount1 (count1+1)}>click</button>
      </div>
    )
}
