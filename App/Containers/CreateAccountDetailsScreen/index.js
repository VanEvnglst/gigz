import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

const CreateAccountDetailsScreen = props => {
  const { navigation } = props;
  return (
    <View style={{ flex: 1 }}>
      <View style={{flex: 1, marginHorizontal: 30, marginTop: 60 }}>
        <View style={{alignItems: 'flex-start'}}>
        <Text style={{ paddingLeft: 10, fontWeight: 'bold', color: "#1D262C", lineHeight: 20, fontSize: 16}}>Create Account</Text>

        <TextInput
        style={styles.inputStyle}
        placeholder={'Enter your mobile number'}/>
         <TextInput
        style={styles.inputStyle}
        placeholder={'Full name'}/>
         <TextInput
        style={styles.inputStyle}
        placeholder={'Email address'}/>
        <Text style={{ paddingLeft: 10, marginTop: 20, fontWeight: 'bold', color: "#1D262C",lineHeight: 20, fontSize: 16 }}>Profile Photo</Text>

        <TouchableOpacity
        style={{borderStyle: 'dashed', borderColor: '#70707029',
        borderWidth: 1,
        borderRadius: 25, width: '90%', alignItems: 'center', height: 51, justifyContent: 'center', marginTop: 10}}>
          <Text>Take a Photo, or Browse</Text>
         
        </TouchableOpacity>
        <Text style={{ alignSelf: 'center'}}>Maximum upload file size 10MB.</Text>
        <View style={{ marginTop: 60, width: '100%',alignItems: 'center', }}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('HomeScreen')}>
          <Text style={styles.buttonTextStyle}>Create Account</Text>
        </TouchableOpacity>
          
        </View>
        </View>
      </View>
      
    </View>
  )

}

export default CreateAccountDetailsScreen;