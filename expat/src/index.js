import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
<<<<<<< HEAD
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
=======
import { BrowserRouter as Router} from 'react-router-dom';


ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));


>>>>>>> bedeb365bdd025f174a26b5f1edada0941f91733
