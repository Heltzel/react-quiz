import React from 'react'

function Answer({ answer, ansKey, correct, handleChange }) {
  console.log(ansKey)
  return (
    <div className="form-group">
      <div className="custom-control custom- my-2">
        <div className="custom-control custom-radio">
          <input
            type="radio"
            id={answer}
            name="answer"
            className="custom-control-input"
            value={ansKey}
            onChange={(evt) => handleChange(correct, evt)}
          />
          <label className="custom-control-label mx-3" htmlFor={answer}>
            {answer}
          </label>
        </div>
      </div>
    </div>
  )
}

export default Answer
