import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';


/**
 * 
 * examples of stuff you can do:
 * 

const page = (
  <div>
    <h1 className="header">This is a JSX</h1>
    <p>This is a paragraph</p>
  </div>
)

function Bruh() {
  return (
    <h1>bruh</h1>
  );
}
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
  </div>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
