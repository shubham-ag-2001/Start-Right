import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import FeedPage from './FeedPage';
import Profile from './Profile';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/feed" element={<FeedPage />}   />
      <Route path='/login' element={<login />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
