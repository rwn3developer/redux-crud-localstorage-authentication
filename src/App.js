import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Form from './component/Form';
import Edit from './component/Edit';
import Login from './component/Login';
import Dashboard from './component/Dashboard';

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Form/>}></Route>
              <Route path='/login' element={<Login/>}></Route>
              <Route path='/edit/:id' element={<Edit/>}></Route> 
              <Route path='/dashboard' element={<Dashboard/>}></Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
