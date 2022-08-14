import React, { useState } from 'react'

export default function UseState() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("yashvi")
    const handleState = () => {
        setName("dhruvi")
    }
    return (
        <div>
            <h1>Name:{name}</h1>
            <h1>count:{count}</h1>
            <button onClick={(e) => setCount(count + 1)}>increament</button>
            <button onClick={(e) => setCount(count - 1)}>decreament</button>
            <button onClick={() => handleState()}>update</button>
        </div>
    )
}

