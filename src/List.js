import React from 'react';
import Card from './Card';
import STORE from './store';

function List(props){
  return (
    <section className='List'>
      <header className='List-header'>
        <h2>{props.header}</h2>
      </header>
      <div className='List-cards'>
        {props.cards.map((id,k)=><Card
        title={STORE.allCards[id].title}
        content={STORE.allCards[id].content}
        key={k} />)}
      </div>
    </section>
  )
}

export default List;