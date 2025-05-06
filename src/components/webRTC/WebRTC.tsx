import React from 'react';
import Webcam from 'react-webcam';

const WebRTC = () => {
  // Inline styles for centering with explicit typing for CSSProperties
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column', // Valid value for flexDirection
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Full viewport height
    margin: 0,
    backgroundColor: '#f0f0f0',
    position: 'relative', // For absolute positioning of the button
  };

  // Styles for the "End Call" button
  const buttonStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: '20px', // 20px from the bottom
    backgroundColor: '#f44336', // Red color
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  };

  return (
    <div style={containerStyle}>
      <div>
        <h2>Online</h2>
        <Webcam />
      </div>
      
      {/* End Call button */}
      <button style={buttonStyle}>End Call</button>
    </div>
  );
};

export default WebRTC;
