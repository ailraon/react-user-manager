import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import UserList from './pages/UserList';
import UserRegistration from './pages/UserRegistration';
import UserDetail from './pages/UserDetail';
import NotFound from './pages/NotFound';
import styled from 'styled-components';
import UserItemProvider from './context/UserItemProvider';

const Navi = styled.nav`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  padding: 15px;
  gap: 12px;
  width: 100%;
  background-color: #fff;
  z-index: 100;
`
function App() {
  return (
    <UserItemProvider>
      <BrowserRouter>
        <Navi style={{marginBottom: 12}}>
          {/* Link : a태그와 동일한 역할을 하지만 react-router-dom을 활용해 spa방식으로 자연스럽게 이동함. */}
          <Link to="/" style={{marginRight: 12}}>유저 목록</Link>
          <Link to="/user" style={{marginRight: 12}}>유저 등록</Link>
        </Navi>
        <Routes>
          <Route path='/' element={<UserList />}/>
          <Route path='/user' element={<UserRegistration />}/>
          <Route path='/user/:id' element={<UserDetail />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </UserItemProvider>
  )
}

export default App
