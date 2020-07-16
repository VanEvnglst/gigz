import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Paginator = () => {
  return (
    <View style={styles.paginationContainer}>
            <View style={styles.lineSeparatorLeft}/>
            <Text style={{color: '#FA3830', fontSize: 12, lineHeight: 22}}>Show more</Text>
            <View style={styles.lineSeparatorRight}/>
          </View>
  );
};

export default Paginator;
