import './App.css';
import SearchPage from './pages/searchPage';
import ThemeContextProvider from './context/lightmodeContext';
import Feeds from './components/feeds/Feeds';
import Comments from './components/comments/Comments';



function App() {
  return (
    <ThemeContextProvider>
        <SearchPage />
        <Feeds />
        <Comments />
    </ThemeContextProvider>
  );
}

export default App;
