import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

// import App from './components/app';
import FullPage from './components/full-page';

ReactDOM.render(<BrowserRouter>
                   <Route path="/" component={FullPage} />
                </BrowserRouter>, document.getElementById('root'));