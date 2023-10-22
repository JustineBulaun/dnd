import React from "react";

const SignInPage = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  };

  const googleButtonStyle = {
    backgroundColor: "#4285F4",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  };

  const signInWithGoogle = () => {
    // Implement Google sign-in functionality here
    // You can use Google OAuth or Firebase Authentication, for example
  };

  return (
    <div style={containerStyle}>
      <h2>Sign In | DND</h2>
      <button style={googleButtonStyle} onClick={signInWithGoogle}>
        Sign In with Google
      </button>
    </div>
  );
};

export default SignInPage;
