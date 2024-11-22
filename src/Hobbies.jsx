import React from 'react';

function Hobbies() {
  return (
    <div
      id="hobbies"
      style={{
        padding: '50px',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        backgroundColor: '#ccccff',
      }}
    >
      <h2 style={{ fontSize: '2rem', color: '#5754ff', marginBottom: '30px' }}>Hobbies</h2>

      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Pets</h3>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            marginBottom: '30px',
          }}
        >
          <div>
            <img
              src="\src\assets\image\Cat.jpg"
              alt="Cats"
              style={{
                width: '100px',
                height: '100px',
                objectFit: 'cover',
                border: '3px solid #5754ff',
              }}
            />
            <p style={{ marginTop: '10px', fontSize: '1rem', color: '#333' }}>Cat</p>
          </div>
          <div>
            <img
              src="\src\assets\image\Cow.jpg"
              alt="Cats"
              style={{
                width: '100px',
                height: '100px',
                objectFit: 'cover',
                border: '3px solid #5754ff',
              }}
            />
            <p style={{ marginTop: '10px', fontSize: '1rem', color: '#333' }}>Cow</p>
          </div>
          <div>
            <img
              src="\src\assets\image\Dog.jpg"
              alt="Dogs"
              style={{
                width: '100px',
                height: '100px',
                objectFit: 'cover',
                border: '3px solid #5754ff',
              }}
            />
            <p style={{ marginTop: '10px', fontSize: '1rem', color: '#333' }}>Dog</p>
          </div>
        </div>

        <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Sports</h3>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            marginBottom: '30px',
          }}
        >
          <div>
            <img
              src="\src\assets\image\Bike.jpg"
              alt="Bike"
              style={{
                width: '100px',
                height: '100px',
                objectFit: 'cover',
                border: '3px solid #5754ff',
              }}
            />
            <p style={{ marginTop: '10px', fontSize: '1rem', color: '#333' }}>Bike</p>
          </div>
          <div>
            <img
              src="\src\assets\image\Basketball.jpg"
              alt="Basketball"
              style={{
                width: '100px',
                height: '100px',
                objectFit: 'cover',
                border: '3px solid #5754ff',
              }}
            />
            <p style={{ marginTop: '10px', fontSize: '1rem', color: '#333' }}>Basketball</p>
          </div>
        </div>

        <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Games</h3>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
          }}
        >
          <div>
            <img
              src="\src\assets\image\Lol.jpg"
              alt="Game 1"
              style={{
                width: '100px',
                height: '100px',
                objectFit: 'cover',
                border: '3px solid #5754ff',
              }}
            />
            <p style={{ marginTop: '10px', fontSize: '1rem', color: '#333' }}>League of Legends</p>
          </div>
          <div>
            <img
              src="\src\assets\image\MU.png"
              alt="Game 2"
              style={{
                width: '100px',
                height: '100px',
                objectFit: 'cover',
                border: '3px solid #5754ff',
              }}
            />
            <p style={{ marginTop: '10px', fontSize: '1rem', color: '#333' }}>MU Origin 3</p>
          </div>
          <div>
            <img
              src="\src\assets\image\HOK.jpg"
              alt="Game 3"
              style={{
                width: '100px',
                height: '100px',
                objectFit: 'cover',
                border: '3px solid #5754ff',
              }}
            />
            <p style={{ marginTop: '10px', fontSize: '1rem', color: '#333' }}>Honor of Kings</p>
          </div>
          <div>
            <img
              src="\src\assets\image\Dota.jpg"
              alt="Game 4"
              style={{
                width: '100px',
                height: '100px',
                objectFit: 'cover',
                border: '3px solid #5754ff',
              }}
            />
            <p style={{ marginTop: '10px', fontSize: '1rem', color: '#333' }}>Dota</p>
          </div>
          <div>
            <img
              src="\src\assets\image\Pubg.jpg"
              alt="Game 5"
              style={{
                width: '100px',
                height: '100px',
                objectFit: 'cover',
                border: '3px solid #5754ff',
              }}
            />
            <p style={{ marginTop: '10px', fontSize: '1rem', color: '#333' }}>PUBG</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hobbies;
