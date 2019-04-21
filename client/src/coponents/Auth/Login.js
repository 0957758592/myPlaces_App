import React from "react";
import { GoogleLogin } from "react-google-login";
import { withStyles } from "@material-ui/core/styles";

const Login = ({ classes }) => {
  const onSuccess = googleUser => {
    const idToken = googleUser.getAuthResponse().id_token;
    console.log({ idToken });
  };
  return (
    <GoogleLogin
      clientId="884496672766-cirbkar0etem9ab9pof10vdqm57ar5f3.apps.googleusercontent.com"
      onSuccess={onSuccess}
      isSignedIn={true}
    />
  );
};

const styles = {
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    fleDirection: "column",
    alignItems: "center"
  }
};
export default withStyles(styles)(Login);
