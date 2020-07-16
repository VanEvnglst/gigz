import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

// TODO: Add prop for band name
// TODO: Add prop for image
// TOOD: Add prop for follower count
// Add onPress function 

const ArtistCard = () => {
  return(
    <View style={styles.cardContainer}>
     <View style={styles.contentContainer}>
      <View style={styles.imageContainer}/>
      <View style={styles.artistDetailsContainer}>
        <Text style={styles.headerTextStyle}>Name</Text>
        <Text style={styles.subTextStyle}>Follower count</Text>
      </View>
     <TouchableOpacity 
        onPress={() => console.log('add')}
        style={styles.buttonContainer}></TouchableOpacity>
    </View> 
  </View>
  );
}
export default ArtistCard;
