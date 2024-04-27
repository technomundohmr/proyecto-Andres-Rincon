import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import {App} from './App.jsx'
import './index.css'
import { ThemeProvider } from '../providers/ThemeProvider'
import { UserProvider } from '../providers/UserProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <UserProvider>
        <ThemeProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </UserProvider>
    </React.StrictMode>,
)
