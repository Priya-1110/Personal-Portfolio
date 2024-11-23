import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import React from 'react';
import "./TimeLine.css";
import Text from './Text';
export const TimeLine = () => 
{

return(
    
   <section id='about'>
    <br></br>
    <br></br>
    <br></br>
    <h2 className='education'><Text>Education</Text></h2>
   <Timeline className="time" lineColor={'#c770f0'}>

  <TimelineItem
    key="002"
    dateText="2024 - 2025"
    dateInnerStyle={{ background: '#B8B8FF', color: 'black' }}
    bodyContainerStyle={{
      className:'content',
      background: '#B8B8FF',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}
  >
   <Text>
    <h3><i>Master's Degree</i></h3>
    <h4>National College of Ireland, Dublin</h4>
    <br></br>
    <p>MSC in CLoud Computing</p>
    <p></p>
      
    </Text>
    
  </TimelineItem>
  <TimelineItem
    key="003"
    dateText="2020 - 2024"
    dateInnerStyle={{ background: 'white', color: 'black' }}
    bodyContainerStyle={{
      className:'content',
      background: 'white',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}
    style={{ color: '#B8B8FF' }}
  >
    <Text>
    <h3><i>Bachelor's Degree</i></h3>
    <h4>Easwari Engineering College, Chennai</h4>
    <br></br>
    <p>
    B.E(Electronics and Communication Engineering) </p>
    <p>CGPA- 9.23 | 92.3% | 1:1</p>
      
    </Text>
    
  </TimelineItem>
  
  </Timeline>
   </section>


)
    }

