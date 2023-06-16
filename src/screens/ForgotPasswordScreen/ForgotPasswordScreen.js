import { View, Image, StyleSheet, ScrollView, Text} from 'react-native'
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const ForgotPasswordScreen = () => {
    const [username, setUsername] = useState('');    
    const auth = getAuth();

    const onSendPressed = ()=> {
        sendPasswordResetEmail(auth, username)
            .then(function() {
                // Email sent.
                console.log('Password reset email sent');
                navigation.navigate("NewPassword");
            })
            .catch(function(error) {
                // An error happened.
                console.error('Error while sending password reset email', error);
            });
    }
    const onBackButton = () => {
        navigation.navigate("SignIn")
    }
    const navigation = useNavigation();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}> Reset Your Password </Text>
            <CustomInput 
                placeholder="Email"
                value={username} 
                setValue={setUsername}
                secureTextEntry={false}
            />
            
            <CustomButton 
                text="Send" 
                onPress={onSendPressed}
                type="PRIMARY"
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
        marginTop: '65%',
        marginBottom: 20,
    },
    text: {
        color: 'gray',
        marginVertical: 10,
    },
    link: {
        color: '#FFA726'
    }
});
  
export default ForgotPasswordScreen