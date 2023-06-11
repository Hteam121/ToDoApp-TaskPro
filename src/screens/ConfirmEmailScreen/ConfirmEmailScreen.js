import { View, Image, StyleSheet, ScrollView, Text} from 'react-native'
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput/CustomInput.js';
import CustomButton from '../../components/CustomButton/CustomButton.js';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';

const ConfirmEmailScreen = () => {
    const [code, setCode] = useState('');

    const onConfirmPressed = ()=> {
        console.warn("Confirmed")
    }
    const onResend = () => {
        console.warn("Resend")
    }
    const onBackButton = () => {
        console.warn("Back")
    }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}> Confirm Your Email </Text>
            <CustomInput 
                placeholder="Enter Your Confirmation Code"
                value={code} 
                setValue={setCode}
                secureTextEntry={false}
            />
            
            <CustomButton 
                text="Confirm" 
                onPress={onConfirmPressed}
                type="PRIMARY"
            />

            <CustomButton 
                text="Resend Code"
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
    }
});
  
export default ConfirmEmailScreen