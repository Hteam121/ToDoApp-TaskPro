import { View, Image, StyleSheet, ScrollView, Text} from 'react-native'
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput/CustomInput.js';
import CustomButton from '../../components/CustomButton/CustomButton.js';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';

const SignUpScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const onSignUpPressed = ()=> {
        console.warn("Sign up")
    }
    const onSignInPressed = () => {
        console.warn("Sign in")
    }
    const onTremsOfUsePressed = () => {
        console.warn("Terms of Use Pressed")
    }
    const onPrivacyPolicyPressed = () => {
        console.warn("Privacy Policy Pressed")
    }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}> Create an Account </Text>
            <CustomInput 
                placeholder="Username"
                value={username} 
                setValue={setUsername}
                secureTextEntry={false}
            />
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
    }
});
  
export default SignUpScreen