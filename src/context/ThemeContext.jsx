import { createContext, useState, useContext, Children } from 'react';
import { ThemeContext } from 'styled-components';

const ThemeContext = React.createContext();

export const ThemeProvider = ({Children}) => {
  // 테마 종류 : 
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {Children}
    </ThemeContext.Provider>
  );
};