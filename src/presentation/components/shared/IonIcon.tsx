import React from 'react'
import {Ionicons} from '@expo/vector-icons' 

import { ComponentProps } from 'react';
type IoniconsName = ComponentProps<typeof Ionicons>['name'];

interface Props{
    name: IoniconsName;
    size?: number;
    color?:string;

}

export const IonIcon = ({name, size = 20, color = 'black'}:Props) => {
  return (
   <Ionicons name={name} size={size} color={color}/> 
  )
}

export default IonIcon
