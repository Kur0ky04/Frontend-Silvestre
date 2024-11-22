import React from 'react';

function Home() {
  return (
    <div
      id="home"
      style={{
        padding: '50px 20px',
        backgroundColor: '#81D4FA',
        width: '100%',
        minHeight: '100vh',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          marginBottom: '30px',
        }}
      >
        <img
          src="/src/assets/image/Swim.jpg"
          alt="Profile"
          style={{
            width: '200px',
            height: '200px',
            objectFit: 'cover',
            borderRadius: '50%',
            border: '4px solid white',
            marginBottom: '15px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          }}
        />
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1A237E', marginBottom: '10px' }}>
          Roi Vincent Silvestre
        </h2>
        <p
          style={{
            margin: '0',
            fontSize: '1rem',
            color: '#333',
            maxWidth: '700px',
            lineHeight: '1.6',
            fontWeight: '300',
            padding: '0 10px',
          }}
        >
          Hi! Welcome to my personal website. Feel free to scroll and learn more about me!
        </p>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '40px',
        }}
      >
        <a href="https://x.com/JahRoi2" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <img
            src="/src/assets/image/X.jpeg"
            alt="Small Profile"
            style={{
              width: '60px',
              height: '60px',
              objectFit: 'cover',
              borderRadius: '50%',
              border: '3px solid white',
              transition: 'transform 0.3s, box-shadow 0.3s',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.1)';
              e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = 'none';
            }}
          />
        </a>
      </div>
    </div>
  );
}

export default Home;
