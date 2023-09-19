import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ListUSer from './components/ListUser';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';

function App() {
  return (
    <div className="App">
      <h5>React CRUD using php mysql</h5>

      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/">List Users</Link></li>
            <li><Link to="user/create">Create User</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route index element = {<ListUSer />} />
          <Route path='user/create' element={<CreateUser />} />
          <Route path='user/:id/edit' element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
