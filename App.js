
import { isWidthDown } from '@material-ui/core';
import React from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
} from 'react-native';

const App =()=>{
  return(
    <View>
    <text>Enter your Name</text>
    <TextInput
      style={{ height: 50,
       borderColor: 'red',
        borderWidth: 5,
         justifyContent:'center',
          textAlign: 'center',        
            placeholder:'name',
      }}         
    />
      
      </View>

  )
  }


export default App;