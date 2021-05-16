import { BrowserRouter, Switch} from 'react-router-dom';
import Header from "./components/Header/Header";
import './App.css';
import SimpleBottomNavigation from './components/MainNav';
import Container from '@material-ui/core/Container';
import Trending from './components/Pages/Trending/Trending';
import Movies from './components/Pages/Movies/Movies';
import Series from './components/Pages/Series/Series';
import Search from './components/Pages/Search/Search';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (

    <BrowserRouter>
      <Header />
    <div className="App">
        <Container>
          <Switch>
             <Route path='/' component={Trending} exact/>
             <Route path='/movies' component={Movies} />
             <Route path='/series' component={Series} />
             <Route path='/search' component={Search} />
          </Switch>
        </Container>

    </div>


    <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
