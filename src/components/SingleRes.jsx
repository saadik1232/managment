import React from 'react'

export default function SingleRes(props) {

    const { res, history } = props

    return (
        <>
            <p>Responder ID: {res.id}</p>
            <p>Responder Name: {res.firstname}</p>
            <p>Rsponder Contact: {res.contact}</p>
            <button onClick={(e) => { history.push("/ResPro/" + res.id, res) }}> Profile </button>
        </>
    )
}
