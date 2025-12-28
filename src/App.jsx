import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PostDetail from './pages/PostDetail';

function App() {
  return (
    // 1. Setup BrowserRouter [cite: 169]
    <BrowserRouter>
      {/* 2. Wrap ứng dụng trong AuthProvider [cite: 174] */}
      <AuthProvider>
        <Routes>
          {/* Route Login (Public) */}
          <Route path="/" element={<Login />} />

          {/* Route được bảo vệ [cite: 186] */}
          <Route element={<ProtectedRoute />}>
            {/* Route Dashboard chính */}
            <Route path="/dashboard" element={<Dashboard />} />
            
            {/* Dynamic Route cho chi tiết bài viết [cite: 169] */}
            <Route path="/dashboard/post/:postId" element={<PostDetail />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;