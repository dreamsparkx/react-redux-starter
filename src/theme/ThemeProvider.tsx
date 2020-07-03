import React, { useState, createContext, ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeType } from '../types/theme';
import { lightTheme, darkTheme } from './index';
import { GlobalStyles } from './globalStyles';

export const ThemeContext = createContext({
  theme: (localStorage.getItem('theme') as ThemeType) || 'light',
  toggleTheme: () => {
    const currThemeName: ThemeType =
      (localStorage.getItem('theme') as ThemeType) || 'light';
    if (currThemeName === 'light') {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  },
});

export default function ThemeProvider(props: Props) {
  const currThemeName: ThemeType =
    (localStorage.getItem('theme') as ThemeType) || 'light';
  const [_theme, _setTheme] = useState<ThemeType>(currThemeName);
  const toggleTheme = () => {
    if (_theme === 'light') {
      localStorage.setItem('theme', 'dark');
      _setTheme('dark');
    } else {
      localStorage.setItem('theme', 'light');
      _setTheme('light');
    }
  };
  return (
    <ThemeContext.Provider
      value={{
        theme: _theme,
        toggleTheme: toggleTheme,
      }}
    >
      <StyledThemeProvider theme={_theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        {props.children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}

interface Props {
  children: ReactNode;
}
