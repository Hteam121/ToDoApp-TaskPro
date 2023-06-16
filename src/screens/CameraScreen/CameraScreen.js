import { Camera } from 'expo-camera';
import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity, Text, StyleSheet, Button } from 'react-native';
import React, { useEffect, useState, useRef } from 'react';
import * as FileSystem from 'expo-file-system';

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef(null);
  const navigation = useNavigation(); // Get navigation object

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true };
      const photo = await cameraRef.current.takePictureAsync(options);

      // Get the base64 image data
      const base64Image = photo.base64;

      // Convert the base64 image to binary data
      const binaryImage = Buffer.from(base64Image, 'base64');

      // Specify the file path in the app's document directory
      const directory = `${FileSystem.documentDirectory}Photos/`;
      const fileName = `${Date.now()}.jpg`;
      const filePath = `${directory}${fileName}`;

      // Create the directory if it doesn't exist
      await FileSystem.makeDirectoryAsync(directory, { intermediates: true });

      // Save the binary image data to the file system
      await FileSystem.writeAsStringAsync(filePath, binaryImage, {
        encoding: FileSystem.EncodingType.Base64,
      });

      console.log('Photo saved:', filePath);

      return filePath;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Camera 
        ref={cameraRef}
        style={{
          flex: 1,
          width: '100%',
        }} 
      >
        <View style={styles.backButton}>
          <Button title="Back" onPress={() => navigation.goBack()} />
        </View>
        <TouchableOpacity onPress={takePicture} style={styles.snap}>
          <Text style={styles.text}> Camera </Text>
        </TouchableOpacity>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  snap: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center', 
    width: 60,
    height: 60,
    backgroundColor: '#F9D46C',
    borderRadius: 30, 
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  text: {
    color: '#000',
  },
  backButton: {
    position: 'absolute',
    top: 30, 
    left: 10,
    zIndex: 1,
    backgroundColor: '#F9D46C',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  }
});

export default CameraScreen;
