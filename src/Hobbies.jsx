import React from 'react';

const images = {
  cat: 'https://scontent.fwnp1-1.fna.fbcdn.net/v/t39.30808-6/467889432_122169857564101467_7060551209545718737_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHKePRGP7AUsU0YgnN0ewyaVpTEbYpfwM9WlMRtil_Az-ROkNiomlvW2Ezl8wDL23rb9uwGNmKZ5Oblnap0nahk&_nc_ohc=XRBTlG2ZAxAQ7kNvgEagNbV&_nc_zt=23&_nc_ht=scontent.fwnp1-1.fna&_nc_gid=AqFF9Tb2KwJ-MIQq25zIlgA&oh=00_AYAr_zuIDfyn9e6F69rxmd6sQh9soQyB5LBYKds-QmNEIQ&oe=67462AA9',
  cow: 'https://scontent.fwnp1-1.fna.fbcdn.net/v/t39.30808-6/468010129_122169857504101467_2435609804382890209_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGN_GlmRjzMGnFNmisVw4hHDtrnMNSx1nIO2ucw1LHWcoj6_7O43Av0eLwwhD6JFgkhVIEwk-CI28F10N0mJ89c&_nc_ohc=2A4fAHkn-LsQ7kNvgFGOjAr&_nc_zt=23&_nc_ht=scontent.fwnp1-1.fna&_nc_gid=Am21gSkIvcw-93prLQHN_nc&oh=00_AYD5WhFbabyWw-czZnyUnzsH4SVr_SNjkxZj-HwB2dFc-Q&oe=67461BAA',
  dog: 'https://scontent.fwnp1-1.fna.fbcdn.net/v/t39.30808-6/467948819_122169857732101467_5663490835243496091_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFXuOrbzwtGsYBC8s1SoTO4eQ5mi0_q7jl5DmaLT-ruOdyC-5QUO8ojM8uoH1klKQK6lVeJiJ3oyvB7-523jYhW&_nc_ohc=mFNljAZ-iloQ7kNvgHKz7RF&_nc_zt=23&_nc_ht=scontent.fwnp1-1.fna&_nc_gid=AIbxkaiPCF99jOA0IS-R2H3&oh=00_AYByoNdsUyOtya4WQh5Hbb5fXOu0w9PlloarRxc2Tm5eFA&oe=67462BDA',
  bike: 'https://scontent.fwnp1-1.fna.fbcdn.net/v/t39.30808-6/467936045_122169857456101467_4145452196635155106_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFXJT1xoTqoadx_RxZWA5X3CCkE5-Hi9yUIKQTn4eL3JSkeCt86shHwuRuG2rT3LJilX-B0Y0xao539kAJacnQU&_nc_ohc=li_zoIMLic8Q7kNvgHR9vUR&_nc_zt=23&_nc_ht=scontent.fwnp1-1.fna&_nc_gid=ADvhxstgLAxfTsBJ619B9CL&oh=00_AYDGRmtVJP5uKl83R012ew69xO2nYgP3N40Zi2ribZ68nA&oe=67462C9E',
  basketball: 'https://scontent.fwnp1-1.fna.fbcdn.net/v/t39.30808-6/468076606_122169857408101467_8882532842730699251_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHbM-h8HASgKS3GnfzlfEQei6oGn1VqJQSLqgafVWolBBB8r6b5wnodZ_nWIkAnyq4oNRF6B_tSeKJPRM9-ZuFm&_nc_ohc=Dg0dsQvj8VMQ7kNvgHGoQiv&_nc_zt=23&_nc_ht=scontent.fwnp1-1.fna&_nc_gid=A2Xbf9dSjZmjg6nB69s2FME&oh=00_AYCpjRK5S-fA9AP-3yyWyt64aWJucbuG1slXGf1A-qpZIw&oe=67461F69',
  lol: 'https://scontent.fwnp1-1.fna.fbcdn.net/v/t39.30808-6/467860906_122169857318101467_1186779665228114161_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEo8Q6RRr0Kgw6GqzeoNBz5n6tLCb8zis2fq0sJvzOKzTBUmmN-UudduY75oz53vm7Ilgjt0QO5YcjQYY39-aPm&_nc_ohc=qZPSaLFkDlAQ7kNvgGsbgPu&_nc_zt=23&_nc_ht=scontent.fwnp1-1.fna&_nc_gid=AfeFtNSiM6sQR0WTM0KMb7K&oh=00_AYCj3BR9Kq8auf6iqGw7uz3HBXDk4CJTeYgKBZbJDAwODg&oe=67464144',
  mu: 'https://scontent.fwnp1-1.fna.fbcdn.net/v/t39.30808-6/468010892_122169857360101467_7814993080423820341_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGeQMgse6UdiDbV3AdvIF_0vYXBlTOjTUO9hcGVM6NNQytyQIW7N3f8Dd02ioHpJHeQ0CSQaEodD2wtMBIUxLvx&_nc_ohc=mK72YpPIFXYQ7kNvgH_aTLZ&_nc_zt=23&_nc_ht=scontent.fwnp1-1.fna&_nc_gid=AhUdTOUohddPCStD2kk0mwC&oh=00_AYBcbHTrojPJQsRU8GT7BBRlEHQDeGAK4sR4RxL-SFrxAQ&oe=67463FEE',
  honor: 'https://scontent.fwnp1-1.fna.fbcdn.net/v/t39.30808-6/467950786_122169857204101467_1305703709595267462_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGE_7D57EZGmQr8iGA8D1IiAdJ_V7quab8B0n9Xuq5pv2W1iWbxW1t2C84-Y68HEM2sXi_PKViOCurVn_UtXsOC&_nc_ohc=aUKabhXdVJ0Q7kNvgFilxbO&_nc_zt=23&_nc_ht=scontent.fwnp1-1.fna&_nc_gid=AjL3MMLpaR2Jl37Fih2UZn2&oh=00_AYAx2Qv_DcG9tQs5LtKTQi5MIQokz9WrhDe5PV2AP7FDVw&oe=6746376F',
  dota: 'https://scontent.fwnp1-1.fna.fbcdn.net/v/t39.30808-6/467897286_122169857210101467_8073536293241075968_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeGXj_Dplynfb-rxYEMBfmzir-uN2Lrg2duv643YuuDZ28p3DCiSN4pf3_6_IyM1JQew_z7Sv_RMIc7WgeSKVOaw&_nc_ohc=l49v7I_SMpgQ7kNvgFqJPpK&_nc_zt=23&_nc_ht=scontent.fwnp1-1.fna&_nc_gid=AmkGh3_njiGA_jsoVqlDUJd&oh=00_AYAHolx3JWO_68UhG84nJRjSykPKAJFqQyM_YnmEDV6mHA&oe=67462F92',
  pubg: 'https://scontent.fwnp1-1.fna.fbcdn.net/v/t39.30808-6/467843653_122169857258101467_2867570060954588936_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFe5Ow2DfxexLqabRPjZ8KzOwbRECbpfSc7BtEQJul9J9kc6DFtFNS625Mszz1I7Rv9pjXup8CYbQibQMm1F9f8&_nc_ohc=sE_JU3HaQhsQ7kNvgFas3Ru&_nc_zt=23&_nc_ht=scontent.fwnp1-1.fna&_nc_gid=A5iDZue2dOyKMYmVbLOXiAx&oh=00_AYDYaaPbAEyuAiwV4hYMDVKv-ZUHKDVeYr3sKnDqhWFuLg&oe=67463D7A',
};

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
          <HobbyCard image={images.cat} title="Cat" />
          <HobbyCard image={images.cow} title="Cow" />
          <HobbyCard image={images.dog} title="Dog" />
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
          <HobbyCard image={images.bike} title="Bike" />
          <HobbyCard image={images.basketball} title="Basketball" />
        </div>

        <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Games</h3>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
          }}
        >
          <HobbyCard image={images.lol} title="League of Legends" />
          <HobbyCard image={images.mu} title="MU Origin 3" />
          <HobbyCard image={images.honor} title="Honor of Kings" />
          <HobbyCard image={images.dota} title="Dota" />
          <HobbyCard image={images.pubg} title="PUBG" />
        </div>
      </div>
    </div>
  );
}

function HobbyCard({ image, title }) {
  return (
    <div>
      <img
        src={image}
        alt={title}
        style={{
          width: '100px',
          height: '100px',
          objectFit: 'cover',
          border: '3px solid #5754ff',
        }}
      />
      <p style={{ marginTop: '10px', fontSize: '1rem', color: '#333' }}>{title}</p>
    </div>
  );
}

export default Hobbies;
