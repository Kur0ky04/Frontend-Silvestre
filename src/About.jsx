import React from 'react';

function Home() {
  return (
    <div
      id="about"
      style={{
        padding: '50px 20px',
        backgroundColor: '#f5f5dc',
        width: '100%',
        minHeight: '100vh',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          textAlign: 'center',
          marginBottom: '30px',
        }}
      >
        <img
          src="/src/assets/image/Family.jpg"
          alt="Profile"
          style={{
            width: '300px',
            height: '300px',
            objectFit: 'cover',
            borderRadius: '50%',
            border: '6px solid white',
            boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
            marginBottom: '20px',
            transition: 'transform 0.3s ease-in-out',
          }}
        />
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#2E3B55', marginBottom: '15px' }}>
          My personal website
        </h2>
        <p
          style={{
            fontSize: '1rem',
            maxWidth: '700px',
            lineHeight: '1.6',
            margin: '0 auto',
            fontWeight: '300',
            color: '#333',
            padding: '0 10px',
          }}
        >
          Hello! My name is Roi Vincent Silvestre, a passionate and driven second-year college student at Naga
          College Foundation, currently pursuing a Bachelor of Science in Computer Studies. My interests lie at the
          crossroads of technology and innovation, with a particular focus on emerging trends like Artificial
          Intelligence (AI), Edge Computing, and Neuromorphic Computing. Outside of academics, I enjoy engaging in
          creative hobbies and taking care of my growing corn crops, which reflect my appreciation for nature and
          hands-on work. I’m also exploring tools like GitHub and Render to enhance my development skills. Fluent in
          Rinconada Bikol, I take pride in my cultural roots and hope to integrate my diverse interests into
          meaningful projects that make a difference.
        </p>
      </div>
    </div>
  );
}

export default Home;
