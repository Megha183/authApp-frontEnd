import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SignIn />} ></Route>
      <Route path='/register' element={<Register/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
