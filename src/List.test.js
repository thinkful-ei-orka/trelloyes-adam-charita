import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

it('renders without crashing',()=>{
  const div=document.createElement('div');
  ReactDOM.render(<List 
    header='testHeader'
    cards={['a','b','c']}
    key='1'
    />,div);
  ReactDOM.unmountComponentAtNode(div)}
)

it('renders this UI as expected',()=>{
  const tree = renderer.create(<List 
    header='testHeader'
    cards={['a','b','c']}
    key='1' 
    />).toJSON();
  expect(tree).toMatchSnapshot();
})