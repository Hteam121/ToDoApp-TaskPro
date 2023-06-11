import { View, Image, StyleSheet, ScrollView, Text} from 'react-native'
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput/CustomInput.js';
import CustomButton from '../../components/CustomButton/CustomButton.js';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';

const NewPasswordScreen = () => {
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const onSubmitPressed = ()=> {
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
                placeholder="Code"
                value={code} 
                setValue={setCode}
                secureTextEntry={false}
            />
            <CustomInput 
                placeholder="Enter your new password"
                value={newPassword} 
                setValue={setNewPassword}
                secureTextEntry={false}
            />
            <CustomButton 
                text="Submit" 
                onPress={onSubmitPressed}
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
  
export default NewPasswordScreen