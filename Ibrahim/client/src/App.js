import './App.css';
import SearchPage from './pages/searchPage';
import ThemeContextProvider from './context/lightmodeContext';


function App() {
  return (
    <ThemeContextProvider>
        <SearchPage />
        <div>
          <h1>test</h1>
        </div>
    </ThemeContextProvider>
  );
}

export default App;
