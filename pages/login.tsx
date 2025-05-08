import React from 'react';
import '../styles/login.css';

const Login = () => {
  return (
    <div>
    <form className="loginForm">
      <div>
        <br />
        <h1 id='login_title'>로그인</h1>
      </div>
      <div>
       <div className="input">
       <input type="text" className="userId" id="userId" placeholder="아이디" autoFocus></input> 
       <input type="password" className="password" id="password" placeholder="비밀번호"></input> 
       <button id="loginBut">Login</button>
      </div>
    </div>
    </form>
    </div>
  );
};

export default Login;