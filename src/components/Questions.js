import React, { useState } from 'react'
import Answers from './Answers'
import { data } from '../data'

function Questions() {
  const [questionNr, setQuestionNr] = useState(0)
  const dataLength = data.length - 1
  const question = data[questionNr]

  const questionSelect = (select) => {
    if (select === 'prev') {
      questionNr > 0 ? setQuestionNr(questionNr - 1) : setQuestionNr(0)
    }
    if (select === 'next') {
      questionNr === dataLength
        ? setQuestionNr(dataLength)
        : setQuestionNr(questionNr + 1)
    }
  }
  const handleChange = (correct, evt) => {
    console.log(evt.target.value, correct)
    if (evt.target.value === correct) {
      alert('CORRECT')
    }
  }
  return (
    <div>
      <div key={question.id} className="card col-lg-4 col-sm-12 p-5 pt-2 my-3">
        <h6>vraag: {questionNr + 1}</h6>
        <h4 className="py-3">{question.title}</h4>
        <Answers question={question} handleChange={handleChange} />
      </div>
      <div className="row col-lg-4 col-sm-12">
        <div className="col-6">
          <button
            className="btn btn-primary"
            onClick={() => questionSelect('prev')}
          >
            Prev
          </button>
        </div>
        <div className="col-6">
          <button
            className="btn btn-primary"
            onClick={() => questionSelect('next')}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export default Questions
