import React, { useEffect, useState } from 'react'
import { Text, View, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { OTSession, OTSubscriber } from 'opentok-react-native'

import StreamActions from 'App/Redux/StreamRedux'
import { connect } from 'react-redux'

import PropTypes from 'prop-types'

import Header from 'App/Components/Header'
import Input from 'App/Components/Input'
import styles from './styles'

const commentData = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]

const _buildCommentItem = (comment) => {
  return (
    <View key={comment.id} style={styles.commentItemContainer}>
      <View style={styles.commentLogo}></View>
      <Text style={styles.whiteText}>Comment #{comment.id}</Text>
    </View>
  )
}

const LiveScreen = ({ navigation, doGetSingleStream, doPostCreateToken, createToken, stream }) => {
  const [connected, setConnected] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    const streamId = navigation.state.params.id
    doGetSingleStream(streamId)
    doPostCreateToken(streamId, 'moderator')
  }, [])

  const onError = (err) => {
    console.log(err)
    setError(`Failed to connect: ${err.message}`)
  }

  const sessionEvents = {
    sessionConnected: () => {
      setConnected(true)
    },
    sessionDisconnected: () => {
      setConnected(false)
    },
  }

  if (stream.fetching || !stream.data || createToken.fetching || !createToken.data)
    return <Text>Loading</Text>

  return (
    <SafeAreaView forceInset={{ bottom: 'never' }} style={styles.safeAreaContainer}>
      <Header backButton title="Live" />
      <View style={styles.container}>
        <View style={styles.videoContainer}>
          <Text>{error}</Text>
          <OTSession
            apiKey={stream.data.live_stream.opentok_data.api_key}
            sessionId={stream.data.live_stream.session_data.session_id}
            token={createToken.data.token}
            eventHandlers={sessionEvents}
            onError={onError}
          >
            <OTSubscriber style={styles.subscriberContainer} />
          </OTSession>
          <View style={styles.commentSectionContainer}>
            <View style={styles.commentListContainer}>
              <ScrollView>{commentData.map((comment) => _buildCommentItem(comment))}</ScrollView>
            </View>
            <View style={styles.commentInputContainer}>
              <Input placeholder="Comment input" />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

function mapStateToProps(state) {
  return {
    stream: state.stream.getSingleStream,
    createToken: state.stream.createToken,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    doGetSingleStream: (id) => dispatch(StreamActions.getSingleStream(id)),
    doPostCreateToken: (id, role) => dispatch(StreamActions.postCreateToken(id, role)),
  }
}

const { func, object } = PropTypes
LiveScreen.propTypes = {
  stream: object,
  createToken: object,
  doGetSingleStream: func,
  doPostCreateToken: func,
}

export default connect(mapStateToProps, mapDispatchToProps)(LiveScreen)
