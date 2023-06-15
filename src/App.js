import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Form from './component/Form';
import Edit from './component/Edit';

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Form/>}></Route>
              <Route path='/edit/:id' element={<Edit/>}></Route> 
          </Routes>
      </BrowserRouter>
  );
}

export default App;
