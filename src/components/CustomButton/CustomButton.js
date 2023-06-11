import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({ onPress, text, type, bgColor, fgColor}) => {
  return (
    <Pressable 
        onPress={onPress} 
        style={[styles.container, 
            styles[`container_${type}`], 
            bgColor ? {backgroundColor: bgColor} : {},
        ]}>
      <Text 
        style={[styles.text, 
            styles[`text_${type}`],
            fgColor ? {color: fgColor} : {},
        ]}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
    },
    container_PRIMARY: {
        backgroundColor: '#FFA726',
    },
    container_SECONDARY: {
        borderColor: '#FFA726',
        borderWidth: 1,
    },
    container_TERTIARY: {

    },

    text: {
        fontWeight: 'bold',
        color: 'white'
    },
    text_SECONDARY: {
        color: '#FFA726'
    },
    text_TERTIARY: {
        color: 'gray',
    }
});

export default CustomButton
