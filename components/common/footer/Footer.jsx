import React from 'react'
import { View, Text, Image } from 'react-native'
import {images} from '../../../constants'

import styles from './footer.style'

const Footer = () => {
  return (
    <View>
      <Image
        source = {images.LogoGif}
        resizeMode = 'cover'
        style = {styles.container}
      />
    </View>
  )
}

export default Footer