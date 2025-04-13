import React from 'react'
import "./Cards.css"

const Cards = (props) => {
  return (
    <div>
      <div className="card" style={{overflow: "hidden"}}>
      <img src="https://img.freepik.com/premium-vector/programming-code-icon-abstract-
        robot-holding-programming-code-symbol-hand-coding-background_127544-1269.jpg" alt="" width={255}
        style={{border: "2px solid black"}}/>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default Cards
