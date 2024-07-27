import React from 'react'
import SectionWrapper from './SectionWrapper'
import ExerciseCard from './ExerciseCard'

export default function Workout(props) {
  const { workout } = props

  return (
    <SectionWrapper id={'workout'} header={"CAUTION NEARBY"} title={["THE", "DANGER", "AREA"]}>
      <div className='flex flex-col gap-4'>{workout.map((exercise, i) => {
        return (
          <ExerciseCard key={i} exercise={exercise} index = {i}/>
        )
      })}</div>
    </SectionWrapper>
  )
}
