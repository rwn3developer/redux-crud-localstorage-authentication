import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Form from './component/Form';

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Form/>}></Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
