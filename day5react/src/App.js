import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { route } from './Router';
import Headers from './../../day5react/src/Components/HeaderComponents/Header'
import { TaskProvider } from './Context/TaskContext';
import Homepage from './Pages/Homepage/Homepage';
import AboutPage from './Pages/Aboutpage/AboutPage';
import PageNotFound from './Pages/PageNotFound/PageNotFound';

function App() {

  const location = useLocation();

  console.log (location);
  const currentRoute = route.find(r => r.path === location.pathname) || {};
  
  return (
    <TaskProvider>
    <div className="App">
        {currentRoute.isShowHeader && <Headers/>}
          <Routes>
                {/* {route.map((route,index) => (
                <Route key={index} path={route.path} element={<route.page/>}/>
              ))} */}
              <Route path='/' element={<Homepage/>}></Route>
              <Route path='/about' element={<AboutPage/>}></Route>
              <Route path='*' element={<PageNotFound/>}></Route>
          </Routes>
    </div>
    </TaskProvider>
  );
}

export default App;
