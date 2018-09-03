import React from 'react'
import { render } from 'react-dom'
import { GymDayList } from './components/GymDayList'

window.React = React

render(
  <GymDayList days={
    [
      {
        gym: "LA Fitness",
        date: new Date("8/31/2018"),
        cardio: true,
        heavy: false
      },
      {
        gym: "Anytime Fitness",
        date: new Date("9/1/2018"),
        cardio: true,
        heavy: false
      },
      {
        gym: "Onelife Fitness",
        date: new Date("9/2/2018"),
        cardio: true,
        heavy: true
      }
    ]
  }/>,


  document.getElementById('react-container')
)
