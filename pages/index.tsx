import React from 'react';
import '../App.css';


export default function Home() {
  return (
    <div style={{
      display: 'flex',           // flexbox 사용
      flexDirection: 'column',   // 세로로 배치
      justifyContent: 'center',  // 수직 중앙 정렬
      alignItems: 'center',      // 수평 중앙 정렬
      height: '50vh',           // 화면 전체 높이
      margin: 0,                 // 기본 여백 제거
      textAlign: 'center',       // 텍스트 중앙 정렬
      color: 'black'             // 폰트 색상 설정
    }}>

<div className="background-overlay">
        <div className="content">
          <h1>Welcome to My Website</h1> <br />
          <p>Any fool can write code that a computer can understand. Good programmers write code that humans can understand.</p>
        </div>
      </div>
    </div>
  );
}
