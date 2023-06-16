import { View, Image, StyleSheet, ScrollView} from 'react-native'
import React, {useState, useEffect} from 'react';
import Logo from '../../../assets/images/putana-logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const SignInScreen = () => {
    const navigation = useNavigation();
    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          if (user) {
            navigation.replace("Home")
          }
        })
        return unsubscribe
      }, [])

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const onSignInPressed = () => {
        signInWithEmailAndPassword(auth, username, password)
        .then(userCredentials => {
            const user = userCredentials.user; // Updated based on Firebase v9 API
            console.log('Logged in with', user.email);
            navigation.navigate('home')
        })
        .catch(error => alert(error.message));
    }
    
    const onForgotPasswordPressed = () => {
        navigation.navigate("ForgotPassword")
    }
    const onSignUpPressed = () => {
        navigation.navigate("SignUp")
    }

  return (
    <ScrollView 
        contentContainerStyle={{flexGrow: 1}} 
        keyboardShouldPersistTaps='handled' 
        showsVerticalScrollIndicator={false}
    >
        <View style={styles.root}>
            <Image source={Logo} style={styles.logo} resizeMode='contain' />
            <CustomInput 
                placeholder="Email"
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

            <SocialSignInButtons />

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
      marginBottom: '-25%',
      marginTop: '-15%',
    },
    root: {
        alignItems: 'center',
        padding: 20,
    },
});
  
export default SignInScreen