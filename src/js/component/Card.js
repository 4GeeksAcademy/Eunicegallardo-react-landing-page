import React from 'react'
import ProType from 'prop-types'

let cardstyle ={
  width: "300px"
}

const Card = ({item, position}) => {
  return (
        <div className="card ms-3 me-5 mb-4 p-0 text-center" style={cardstyle}>
          <img src={`https://picsum.photos/300/300?random=${position + 1}`} className="card-img-top" alt="image"/>
          <div className="card-body border-bottom">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.text}</p>
          </div>
          <div className='p-3'> 
            <a href={item.buttonUrl} className="btn">{item.buttonLabel}</a>
          </div>
        </div >

  )

}

Card.prototype = {
  item: ProType.object,
  position: ProType.number
}

export default Card