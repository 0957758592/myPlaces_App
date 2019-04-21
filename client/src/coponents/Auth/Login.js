import React from "react";
import { GraphQLClient } from "graphql-request";
import { GoogleLogin } from "react-google-login";
import { withStyles } from "@material-ui/core/styles";

const ME_QUERY = `
{
  me {
    _id
    name
    email
    picture
  
  }
}
`

const Login = ({ classes }) => {
  const onSuccess = async googleUser => {
    const idToken = googleUser.getAuthResponse().id_token;
    const client = new GraphQLClient("http://localhost:4000/graphql", {
      headers: { authorization: idToken }
    });

    const data = await client.request(ME_QUERY);
    console.log({data});
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
