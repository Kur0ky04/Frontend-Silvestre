import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Education() {
  return (
    <div
      id="education"
      style={{
        padding: '50px',
        backgroundColor: 'skyblue',
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
                src="https://scontent.fwnp1-1.fna.fbcdn.net/v/t39.30808-6/464746182_10159997474031507_4816848164672239846_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeF6Dy29FKTmmI-2740ZPZoJ-1B1Tuyki-j7UHVO7KSL6CVvSYe0UukQYHnmOwjP_uuq7LSXbz_THIOqy-jgZk33&_nc_ohc=m14V0QEFKDYQ7kNvgG8mR1D&_nc_zt=23&_nc_ht=scontent.fwnp1-1.fna&_nc_gid=AENeG6pQws0BQ2ZKZddyeq0&oh=00_AYA5cqQnOpWqXOomIISKhStCWsamjrprrYmZH4AVadqXLw&oe=6746354F"
                alt="Elementary Image 1"
                style={{
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                }}
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent.fwnp1-1.fna.fbcdn.net/v/t39.30808-6/467896301_122169859292101467_8409695916494642260_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeF2nrw8cFZO1PNpCMZlGE2D8QZJ2IHysQbxBknYgfKxBrRsPpuDaop20FYEYFuCk--Xrov3ePF-kqpA27FQCc-3&_nc_ohc=RdrFOSqyTikQ7kNvgFLlETH&_nc_zt=23&_nc_ht=scontent.fwnp1-1.fna&_nc_gid=Aa8qedJXmgkwZzChrdZ-nke&oh=00_AYDfmD5Gn8uXpDfr5REFXnIqatOqW9DOiCRLhDcjXrDRMg&oe=67463233"
                alt="Elementary Image 2"
                style={{
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                }}
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent.fwnp1-1.fna.fbcdn.net/v/t39.30808-6/467871868_122169859406101467_8193682346832274259_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFi9CjU5GrMULBC4DSEBTBp2m4KgjJQVvLabgqCMlBW8lEUSiRkg5yQHiilN46jGJMDetdKgoWVRka27-LcQTcg&_nc_ohc=VCCFemxNlMIQ7kNvgEEqbhs&_nc_zt=23&_nc_ht=scontent.fwnp1-1.fna&_nc_gid=AsYEnx7Arz6HLpzqr_0cIoa&oh=00_AYBrePX7aF5pzgiM6Cabn_F6S2P7-EfjOKetNxjcC-unhg&oe=674647E8"
                alt="Elementary Image 3"
                style={{
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                }}
              />
              <Carousel.Caption>
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
                src="https://scontent.fwnp1-1.fna.fbcdn.net/v/t39.30808-6/372898703_679865847499346_403059792297333443_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGmNDHo1PqkP0XmNis5cXgWCRNC4CR9R1sJE0LgJH1HW21vPRfw4-dXYjvLSziT9HNVTuu44PWWJOB6-u7-J6cV&_nc_ohc=wXiFsrErUgUQ7kNvgEkh5ot&_nc_zt=23&_nc_ht=scontent.fwnp1-1.fna&_nc_gid=A8q_cAlIi2L2bzx4vC6bB9t&oh=00_AYCf3pCxEddW10RzEQ0tEqTkn1BI6dOzB210p9RenI1ykQ&oe=674628D2"
                alt="Highschool Image 1"
                style={{
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                }}
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent.fwnp1-1.fna.fbcdn.net/v/t39.30808-6/467975316_122169859238101467_7468942289871909988_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEffwIGKq57Hxp1I_G8BB4-ZpkMbf7aCIFmmQxt_toIgSQfFzmgVFdrFut7VZYO0txuB9yhB8DMp6yfYOZaOWmZ&_nc_ohc=1MFBJUlCtX8Q7kNvgHG5Bv3&_nc_zt=23&_nc_ht=scontent.fwnp1-1.fna&_nc_gid=AvQoxeSsDkoDAIHucTGmEHh&oh=00_AYCHofRofHr2tQLJeqOE6Wto3ZQ52K0co5mirLrpz2uY0w&oe=67463A20"
                alt="Highschool Image 2"
                style={{
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                }}
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent.fwnp1-1.fna.fbcdn.net/v/t39.30808-6/467975316_122169859238101467_7468942289871909988_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEffwIGKq57Hxp1I_G8BB4-ZpkMbf7aCIFmmQxt_toIgSQfFzmgVFdrFut7VZYO0txuB9yhB8DMp6yfYOZaOWmZ&_nc_ohc=1MFBJUlCtX8Q7kNvgHG5Bv3&_nc_zt=23&_nc_ht=scontent.fwnp1-1.fna&_nc_gid=AvQoxeSsDkoDAIHucTGmEHh&oh=00_AYCHofRofHr2tQLJeqOE6Wto3ZQ52K0co5mirLrpz2uY0w&oe=67463A20"
                alt="Highschool Image 3"
                style={{
                  height: '250px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                }}
              />
              <Carousel.Caption>
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
            Naga College Foundation<br />
            Current: 2nd Year BS Computer Studies
          </p>
        </div>
      </div>
    </div>
  );
}

export default Education;
