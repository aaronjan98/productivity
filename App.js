import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

import Header from './components/Header.js'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title='Productivity React-Native'/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 60
  },
})

export default App