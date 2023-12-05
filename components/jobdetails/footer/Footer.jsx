import React from 'react'
import { View, Text ,TouchableOpacity,Image,Linking} from 'react-native'

import styles from './footer.style'
import { icons } from '../../../constants'

const Footer = ({url}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.likeBtn}>
        <Image
          source={icons.heartOutline}
          style={styles.likeBtnImage}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.applyBtn}>
        <Text style={styles.applyBtnText}>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Footer