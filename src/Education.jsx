import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Education() {
  return (
    <div
      id="education"
      style={{
        padding: '50px',
        backgroundColor: '#2E3B55',
        fontFamily: 'Arial, sans-serif',
        color: '#fff',
      }}
    >
      <h2
        style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '50px',
          color: '#f1c40f',
        }}
      >
        My Education Journey
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            backgroundColor: '#34495e',
            padding: '25px',
            borderRadius: '12px',
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
            textAlign: 'center',
            color: '#fff',
          }}
        >
          <h3 style={{ fontSize: '1.7rem', marginBottom: '15px', color: '#f39c12' }}>Elementary</h3>
          <p style={{ fontSize: '1rem', marginBottom: '20px' }}>
            Naga Central School 1<br />
            Graduation: March of 2011
          </p>

          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/src/assets/image/Central 3.jpg"
                alt="Elementary Image 1"
                style={{
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                }}
              />
              <Carousel.Caption>
                <p>Elementary Image 1</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/src/assets/image/Central.jpg"
                alt="Elementary Image 2"
                style={{
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                }}
              />
              <Carousel.Caption>
                <p>Elementary Image 2</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/src/assets/image/Central 1.jpg"
                alt="Elementary Image 3"
                style={{
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                }}
              />
              <Carousel.Caption>
                <p>Elementary Image 3</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div
          style={{
            backgroundColor: '#34495e',
            padding: '25px',
            borderRadius: '12px',
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
            textAlign: 'center',
            color: '#fff',
          }}
        >
          <h3 style={{ fontSize: '1.7rem', marginBottom: '15px', color: '#f39c12' }}>Highschool</h3>
          <p style={{ fontSize: '1rem', marginBottom: '20px' }}>
            Camarines Sur National High School<br />
            Graduation: May of 2017
          </p>

          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/src/assets/image/Camhi.webp"
                alt="Highschool Image 1"
                style={{
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                }}
              />
              <Carousel.Caption>
                <p>Highschool Image 1</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/src/assets/image/Camhi 1.jpg"
                alt="Highschool Image 2"
                style={{
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                }}
              />
              <Carousel.Caption>
                <p>Highschool Image 2</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/src/assets/image/Camhi 2.jpg"
                alt="Highschool Image 3"
                style={{
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                }}
              />
              <Carousel.Caption>
                <p>Highschool Image 3</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div
          style={{
            backgroundColor: '#34495e',
            padding: '25px',
            borderRadius: '12px',
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
            textAlign: 'center',
            color: '#fff',
          }}
        >
          <h3 style={{ fontSize: '1.7rem', marginBottom: '15px', color: '#f39c12' }}>College</h3>
          <p style={{ fontSize: '1rem', marginBottom: '20px' }}>
            Naga College Foundation Inc.<br />
            Graduation: (Soon!)
          </p>

          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/src/assets/image/462557529_1603190603657617_7716651374219478290_n.jpg"
                alt="College Image 1"
                style={{
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                }}
              />
              <Carousel.Caption>
                <p>College Image 1</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/src/assets/image/462553707_875808871424510_6488647401333027885_n.jpg"
                alt="College Image 2"
                style={{
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                }}
              />
              <Carousel.Caption>
                <p>College Image 2</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/src/assets/image/462549041_1272844280804602_2328390490788769023_n.jpg"
                alt="College Image 3"
                style={{
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                }}
              />
              <Carousel.Caption>
                <p>College Image 3</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Education;
