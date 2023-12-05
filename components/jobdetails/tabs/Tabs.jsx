import React from 'react'
import { View, Text ,TouchableOpacity,FlatList} from 'react-native'

import styles from './tabs.style'
import { SIZES } from '../../../constants'
const Tabs = ({tabs,selectedTab,setSelectedTab}) => {
  return (
    <View style={styles.container}>
      <FlatList data={tabs}
      renderItem={({item})=>(
         <TabButton name={item} selectedTab={selectedTab} onHandleSearchType={()=> setSelectedTab(item)}/>
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={item=> item}
       contentContainerStyle={{columnGap: SIZES.small / 2  }}
      />
    </View>
  )
}

const TabButton = ({ name, selectedTab, onHandleSearchType }) => (
  <TouchableOpacity style={styles.btn(name,selectedTab)} onPress={onHandleSearchType}>
    <Text style={styles.btnText(name,selectedTab)}>{name}</Text>
  </TouchableOpacity>
);

export default Tabs