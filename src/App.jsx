import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import UserList from './pages/UserList';
import UserRegistration from './pages/UserRegistration';
import UserDetail from './pages/UserDetail';
import NotFound from './pages/NotFound';
import styled from 'styled-components';
import UserItemProvider from './context/UserItemProvider';

const Nav = styled.nav`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  padding: 15px;
  gap: 12px;
  width: 100%;
  background-color: #fff;
  z-index: 100;
  justify-content: space-between;
  align-items: center;
`

const NavLink = styled(Link)`
  color: #83818c;
  padding: 20px;
  text-decoration: none;
  transition: .3s;
  margin: 0 6px;
  z-index: 1;
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  position: relative;
  
  &:before {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: #dfe2ea;
    border-radius: 8px 8px 0 0;
    opacity: 0;
    transition: .3s;
  }
`

const Logo = styled.div`
  font-size: 32px;
  font-weight: bold;
`

const NavContent = styled.div`
  display: inline-flex;
  position: relative;
  overflow: hidden;
  max-width: 100%;
  background-color: #fff;
  padding: 0 20px;
  border-radius: 40px;
  box-shadow: 0 10px 40px rgba(159, 162, 177, .8);
  margin-right: 20px;
`

function App() {
  return (
    <UserItemProvider>
      <BrowserRouter>
        <Nav>
          <Logo>HI</Logo>
          <NavContent>
            {/* Link : a태그와 동일한 역할을 하지만 react-router-dom을 활용해 spa방식으로 자연스럽게 이동함. */}
            <NavLink to="/" style={{marginRight: 12}}>유저 목록</NavLink>
            <NavLink to="/user" style={{marginRight: 12}}>유저 등록</NavLink>
          </NavContent>
        </Nav>
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
