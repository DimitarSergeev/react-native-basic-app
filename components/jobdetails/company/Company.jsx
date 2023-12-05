import React from 'react'
import { View, Text,Image } from 'react-native'

import styles from './company.style'
import { icons } from '../../../constants'

const Company = ({product}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
      <Image 
        source={{uri: product.thumbnail}}
        style={styles.logoImage}
      />
      </View>

      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{product.title}</Text>
      </View>
    </View>
  )
}

export default Company