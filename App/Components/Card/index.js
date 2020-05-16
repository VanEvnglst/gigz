import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { Images } from 'App/Theme/'

import NavigationService from 'App/Services/NavigationService'

import styles from './styles'

const Card = ({ stream }) => {
  const { navigate } = NavigationService
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardProfileContainer}>
        <Text style={styles.whiteText}>Profile</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigate('LiveScreen', { id: stream.id })}
        activeOpacity={0.7}
        style={styles.cardImageContainer}
      >
        <Image source={Images.cardImage} style={styles.cardImageStyle} />
      </TouchableOpacity>
      <View style={styles.cardEngagementContainer}>
        <Text style={styles.whiteText}>Engagement buttons</Text>
      </View>
      <View style={styles.cardCommentContainer}>
        <Text style={styles.whiteText}>Comment section</Text>
      </View>
    </View>
  )
}

export default Card

const { object } = PropTypes
Card.propTypes = {
  stream: object,
}
