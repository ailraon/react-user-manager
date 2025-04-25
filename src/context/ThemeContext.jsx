import { createContext, useState, useContext, Children } from 'react';
import { ThemeContext } from 'styled-components';

const ThemeContext = React.createContext();

export const ThemeProvider = ({Children}) => {
  // 테마 종류 : 화이트, 다크 (그외 추가 예정)
  const [theme, setTheme] = useState("");

  const changeTheme = (changingTheme) => {
    setTheme(changingTheme);
  }

  return (
    <ThemeContext.Provider value={{theme, changeTheme}}>
      {Children}
    </ThemeContext.Provider>
  );
};