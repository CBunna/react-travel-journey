import React from 'react';
import Card from './Card';
import data from '../data'

const Content = () => {
  return (
    <div className='p-6 border'>
      {
          data.map((item, index) => {
          return <Card key={index} item={item} />
        })
      }      
    </div>
  )
}

export default Content