 import { Text, View } from 'react-native'
 import React from 'react'
import { COLORS } from './src/assets'
import AppNavigation from './src/routes'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'
 
 
 
 
 const App = () => {
   return (
    <Provider store={store}>

      <AppNavigation/>
    </Provider>
   )
 }
 
 export default App
 
  