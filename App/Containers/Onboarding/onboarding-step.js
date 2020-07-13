import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const OnboardingStep = props => {
  const { title, subtext, image } = props;
  
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.imageContainer}>
        <Image
          source={image}
          style={styles.image}
        />
      </View>
      </View>
      <View style={styles.contentContainer}>
        <Text
          style={styles.headerTextStyle}>{title}</Text>
      <Text
        style={styles.subTextStyle}>{subtext}</Text>
      </View>
    </View>
  )
}

export default OnboardingStep;
