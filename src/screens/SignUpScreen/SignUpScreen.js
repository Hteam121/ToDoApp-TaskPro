import { View, Image, StyleSheet, ScrollView, Text} from 'react-native'
import React, {useState, useEffect} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import SignInScreen from '../SignInScreen/SignInScreen';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUpScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [errorMessage, setErrorMessage] = useState(null); 
    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          if (user) {
            navigation.replace("ConfirmEmail")
          }
        })
        return unsubscribe
      }, [])

      const onSignUpPressed = ()=> {
        if(password !== passwordRepeat) {
            setErrorMessage('Passwords do not match');
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
            const user = userCredentials.user; // Updated based on Firebase v9 API
            console.log('Logged in with', user.email);
        })
        .catch(error => alert(error.message));
    }
    const onSignInPressed = () => {
        navigation.navigate("SignIn")
    }
    const onTremsOfUsePressed = () => {
        console.warn("Terms of Use Pressed")
    }
    const onPrivacyPolicyPressed = () => {
        console.warn("Privacy Policy Pressed")
    }

    const navigation = useNavigation();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}> Create an Account </Text>
            <CustomInput 
                placeholder="Email"
                value={email} 
                setValue={setEmail}
                secureTextEntry={false}
            />
            <CustomInput
                placeholder={"Password"}
                value={password}
                setValue={setPassword}
                secureTextEntry={true}
            />
            <CustomInput 
                placeholder="Repeat Password"
                value={passwordRepeat} 
                setValue={setPasswordRepeat}
                secureTextEntry={true}
            />
            <CustomButton 
                text="Register" 
                onPress={onSignUpPressed}
                type="PRIMARY"
            />

            <Text style={styles.text} >By registering you confirm that you accept our {' '}
                <Text style={styles.link} onPress={onTremsOfUsePressed}>Terms of Use</Text> and 
                <Text style={styles.link} onPress={onPrivacyPolicyPressed}> Privacy Policy</Text>
            </Text>

            <SocialSignInButtons/>

            <CustomButton 
                text="Have an account? Sign In"
                onPress={onSignInPressed}
                type="TERTIARY"
            />
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
        marginTop: '25%',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#051C60',
        marginTop: 10,
        marginBottom: 30,
    },
    text: {
        color: 'gray',
        marginVertical: 10,
    },
    link: {
        color: '#FFA726'
    },
});
  
export default SignUpScreen