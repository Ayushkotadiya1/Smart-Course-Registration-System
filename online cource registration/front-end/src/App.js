import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/user/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Course from './pages/user/Course';
import CourseDetail from './pages/user/CourseDetail';
import Admin from './pages/admin/pages/Admin'
import AdminLogin from './pages/admin/AdminLogin';
import AdminCourseTable from './pages/admin/pages/AdminCourseTable';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='course' element={<Course />} />
            <Route path='coursedetail' element={<CourseDetail />} />
            <Route path='signup' element={<Signup />} />
            <Route path='login' element={<Login />} />
          </Route>
          <Route path='admin'>
            <Route index element={<Admin />} />
            <Route path='login' element={<AdminLogin />} />
            <Route path='course' element={<AdminCourseTable />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;