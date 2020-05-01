import React from 'react'
import { View, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'

import Header from 'App/Components/Header'
import Card from 'App/Components/Card'
import styles from './styles'

const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]
const HomeScreen = () => {
  return (
    <SafeAreaView forceInset={{ bottom: 'never' }} style={styles.safeAreaContainer}>
      <Header liveButton title="Zing" />
      <View style={styles.container}>
        <ScrollView>
          {data.map((result) => (
            <Card key={result.id} />
          ))}
        </ScrollView>
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
HomeScreen.propTypes = {}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
