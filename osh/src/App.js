import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="content">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/LogIn" element={<LoginPage />} />
            <Route exact path="/Register" element={<RegistrationPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;