import React from 'react';
import ReactDOM from 'react-dom';
import {CalenderContextProvider} from './Context/calender.context';
import Nav from './containers/navbar/App.jsx';

const rootElement = document.getElementById('body');

ReactDOM.render(
  <React.Fragment>
    <CalenderContextProvider>
      <Nav />
    </CalenderContextProvider>
  </React.Fragment>,
  rootElement
);
