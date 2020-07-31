import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

import styles from 'assets/styles'

export default function wrapperOne ({ children }) {
  return (
    <LinearGradient style={styles.container} colors={['#4A42E3', '#463ED5']}>
      {children}
    </LinearGradient>
  )
}