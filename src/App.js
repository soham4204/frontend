import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginComponent from './routes/Login';
import HomeComponent from './routes/Home';
import SignupComponent from './routes/Signup';
import DashboardComponent from './routes/Dashboard';
import ContactUsComponent from './routes/ContactUs';
import SquareBreathingVisual from './components/SquareBreathingVisual';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeComponent/>} />
        <Route path="/login" element={<LoginComponent/>} />
        <Route path="/signup" element={<SignupComponent/>} />
        <Route path="/dashboard" element={<DashboardComponent/>} />
        <Route path="/contactus" element={<ContactUsComponent/>} />
        <Route path="/breathing" element={<SquareBreathingVisual videoLink="https://youtu.be/bF_1ZiFta-E?si=qKMB9TmjwGWipdjB" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
