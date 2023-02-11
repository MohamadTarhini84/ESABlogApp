import './App.css';
import SearchPage from './pages/searchPage';
import ThemeContextProvider from './context/lightmodeContext';
import Feeds from './components/feeds/Feeds';


function App() {
  return (
    <ThemeContextProvider>
        <SearchPage />
        <Feeds />
    </ThemeContextProvider>
  );
}

export default App;
