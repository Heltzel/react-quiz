import React, { useState } from 'react'
import Answer from './Answer'
import { data } from '../data'

function Answers() {
  const [correct, setCorrect] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const handleChange = (correct, event) => {
    if (event.target.value === correct) {
      setCorrect(true)
    } else {
      setCorrect(false)
    }
  }
  return (
    <div className="">
      <h4>Answers:</h4>
      <form>
        <div>
          {data.map((question, index) => {
            return (
              <Answer
                key={index}
                question={question}
                handleChange={handleChange}
                disabled={disabled}
              />
            )
          })}
        </div>
      </form>
      {correct && <div className="alert alert-success"> CORRECT </div>}
    </div>
  )
}

export default Answers
