import React from 'react'
import { View, Animated, Text, TextInput, TouchableOpacity } from 'react-native'

import styles from 'assets/styles'

export default function BoxOne ({ animationStyle, handleText, handleSubmit }) {
  return (
    <View style={styles.imageContainer}>
      <Animated.View style={animationStyle}>
        <TextInput
          placeholder='password'
          placeholderTextColor='#eee'
          style={styles.input}
          onChangeText={password => handleText(password)}
        />
      </Animated.View>
      <TouchableOpacity onPress={handleSubmit}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  )
}
