import React, { useContext } from 'react';

// theme context
export const ThemeContext = React.createContext({
    themeMode: 'light',
    darkTheme: () => {},
    lightTheme: () => {},
})

// theme provider
export const ThemeProvider = ThemeContext.Provider;


export default function useTheme() {
    return useContext(ThemeContext)
}
