import './App.css';
import SearchPage from './pages/searchPage';
import ThemeContextProvider from './context/lightmodeContext';


function App() {
  return (
    <ThemeContextProvider>
        <SearchPage />
    </ThemeContextProvider>
  );
}

export default App;
