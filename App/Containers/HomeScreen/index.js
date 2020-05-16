import React, { useEffect } from 'react'
import { View, ScrollView, Text } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import StreamActions from 'App/Redux/StreamRedux'

import Header from 'App/Components/Header'
import Card from 'App/Components/Card'
import styles from './styles'

const HomeScreen = ({ stream, doGetStreams }) => {
  useEffect(() => {
    doGetStreams()
  }, [])

  const { data, fetching } = stream

  return (
    <SafeAreaView forceInset={{ bottom: 'never' }} style={styles.safeAreaContainer}>
      <Header liveButton title="Zing" />
      <View style={styles.container}>
        {fetching ? (
          <Text style={styles.whiteText}>Loading...</Text>
        ) : (
          <ScrollView style={styles.scrollContainer}>
            {data && data.live_streams.map((result) => <Card stream={result} key={result.id} />)}
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  )
}

function mapStateToProps(state) {
  return {
    stream: state.stream.getStreams,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    doGetStreams: () => dispatch(StreamActions.getStreams()),
  }
}

const { func, object } = PropTypes
HomeScreen.propTypes = {
  stream: object,
  doGetStreams: func,
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
