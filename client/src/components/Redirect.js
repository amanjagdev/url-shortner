import React from 'react'

const Redirect = (props) => {
    const code = props.match.params.code;
    return (
        <div>
           <h1>Redirecting to {code}</h1> 
        </div>
    )
}

export default Redirect
