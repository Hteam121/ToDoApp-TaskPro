import { View, Image, StyleSheet, ScrollView, Text} from 'react-native'
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';

const NewPasswordScreen = () => {
    const [newPassword, setNewPassword] = useState('');
    const navigation = useNavigation();

    const onSubmitPressed = ()=> {
        navigation.navigate("SignIn")
    }
    const onBackButton = () => {
        navigation.navigate("SignIn")
    }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}> Password Reset Sent </Text>
            <CustomButton 
                text="Done" 
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
        marginTop: '80%',
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