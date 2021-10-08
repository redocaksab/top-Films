import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from './NavBar/NavBar';
import { Provider } from "react-redux";
import store from './redux/store';
import SearchPageContainer from './SearchPage/SearchPageContainer';
import FilmItemContainer from './FilmItem/FilmItemContainer';
import Top20PageContainer from './Top20Page/Top20PageContainer';


function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <NavBar />
        <Route path="/search" component={SearchPageContainer} />
        <Route path="/films/:filmId" component={FilmItemContainer} />
        <Route path="/top20" component={Top20PageContainer} />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
