import { Routes , Route, useLocation} from 'react-router-dom'
import './App.css';
import { route } from './router';
import Headers from './components/HeaderComponents/HeaderComponent';

function App() {

const location = useLocation();

console.log(location);

const currentRoute = route.find(r => r.path === location.pathname) || {};
  return (
  <div className='App'>
    {currentRoute.isShowHeader && <Headers/> }
      <Routes>
         {route.map((route, index) => (
            <Route key={index} path={route.path} element={<route.page/> } /> 
        ))}
      </Routes>
  </div>
  );
}

export default App;
