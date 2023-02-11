import { createContext, useState } from 'react';

export const themeContext = createContext("dark");

function ThemeContextProvider (props) {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
        console.log("batata")
    };

    return (
        <themeContext.Provider value={{ theme, toggleTheme }}>
            {props.children}
        </themeContext.Provider>
    )
} 

export default ThemeContextProvider;