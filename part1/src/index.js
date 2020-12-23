import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const Hello = () =>  (
  <div>
    <p>Hello world</p>
  </div>
);

const App = () => {
  // const now = new Date()
  // const a = 1
  // const b = 2

  console.log('Hello from component')
  return (
    <div>
      <h1>Greetings</h1>
      <Hello />
    </div>
  )
}
ReactDOM.render(
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
