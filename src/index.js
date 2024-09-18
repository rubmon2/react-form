import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import {App} from './formApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UsuariosComponents } from './usuariosComponents';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <UsuariosComponents/>
  </>
);

