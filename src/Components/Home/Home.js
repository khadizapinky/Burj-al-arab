import React from 'react'
import { Room } from '../Room/Room'

export const Home = () => {

  const rooms = [
    {
      title: 'standard single room',
      description: 'standard single room',
      imgUrl: '',
      bed: 1,
      capacity: 1,
      bedType: 'single',
      avatar: 's',
      price: 119
        },
        {
          title: 'standard single room',
          description: 'standard single room',
          imgUrl: '',
          bed: 1,
          capacity: 1,
          bedType: 'family',
          avatar: 's',
          price: 400
            },
            {
              title: 'standard single room',
              description: 'standard single room',
              imgUrl: '',
              bed: 1,
              capacity: 1,
              bedType: 'double',
              avatar: 's',
              price: 287
                }
  ]
  return (
    <div>{
      rooms.map(room =>
         <Room key = {room.bedType} 
         room={room}>

         </Room>)
    }
      </div>
  )
}
