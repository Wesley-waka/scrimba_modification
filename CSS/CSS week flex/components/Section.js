import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.div`
  background-color: #ffffff;
  border: solid 3px grey;
  margin: 4px;
  width: 300px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: left;
  font-size: 40px;
  color: #ff6961;
`

const WeekdayTitle = styled.div`
  display: flex;
  justify-content: center;
  min-width: 50px;
  border-right: solid 3px lightgrey;
`

const WeekendTitle = styled(WeekdayTitle)`
    background-color: lightgrey;
    border-radius: 7px 0 0 7px;
`

const ProgressSection = styled.div`
    width: 250px;
`

const ProgressBar = styled.div`
    background-color: ${({progress}) => {
       let numeric =  progress.slice(0,-1)
       let integer = parseInt(numeric)
       
       if (integer >= 80) return '#FFB3BA';
       else if (integer >= 60) return '#FFDFBA';
       else if (integer >= 40) return '#FFFFBA';
       else return '#BAFFC9';

    }};
    height: 50px;
    width: ${({progress}) => progress || '0%'};
`

const TodayProgressBar = styled(ProgressBar)`
    background-color: purple;
`

const Section = ({text, progress, day}) => {
    let today = new Date()
    let dayOfTheWeek = today.getDay()
    
    const isWeekend = text === 'S'
    
    const isToday = day === dayOfTheWeek
    
    return (
        <>
            <StyledSection>
                {isWeekend && <WeekendTitle>{text}</WeekendTitle>}
                {!isWeekend && <WeekdayTitle>{text}</WeekdayTitle>}
                <ProgressSection>
                   {isToday && <TodayProgressBar progress={progress}/>}
                   {!isToday && <ProgressBar progress={progress}/>}
                </ProgressSection>
            </StyledSection>
        </>
    )
}

export default Section