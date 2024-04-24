import {ThemeContext} from '../context/ThemeContext';
import { useState } from 'react';

export const ThemeProvider = ({children}) => {
    const [Theme, setTheme] = useState('dark');
    return (
        <ThemeContext.Provider value={{ Theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}