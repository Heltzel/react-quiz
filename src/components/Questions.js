import React from 'react'
import Timer from './Timer'
import Answers from './Answers'
import { data } from '../data'

function Questions() {
  return (
    <div className="card px-5 my-5 col-lg-4 col-sm-12">
      <div className="card-body">
        <Timer />
        <h4 className="card-title my-5 ">{data[0].question}</h4>
        <Answers className="my-5" />
      </div>
    </div>
  )
}

export default Questions
