import React from 'react';
import Card from './Card';
import STORE from './store';

function List(header,cards,Key){
  return (
    <section className='List' key={`sectionList-${Key}`}>
      <header className='List-header' key={`list-${Key}`}>
        <h2>{header}</h2>
      </header>
      <div className='List-cards' key={`cardList-${Key}`}>
        {cards.map((id,k)=>Card(STORE.allCards[id].title,STORE.allCards[id].content,k))}
      </div>
    </section>
  )
}

export default List;