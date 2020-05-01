import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'

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

const LiveScreen = () => {
  return (
    <SafeAreaView forceInset={{ bottom: 'never' }} style={styles.safeAreaContainer}>
      <Header backButton title="Live" />
      <View style={styles.container}>
        <View style={styles.videoContainer}>
          <Text style={styles.whiteText}>Video</Text>
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
  return {}
}

function mapDispatchToProps(dispatch) {
  return {}
}

// const {} = PropTypes
LiveScreen.propTypes = {}

export default connect(mapStateToProps, mapDispatchToProps)(LiveScreen)
