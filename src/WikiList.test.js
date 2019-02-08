import React from 'react';
import ReactDOM from 'react-dom';
import WikiList from './WikiList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WikiList />, div);
  ReactDOM.unmountComponentAtNode(div);
});