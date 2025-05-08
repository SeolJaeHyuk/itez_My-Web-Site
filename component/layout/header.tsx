import React from 'react';
import '../../styles/header.css';  // CSS 스타일링을 위한 파일

const Header = () => {
  return (
    <nav className="navbar">
    <div className="navbar__brand">JaeHyuk</div>
    <ul className="navbar__menu">
      <li><a href="/" >Home</a></li> {/* Home 버튼을 누르면 새로고침만 할 수 있게 한다.*/}
      <li><a href="/todo-list">To Do List</a></li>
      <li><a href="/login">Login</a></li>
      <li><a href="/my-page">My page</a></li>
      <li><a href="/my-page/order">My page - Order</a></li>
    </ul>
  </nav>
  )
}
export default Header