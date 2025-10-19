import React from 'react'

const Card = (props: {name: string,age: number,phoneNumber: number}) => {
    const {name,age,phoneNumber} = props
  return (
    <div>
        <p>
            Name:{name}<br></br>
            Age:{age}<br></br>
            Contact:{phoneNumber}
        </p>
    </div>
  )
}

export default Card;