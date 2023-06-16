import { View, Text } from 'react-native';
import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';

const onSignInFacebook = () => {
  console.warn("Facebook");
};

const onSignInGoogle = async () => {
//   try {
//     // Trigger Google sign-in flow
//     await GoogleSignin.hasPlayServices();
//     const userInfo = await GoogleSignin.signIn();
//     console.log(userInfo);
//   } catch (error) {
//     console.error('Google sign-in error:', error);
//   }
};

const onSignInApple = () => {
  console.warn("Apple");
};

const SocialSignInButtons = () => {
  return (
    <>
      {/* <CustomButton 
            text="Sign in with Facebook"
            onPress={onSignInFacebook}
            type="PRIMARY"
            bgColor="#E7EAF4"
            fgColor="#4765A9"
        /> */}

      <CustomButton 
          text="Sign in with Google"
          onPress={onSignInGoogle}
          type="PRIMARY"
          bgColor="#FAE9EA"
          fgColor="#DD4D44"
      />

      <CustomButton 
          text="Sign in with Apple"
          onPress={onSignInApple}
          type="PRIMARY"
          bgColor="#e3e3e3"
          fgColor="#363636"
      />
    </>
  );
};

export default SocialSignInButtons;