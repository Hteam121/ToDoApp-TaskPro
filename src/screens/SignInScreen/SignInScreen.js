import { View, Image, StyleSheet, ScrollView} from 'react-native'
import React, {useState} from 'react';
import Logo from '../../../assets/images/putana-logo.png';
import CustomInput from '../../components/CustomInput/CustomInput.js';
import CustomButton from '../../components/CustomButton/CustomButton.js';

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const onSignInPressed = ()=> {
        console.warn("Sign in")
    }
    const onForgotPasswordPressed = () => {
        console.warn("Forgot Password")
    }
    const onSignInFacebook = () => {
        console.warn("Facebook")
    }
    const onSignInGoogle = () => {
        console.warn("Google")
    }
    const onSignInApple = () => {
        console.warn("Apple")
    }
    const onSignUpPressed = () => {
        console.warn("SignUp")
    }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Image source={Logo} style={styles.logo} resizeMode='contain' />
            <CustomInput 
                placeholder="Username"
                value={username} 
                setValue={setUsername}
                secureTextEntry={false}
            />
            <CustomInput
                placeholder={"Password"}
                value={password}
                setValue={setPassword}
                secureTextEntry={true}
            />
            <CustomButton 
                text="Sign In" 
                onPress={onSignInPressed}
                type="PRIMARY"
            />

            <CustomButton 
                text="Forgot Password" 
                onPress={onForgotPasswordPressed} 
                type="TERTIARY"
            />

            <CustomButton 
                text="Sign in with Facebook"
                onPress={onSignInFacebook}
                type="PRIMARY"
                bgColor="#E7EAF4"
                fgColor="#4765A9"
            />

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

            <CustomButton 
                text="Don't have an account? Create One"
                onPress={onSignUpPressed}
                type="TERTIARY"
            />
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    logo: {
      width: '60%', // corrected from '60%%'
      height: '60%',
      maxWidth: 300,
      marginVertical: '-8%',
    },
    root: {
        alignItems: 'center',
        padding: 20,
    },
});
  
export default SignInScreen