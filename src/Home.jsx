import React from 'react';

function Home() {
  return (
    <div
      id="home"
      style={{
        padding: '50px 20px',
        backgroundColor: 'skyblue',
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
          src="https://scontent.fwnp1-1.fna.fbcdn.net/v/t39.30808-6/467704919_122169858122101467_3602630091582774873_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGA9dofX5huWD3LydbEnNEXWFWEfSl51e1YVYR9KXnV7dDc7zMUU0EPRPzqJ64KThYTB6KWmQWBZ2FA0dp4qTzu&_nc_ohc=_E-8SoH4KJsQ7kNvgH9vo3l&_nc_zt=23&_nc_ht=scontent.fwnp1-1.fna&_nc_gid=AbC4lQq8sAKGZ9YftNFzyWh&oh=00_AYCLXtsK8O5EkMRVplHysWF9AT760D3rlSzJr9jOzjyN0g&oe=67461413"
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
          This is my personal space where I share a glimpse of my life, interests, and passions. Its a cozy and welcoming place that reflects who I am. Feel free to look around and get to know me better!
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
            src="https://scontent.fwnp1-1.fna.fbcdn.net/v/t39.30808-6/467979076_122169861554101467_6856939954493914175_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeG4h1OrXUJDnpoyiVzL0HOM2nPW1uE5M3rac9bW4Tkzev8VeuNzpGc7wCBfANy07pJjm5vVEb6Cqgd0rVjWH7U7&_nc_ohc=cN2bl61TXxoQ7kNvgHt2_AS&_nc_zt=23&_nc_ht=scontent.fwnp1-1.fna&_nc_gid=AQVxmdZLFAF8unX1_kALzn2&oh=00_AYDQ0jfHIeYWsDTXl8e4DnB9P-jlljyYl_vt-In3y36tzA&oe=67463843"
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
