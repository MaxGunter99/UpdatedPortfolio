import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
// import App from './App';
const App = React.lazy(() => import('./App'));

ReactDOM.render(
    <Router>
        <Suspense fallback = { <div className = 'Loader'><img src = 'https://i.ya-webdesign.com/images/transparent-bars-loading-3.gif'/></div> }>
            <App />
        </Suspense>
    </Router>
, document.getElementById('root'));
