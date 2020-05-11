import React from 'react';

function Card(title,content,Key){
  return (
    <div className='Card' key={`card-${Key}`}>
      <button type='button'>delete</button>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  )
}

export default Card;