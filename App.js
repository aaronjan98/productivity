import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Header from './components/Header.js'

const App = () => {
  return (
    <View style={styles.container}>
      <Header title='Productivity React-Native'/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  },
})

export default App