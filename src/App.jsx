import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    document.body.addEventListener('mousemove', (e) => {
      const heart = document.querySelector('.heart');
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      heart.style.transform = `rotate(-45deg) scale(1.2) translate3d(${x * 40}px, ${y * 40}px, 0)`;
    });
  }, []);

  return (
    <div className="container">
      <div className="heart"></div>
      <h1 className="message">Я люблю тебя! Аделайла</h1>
      <p className="sub-text">Ты — моё вдохновение, моя душа!</p>
    </div>
  );
}

export default App;
