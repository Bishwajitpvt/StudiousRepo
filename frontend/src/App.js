import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigationbar from './components/Navigationbar';
import Home from './pages/Home';
import Notes from './pages/Notes';
import NotesUplode from './pages/Notesuplode';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">

      <Navigationbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}> </Route>
          <Route path="/notes" element={<Notes />}> </Route>
          <Route path="/notes-uplode" element={<NotesUplode />}> </Route>
          <Route path="/profile" element={<Profile />}> </Route>
          <Route path='/sign-up' element={<Register />}> </Route>
          <Route path='/sign-in' element={<Login />}> </Route>
          

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
