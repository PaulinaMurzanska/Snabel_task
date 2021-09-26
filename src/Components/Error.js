import React from 'react'

const Error = () => {
    const style = {
        backgroundColor: "#000000",
        color: "#ffffff",
        fontSize: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "50px"


    }
    return (
        <div style={style}>
            Przepraszamy , coś poszło nie tak, spróbuj ponownie później...
        </div>
    )
}

export default Error
