import React from 'react'
import { render } from 'react-dom'
import { GymDayCount } from './components/GymDayCount'

window.React = React

render(
  <GymDayCount total={50}
    cardio={20}
    heavy={10}
    goal={100}/>,
  document.getElementById('react-container')
)
