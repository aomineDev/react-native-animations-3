import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

import styles from 'assets/styles'

export default function Button ({ buttonStyle, text, handlePress }) {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={handlePress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  )
}