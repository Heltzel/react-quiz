import React from 'react'

function Answer({ question, handleChange, disabled }) {
  const { answers, correct } = question

  return (
    <div className="form-group">
      {Object.keys(answers).map((key) => {
        return (
          <div className="custom-control custom- my-2" key={key}>
            <div className="custom-control custom-radio">
              <input
                type="radio"
                id="customRadio1"
                name="answer"
                className="custom-control-input"
                value={key}
                onChange={(evt) => handleChange(correct, evt)}
                disabled={disabled}
              />
              <label className="custom-control-label mx-5" htmlFor={key}>
                {answers[key]}
              </label>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Answer
