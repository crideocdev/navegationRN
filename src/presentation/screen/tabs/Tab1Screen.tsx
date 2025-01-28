import React from 'react'
import { View } from 'react-native'
import { HambugerMenu } from '../../components/shared/HambugerMenu'
import IonIcon from '../../components/shared/IonIcon'




const Tab1Screen = () => {
  return (
    <View>
      <HambugerMenu/>
      <IonIcon name={'rocket-outline'} color={'red'}/>
    </View>
  )
}

export default Tab1Screen
