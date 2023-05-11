import React from 'react';
import ReactDOM from 'react-dom/client';
import { Counter } from './Counter';
import "./Counter.css"
import Reducer from './Reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Counter />
  <Reducer/>
  </>
);
 