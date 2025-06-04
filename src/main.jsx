import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'

import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

const mountPoint = document.getElementById('root');
const appRoot = createRoot(mountPoint);

appRoot.render(
 <StrictMode>
   <BrowserRouter>
    <App/>
   </BrowserRouter>
 </StrictMode>
);
