import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';

import App from './components/App';
// import store from './app/store';
// import './index.css'
// import ToggleColorModeProvider from './utils/ToggleColorMode';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

ReactDOM.render(<App />, document.getElementById('root'))

