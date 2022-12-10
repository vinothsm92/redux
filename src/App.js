import { Provider } from 'react-redux';
import './App.css';
import MovieList from './MovieList';
// import Header from './component/header';
// import Main from './component/main';
// import {Route,Routes} from 'react-router-dom'
// import Cart from './component/cart';
function App() {
  return (
    <div className="App">
      {/* <Header></Header>
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
      </Routes>
   */}
      <Provider>
        <MovieList>
        </MovieList>
        <h3>"Hi"</h3>
      </Provider>


    </div>
  );
}

export default App;
