import ReactSwitch from 'react-switch';
import {useContext} from 'react';
import  {themeContext} from '../context/lightmodeContext'

function LDmode() {
    const { theme, toggleTheme } = useContext(themeContext)
    return (
        <div className="switch">
          <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
    )
}

export default LDmode;