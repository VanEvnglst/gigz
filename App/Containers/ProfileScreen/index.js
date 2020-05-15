import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Header from 'App/Components/Header'
import styles from './styles'

const ProfileScreen = ({ user }) => {
  const { first_name: firstName, last_name: lastName, email } = user.data

  return (
    <SafeAreaView forceInset={{ bottom: 'never' }} style={styles.safeAreaContainer}>
      <Header title="Profile" />
      <View style={styles.container}>
        <View style={styles.profileInfoContainer}>
          <View style={styles.logoContainer}>
            <View style={styles.logoStyle}>
              <Text style={styles.whiteText}>Logo</Text>
            </View>
          </View>
          <View style={styles.profileDescriptionContainer}>
            <Text style={styles.whiteText}>
              {firstName} {lastName}
            </Text>
            <Text style={styles.whiteText}>{email}</Text>
          </View>
        </View>
        <View style={styles.otherInfoContainer}>
          <Text style={styles.whiteText}>Other Information</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

function mapStateToProps(state) {
  return {
    user: state.user.login,
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

const { object } = PropTypes
ProfileScreen.propTypes = {
  user: object,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
