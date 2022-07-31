import { useState } from 'react'
import { Link, Routes, Route, Outlet} from "react-router-dom";
import Profile from './routes/Profile';
import Posts from './routes/Posts';
import AddPost from './routes/AddPost';
import SinglePost from './routes/SinglePost';
import Login from './routes/Login';
import { logout } from './utils/auth';
import Register from './routes/Register';

function App() {
  const [token, setToken] = useState(window.localStorage.getItem('token')) 
  console.log(token);


  return (
    <div className='app'>
     Stranger's Things
     <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
       {!token ? <Link to="/login">Login</Link> : null}
       {!token ?  <Link to="/register">Register</Link>: null}
        <Link to="/posts">Posts</Link> {" "}
        <Link to="/single-post">Single Post</Link> {" "}
        <Link to="/add-post">Add a Post</Link> {" "}
        {token ? <Link to="/profile">Profile</Link> : null}
        {token ? <button onClick = {()=> logout(setToken)}>Logout</button> : null}
    </nav>
    <Outlet context ={{token, setToken}}/>
    <Routes>
   <Route path="profile" element={<Profile token= {token}/>} />
      <Route path="posts" element={<Posts token= {token}/>} />
      <Route path="add-post" element={<AddPost token= {token}/>} />
      <Route path="single-post/:postId" element={<SinglePost token= {token} />} />
      <Route path="register" element={<Register setToken={setToken}/>}/>
      <Route path="login" element={<Login setToken={setToken}  />} />
      </Routes> 
  </div>
  );
}

export default App;
