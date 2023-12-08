import React from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { useGoogleLogin } from '@react-oauth/google';
import * as jwt_decode from "jwt-decode";
import { LogIn } from '..';
import axios from 'axios';

const Login2 = () => {
    const logIn = useGoogleLogin({
        onSuccess: async(tokenRespond) => {
            try {
                const res = await axios.get(
                    'https://www.googleapis.com/oauth2/v3/userinfo',
                    {
                        headers: {
                            Authorization: `Bearer ${tokenRespond.access_token}`,
                        },
                    }
                    )
                    
                // console.log(res.data);

                try {
                    const server_host = "http://127.0.0.1:8080";
                    // send result to backend
                    const result = await axios.post(
                        `${server_host}/api/auth/googleLogin`,
                        {
                        account_name: res.data['email'],
                        password: tokenRespond.access_token,
                        profile_name: res.data['name'],
                        nationality: res.data['locale'],
                        user_type: false,
                        email: res.data['email'],
                        avt_url: res.data['picture'],
                        }, 
                        {
                            headers: {
                            "Content-Type": "application/json", 
                            Authorization: `Bearer ${tokenRespond.access_token}`,
                        
                            },
                        }
                    );

                    console.log("Token: " + result.data.accessToken);
                } catch (error) {
                    console.log("Error with GoogleLogin" + error)
                }

            } catch (error) {
                console.log(error)
            }
        }
    });

    return (
        // <div>
        //     <GoogleOAuthProvider clientId="138372560551-k6qucf4eebnppht116rieqoa6bfm801b.apps.googleusercontent.com">
        //         <GoogleLogin
        //             onSuccess={credentialResponse => {
        //                 const credentialResponseDecoded = jwt_decode.jwtDecode(
        //                     credentialResponse.credential
        //                 );
        //                 console.log(credentialResponseDecoded);
        //                 console.log(credentialResponse);
        //             }}
        //             onError={() => {
        //                 console.log('Login Failed')
        //             }}
        //         />
        //     </GoogleOAuthProvider>

        // </div>

        <div>
            
                <button onClick={() => logIn()}>
                    Sign In with Google 🚀
                </button>
            
        </div>
    )
}

export default Login2
