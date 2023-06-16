import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, Animated, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getFirestore, doc, setDoc, getDoc, onSnapshot, collection } from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";
import LogOut from '../../../assets/images/logout.png';
import Camera from '../../../assets/images/camera.png';
import { auth, db } from '/Users/hatim/Desktop/ToDoApp-Putana/src/components/firebase.js'; 

const Task = (props) => {
  const opacity = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  if (props.id === undefined) {
    return null;
  }

  return (
    <Animated.View style={[styles.item, { opacity }]}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={props.isComplete ? [styles.itemText, styles.completedText] : styles.itemText}>
          {props.id}
        </Text>
      </View>
      <View style={styles.circular}></View>
    </Animated.View>
  );
};


const TaskScreen = () => {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const navigation = useNavigation();
  const auth = getAuth();
  const userId = auth.currentUser.uid;

  useEffect(() => {
  const unsubscribe = onSnapshot(collection(db, "todoLists", userId, "tasks"), snapshot => {
    const newTasks = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    console.log("Fetched data:", newTasks); // Log the fetched data
    setTaskItems(newTasks);
    console.log("Updated taskItems:", taskItems); // Log the updated taskItems state
  });
  return unsubscribe;
}, []);


  const handleAddTask = async () => {
    if(task && task.trim().length > 0){
      Keyboard.dismiss();
      try {
        await setDoc(doc(db, "todoLists", userId, "tasks", task), { isComplete: false });
        setTask('');
      } catch (error) {
        console.error("Error adding task: ", error);
      }
    } else {
      console.log('Cannot add empty task');
    }
  }
  

  const completeTask = async (taskId, currentStatus) => {
    try {
      const taskRef = doc(db, "todoLists", userId, "tasks", taskId);
      await setDoc(taskRef, { isComplete: !currentStatus }, { merge: true });
    } catch (error) {
      console.error("Error updating task: ", error);
    }
  };  

  const goToCamera = () => {
    navigation.navigate("Camera")
  }
  const goToProfile = () => {
    signOut(auth)
        .then(() => {
            console.log('User signed out!');
            navigation.navigate("SignIn")
        })
        .catch((error) => {
            console.error('Error signing out', error);
        });
  }

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Today's tasks</Text>
          <TouchableOpacity style={styles.profileIcon} onPress={goToProfile}>
            <Image source={LogOut} style={styles.logOut} resizeMode='contain' />
          </TouchableOpacity>
          <View style={styles.items}>
            {taskItems.map((item) => (
              <TouchableOpacity key={item.id} onPress={() => completeTask(item.id, item.isComplete)}>
                <Task id={item.id} isComplete={item.isComplete} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      <KeyboardAvoidingView 
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.writeTaskWrapper}
  >
    <TextInput 
      style={styles.input} 
      placeholder={'Write a task'} 
      value={task} 
      onChangeText={(text) => setTask(text)} 
      onEndEditing={handleAddTask} />
    <TouchableOpacity onPress={() => handleAddTask()}>
      <View style={styles.addWrapper}>
        <Text style={styles.addText}>+</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.cameraButton} onPress={goToCamera}>
      <Image source={Camera} style={styles.camera} resizeMode='contain' />
    </TouchableOpacity>
  </KeyboardAvoidingView>
</View>
  );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
    tasksWrapper: {
      paddingTop: 80,
      paddingHorizontal: 20,
    },
    sectionTitle: {
      fontSize: 32,
      fontWeight: 'bold',
      color: '#263238'
    },
    items: {
      marginTop: 30,
    },
    writeTaskWrapper: {
      position: 'absolute',
      bottom: 60,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    input: {
      paddingVertical: 15,
      paddingHorizontal: 15,
      backgroundColor: '#E0E0E0',
      borderRadius: 60,
      borderColor: '#4E4E4E',
      borderWidth: 1,
      width: 250,
      color: '#4E4E4E'
    },
    addWrapper: {
      width: 60,
      height: 60,
      backgroundColor: '#F9D46C',
      borderRadius: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#4E4E4E',
      borderWidth: 1,
    },
    addText: {
      fontSize: 24, // You may want to adjust this
      color: '#4E4E4E'
    },
    item: {
      backgroundColor: '#E0E0E0',
      padding: 15,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    itemLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap'
    },
    square: {
      width: 24,
      height: 24,
      backgroundColor: '#FF764A',
      opacity: 0.4,
      borderRadius: 5,
      marginRight: 15,
    },
    itemText: {
      maxWidth: '80%',
      color: '#263238'
    },
    circular: {
      width: 12,
      height: 12,
      borderColor: '#FF764A',
      borderWidth: 2,
      borderRadius: 5,
    },
    profileIcon: {
      position: 'absolute',
      top: 84,
      right: 30,
    },
    cameraButton: {
      position: 'absolute',
      bottom: 85,  
      right: 20,  
      width: 60,
      height: 60,
    },
    camera: {
      width: '105%', // corrected from '60%%'
      height: '105%',
    },
    square: {
      width: 24,
      height: 24,
      backgroundColor: '#FF764A',
      opacity: 0.4,
      borderRadius: 5,
      marginRight: 15,
    },
    completedSquare: {
      backgroundColor: '#4CAF50', // Change the color for completed tasks
    },
    itemText: {
      maxWidth: '80%',
      color: '#263238',
      textDecorationLine: 'none', // Add default text decoration
    },
    completedText: {
      textDecorationLine: 'line-through', // Add line-through decoration for completed tasks
    },
    
});

export default TaskScreen;