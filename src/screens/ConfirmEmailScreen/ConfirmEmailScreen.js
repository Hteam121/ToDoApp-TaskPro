import { View, Image, StyleSheet, ScrollView, Text} from 'react-native'
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput/CustomInput.js';
import CustomButton from '../../components/CustomButton/CustomButton.js';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import { getAuth, sendEmailVerification, createUserWithEmailAndPassword } from "firebase/auth";


const ConfirmEmailScreen = () => {
    const [code, setCode] = useState('');

    const onConfirmPressed = ()=> {
        const auth = getAuth();
        const user = auth.currentUser;
        if (user) {
            user.reload()
            .then(() => {
                if (user.emailVerified) {
                    navigation.navigate("Home") 
                } else {
                    alert('Email not verified yet');
                }
            })
            .catch(error => {
                console.error('Error reloading user data', error);
            });
        }       
    }    
    const onResend = () => {
        const auth = getAuth();
        const user = auth.currentUser;
        if (user) {
            sendEmailVerification(user)
            .then(function() {
                // Email verification sent!
                console.log('Verification email sent');
            })
            .catch(function(error) {
                // An error occurred. Handle it or show alert to user
                console.error('Error sending verification email', error);
            });
        }
    }
    const onBackButton = () => {
        navigation.navigate("SignIn")
    }
    const navigation = useNavigation();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}> Confirm Your Email </Text>
            <Text style={styles.instruction}> Confirm your email using the link sent to your inbox </Text>
            
            <CustomButton 
                text="Done" 
                onPress={onConfirmPressed}
                type="PRIMARY"
            />

            <CustomButton 
                text="Resend Link"
                onPress={onResend}
                type="SECONDARY"
            />

            <CustomButton 
                text="Back to Sign In"
                onPress={onBackButton}
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
        marginTop: '50%',
        marginBottom: 20,
    },
    text: {
        color: 'gray',
        marginVertical: 10,
    },
    link: {
        color: '#FFA726'
    },
    instruction: {
        fontSize: 20,
        textAlign: 'center',
        margin: 'auto',
        padding: 10,
        marginBottom: 30,

    }
});
  
export default ConfirmEmailScreen