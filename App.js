import 'react-native-gesture-handler'
import React from 'react'
import { StatusBar } from 'react-native'
import StackPrivate from './src/routers'

function App() {

  StatusBar.setBarStyle('dark-content')

  return(
    <StackPrivate />
  )
}

export default App