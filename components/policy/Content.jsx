import React from 'react'
import Accordion from './Accordion'
import { EventLogistics, FacilityGuidelines, CateringAndSeating, VenueAccessAndUsage, Responsabilities, CleanUpAndOthers } from '@/constants/policies'

const Content = () => {
  return (
    <div className='p-4 bg-gray-200 rounded-lg mb-10'>
      {EventLogistics.map((part, partIndex) => (
        <Accordion title={part.title} content={part.content}/>
      ))}
      {FacilityGuidelines.map((part, partIndex) => (
        <Accordion title={part.title} content={part.content}/>
      ))}
      {CateringAndSeating.map((part, partIndex) => (
        <Accordion title={part.title} content={part.content}/>
      ))}
      {VenueAccessAndUsage.map((part, partIndex) => (
        <Accordion title={part.title} content={part.content}/>
      ))}
      {Responsabilities.map((part, partIndex) => (
        <Accordion title={part.title} content={part.content}/>
      ))}
      {CleanUpAndOthers.map((part, partIndex) => (
        <Accordion title={part.title} content={part.content}/>
      ))}
      
    </div>
  )
}

export default Content
{/* <Accordion title='Event Logistics' content=''/>
    <Accordion title='Facility Guidelines' content=''/>
    <Accordion title='Catering & Seating' content=''/>
    <Accordion title='Venue Access & Usage' content=''/>
    <Accordion title='Responsabilities' content=''/>
    <Accordion title='Alcohol & Smoking Policies' content=''/> 
*/}