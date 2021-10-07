import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from './NavBar/NavBar';
import { Provider } from "react-redux";
import store from './redux/store';
import SearchPageContainer from './SearchPage/SearchPageContainer';
import FilmItemContainer from './FilmItem/FilmItemContainer';


function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <NavBar />
        <Route path="/search" component={SearchPageContainer} />
        <Route path="/films/:filmId" component={FilmItemContainer}/>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
