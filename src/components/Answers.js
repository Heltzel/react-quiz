import React from 'react'
import Answer from './Answer'

function Answers({ question, handleChange }) {
  const { answers, correct } = question
  console.log(answers, correct)
  return (
    <div className="">
      <h5>Antwoorden:</h5>
      <form>
        {Object.keys(answers).map((key) => {
          return (
            <Answer
              answer={answers[key]}
              ansKey={key}
              correct={correct}
              handleChange={handleChange}
              key={key}
            />
          )
        })}
      </form>
    </div>
  )
}

export default Answers
