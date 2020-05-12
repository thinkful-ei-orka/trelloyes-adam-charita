import React from 'react';
import STORE from './store';
import List from './List';

function App(store=STORE) {
  console.log(STORE.lists)
  return (
    <main className='App'>
      <header className='App-header'>
        <h1>Trelloyes</h1>
      </header>
      <div className='App-list'>
        {STORE.lists.map((obj,k)=><List
        header={obj.header}
        cards={obj.cardIds}
        key={k} />)}
      </div>
    </main>
  );
}

export default App;