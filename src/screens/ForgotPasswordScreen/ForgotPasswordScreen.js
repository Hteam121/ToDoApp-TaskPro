import { View, Image, StyleSheet, ScrollView, Text} from 'react-native'
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput/CustomInput.js';
import CustomButton from '../../components/CustomButton/CustomButton.js';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';

const ForgotPasswordScreen = () => {
    const [username, setUsername] = useState('');

    const onSendPressed = ()=> {
        console.warn("Confirmed")
    }
    const onBackButton = () => {
        console.warn("Back")
    }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}> Reset Your Password </Text>
            <CustomInput 
                placeholder="Username"
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
        marginTop: '50%',
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