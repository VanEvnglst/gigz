import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'

import Header from 'App/Components/Header'
import styles from './styles'

const ProfileScreen = () => {
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
            <Text style={styles.whiteText}>Name</Text>
            <Text style={styles.whiteText}>Description</Text>
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
  return {}
}

function mapDispatchToProps(dispatch) {
  return {}
}

// const {} = PropTypes
ProfileScreen.propTypes = {}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
