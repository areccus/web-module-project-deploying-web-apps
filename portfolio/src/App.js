import './App.css';
import {Route, Routes, Link} from 'react-router-dom'
import Home from './Home'
function App() {
  return (
    <div className="App">
      <nav>
        <div className="iconDiv">
        <Link to='/' className='icon'><h2>NAV</h2></Link>
        </div>
        <div className="nav-items">
        <Link to='/' className='home'>Home</Link>
        <Link to='/portfolios' className='portfolios'>Portfolios</Link>
        </div>
      </nav>

      <Home/>
      
      {/* <Routes>
        <Route path='/' element={<App/>}/>
      </Routes> */}
    </div>
  );
}

export default App;
