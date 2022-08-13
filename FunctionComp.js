import React  from 'react'

function Demo() {
    return <h1>hello</h1>
}

export default function FunctionComp(props) {

    return (
        <div>
            name is:{props.name}
            <Demo />
        </div>
    )
}


