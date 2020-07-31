import React from 'react'
import { View, Animated, Image } from 'react-native'

import styles from 'assets/styles'

export default function BoxOne ({ animationStyle }) {
  return (
    <View style={styles.imageContainer}>
      <Animated.View style={animationStyle}>
        <Image
          style={styles.image}
          source={{ uri: 'https://aomineDev.github.io/Img/20.jpg' }}
        />
      </Animated.View>
    </View>
  )
}
