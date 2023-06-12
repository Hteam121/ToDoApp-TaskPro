import { View, Image, StyleSheet, ScrollView} from 'react-native'
import React, {useState} from 'react';
import Logo from '../../../assets/images/putana-logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const onSignInPressed = ()=> {
        //Validate
        navigation.navigate("Home")
    }
    const onForgotPasswordPressed = () => {
        navigation.navigate("ForgotPassword")
    }
    const onSignUpPressed = () => {
        navigation.navigate("SignUp")
    }

    const navigation = useNavigation();

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
      marginVertical: '-8%',
    },
    root: {
        alignItems: 'center',
        padding: 20,
    },
});
  
export default SignInScreen