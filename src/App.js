import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import AllRoutes from './Routes/AllRoutes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <AllRoutes/>
    </div>
  );
}

export default App;
