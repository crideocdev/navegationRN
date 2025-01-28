import { DrawerActions, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { View,Pressable, Text } from 'react-native'
import IonIcon from './IonIcon';

//boton reutilizable para llamar al drawer
//no hace falta interface, ya que la llamada siempre va a ser la misma

export const HambugerMenu = () => {

    const navigation = useNavigation();


    useEffect(() => {
      navigation.setOptions({
        headerLeft:() =>(
            <Pressable onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
                <IonIcon name={'menu'} />
            </Pressable>
        )
      })
    }, [])

    //se devuelve fragmento vacio , ya que sino da error de JSX
    return (<></>)
    
}


