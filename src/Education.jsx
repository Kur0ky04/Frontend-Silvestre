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
                src="https://scontent.fwnp1-1.fna.fbcdn.net/v/t39.30808-6/467962289_122169859262101467_4829203240449952379_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGJOkP0nCgpJCTnn6ZYrs8Tx6Yb0o9ZuADHphvSj1m4APavPMYCQaSlx60zYN2Pj7s0M7KzS5RzlarR9JmTKghz&_nc_ohc=Q1nl3N6MAy0Q7kNvgGcp_mw&_nc_zt=23&_nc_ht=scontent.fwnp1-1.fna&_nc_gid=ALe9lnRvlyCLLVXgy1Gbm4u&oh=00_AYBcHyQCDh0s56wI0FXBEZ0I8mf9o3BIqM3xg32T6UZTGQ&oe=67461B6F"
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
            Naga College Foundation Inc.<br />
            Graduation: (Soon!)
          </p>

          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent.fwnp1-1.fna.fbcdn.net/v/t1.15752-9/462542856_543212241900376_9096596393250128789_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeE-wwQUAXe6uGYAAFcoPj9O0lBzpargOBTSUHOlquA4FAhZQD-RDw6CuEP4bWL59b4hwVNrpX4cNNiRM8eORdwD&_nc_ohc=kgqI-98DCekQ7kNvgG7ZQax&_nc_zt=23&_nc_ht=scontent.fwnp1-1.fna&oh=03_Q7cD1QH-tHFi31SjCWfSWaRdnt0Uba8uz761Sj8Xo7wzEGthnw&oe=6767B4AD"
                alt="College Image 1"
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
                src="https://scontent.fwnp1-1.fna.fbcdn.net/v/t39.30808-6/467932787_122169857774101467_4371047973175705031_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHM_MpPvNLzT8rAWSwmwVHe82BGNfHvxzPzYEY18e_HM2uP6qLzSTVJjog8exVprabB-Wwkh1FcEQzqPwfbWz8d&_nc_ohc=mvqSGqrcqVoQ7kNvgH-Xpr-&_nc_zt=23&_nc_ht=scontent.fwnp1-1.fna&_nc_gid=AMsnuhf-HQvoKFRG5OeQbCr&oh=00_AYATiHqoDyI5pEMbMoorPbUQzBTTfp6nYMuVGQ48zJtyCw&oe=67461DF9"
                alt="College Image 2"
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
                src="https://scontent.fwnp1-1.fna.fbcdn.net/v/t39.30808-6/468004069_122169857702101467_3587459519834754931_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHMMVtdNjSEBBadiW5ku-1vN3lseTyP9YQ3eWx5PI_1hBnaJuRZG764fXUB9jQ2IVX3U8PVMGymH-uN88K1zYxR&_nc_ohc=O2iTPJJeIW4Q7kNvgEqMXP1&_nc_zt=23&_nc_ht=scontent.fwnp1-1.fna&_nc_gid=ACPX1JQ1tweCMeTlo_Kpg3w&oh=00_AYDRzgFVu1liStzNa23SkrElEHTtQDcK7irLuY4U6FkzDg&oe=67461B60"
                alt="College Image 3"
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
      </div>
    </div>
  );
}

export default Education;
