import React from 'react'
import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native'
import PropTypes from 'prop-types'
import { Images } from 'App/Theme/'

import NavigationService from 'App/Services/NavigationService'

import styles from './styles'

// TODO: Add property for additional details
// TODO: Add boolean for showing LIVE NOW container
// TODO: Add Link text for Remind Me 

const Card = ({ stream }) => {
  const { navigate } = NavigationService
  return (
    <View style={styles.cardContainer}>
    <View style={styles.cardImageContainer}>
      <TouchableOpacity
        //onPress={() => navigate('LiveScreen', { id: stream.id })}
        activeOpacity={0.7}
      >
        <ImageBackground source={Images.cardImage} style={styles.cardImageStyle}>
        <View style={styles.liveNowContainer}>
          <Text style={{ fontSize: 10, color: 'white'}}>LIVE NOW</Text>
        </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
    <View style={styles.cardDetailsContainer}>
        <Text style={styles.bandNameText}>Di Bale Na Lang</Text>
        <View style={styles.liveDetailsContainer}>
          <Text style={styles.bandDetailsText}>Madeline</Text>
          <View style={styles.bandDetailsSeparator}/>
          <Text style={styles.bandDetailsText}>100k watching</Text>
        </View>
      </View>
    </View>
  )
}

export default Card

const { object } = PropTypes
Card.propTypes = {
  stream: object,
}
