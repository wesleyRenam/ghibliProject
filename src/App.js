import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import Profile from './pages/Profile';
import MovieCard from './components/MovieCard';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/home" component={ Home } />
      <Route path="/favorites" component={ Favorites } />
      <Route path="/profile" component={ Profile } />
      <Route path="/movie/:id" component={ MovieCard }/>
    </Switch>
  );
}

export default App;
