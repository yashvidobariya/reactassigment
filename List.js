import React from 'react';


function Listcomp(props) {
    return <li>color:{props.color}</li>
}

export default function List() {
    const color = ['red', 'green','pink'];
    return (
        <div>
            <h1>list of color</h1>
            <ul>
                {
                    color.map((c) => 
                    <Listcomp color={c} />
                    )
                }
            </ul>
        </div>
    );
}
