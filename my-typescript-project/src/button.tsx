import React from 'react'

function Button(props:{name: string}){
    const {name} = props
    return(
        <button style={{ backgroundColor:'blue',color:'white'}}>
            {name}
        </button>
    );
}

export default Button;