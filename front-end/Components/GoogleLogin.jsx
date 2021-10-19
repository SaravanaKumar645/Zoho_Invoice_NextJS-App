import React from "react";
import GoogleLogin from "react-google-login";
import axios from "axios";

export default function GoogleLoginComponent(props) {
  const responseSuccessGoogle = (response) => {
    //console.log(response);
    console.log("Inside Google Login.....");
    axios({
      method: "POST",
      url: "http://localhost:4000/api/login-user/google",
      data: { tokenid: response.tokenId },
    }).then((response) => {
      const { success, accessToken, refreshToken, msg, picture, name, email } =
        response.data;
      if (success) {
        // console.log(
        //   `Access Token :${accessToken}\nRefresh Token :${refreshToken}\n}`
        // );
        props.signInResponse(success, response.data);
        //console.log(response.data);
      }
    });
  };
  const responseFailureGoogle = (response) => {
    console.log(response);
    props.setSuccess(false);
  };

  return (
    <div>
      <GoogleLogin
        buttonText={<b>Google</b>}
        style={{ backgroundColor: "blue", borderRadius: "10px" }}
        clientId={process.env.NEXT_PUBLIC_OAUTH_CLIENT_ID}
        onSuccess={responseSuccessGoogle}
        onFailure={responseFailureGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}
