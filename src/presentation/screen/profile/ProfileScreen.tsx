import React from 'react'
import { Text, View } from 'react-native'
import PrimaryButton from '../../components/shared/PrimaryButton';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ProfileScreen = () => {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation();


  return (
    <View style={{
      flex: 1, 
      paddingHorizontal: 20,
      marginTop: top
    }}>
      <Text style={{ marginBottom: 10 }}>ProfileScreen</Text>


      <PrimaryButton
        onPress={ () => navigation.dispatch( DrawerActions.toggleDrawer ) }
        label="Abrir menú"
      />
    </View>
  )
}

export default ProfileScreen
