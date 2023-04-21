import React from 'react';

const backgroundStyle = {
  backgroundImage:
    "url('https://www.dhresource.com/0x0/f2/albu/g15/M01/4F/E9/rBVa3V9zlnmABfySAAP62IopYs4099.jpg')",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const squareStyle = {
  backgroundColor: 'rgba(245, 245, 220, 0.8)',
  padding: '2rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
  fontFamily: 'Luminari, fantasy',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const linkStyle = {
  display: 'inline-block',
  padding: '1rem 2rem',
  backgroundColor: '#c8a2c8',
  color: 'black',
  fontWeight: 'bold',
  borderRadius: '0.5rem',
  marginTop: '2rem',
  textDecoration: 'none',
  animation: 'flash 1s linear infinite',
};

const keyframes = `
  @keyframes flash {
    0% {
      background-color: #c8a2c8;
    }
    50% {
      background-color: white;
    }
    100% {
      background-color: #c8a2c8;
    }
  }
`;

export default function Main() {
  return (
    <div style={backgroundStyle}>
      <style>{keyframes}</style>
      <div style={squareStyle}>
        <h1>
          Самое время быть уникальным! <br />
          Смоделируй свою любимую пару носков!
        </h1>
        <a href="/generator" style={linkStyle}>
          <button style={linkStyle}>Создать свою идеальную пару носков!</button>
        </a>
      </div>
    </div>
  );
}
