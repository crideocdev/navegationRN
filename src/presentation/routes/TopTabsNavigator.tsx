import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ProfileScreen from "../screen/profile/ProfileScreen";
import AboutScreen from "../screen/about/AboutScreen";
import { HambugerMenu } from "../components/shared/HambugerMenu";
import React from "react";
import IonIcon from "../components/shared/IonIcon";

const Tab = createMaterialTopTabNavigator();

export const TopTabsNavigator = () => {
  return (
    <>
      <HambugerMenu />
      <Tab.Navigator>
        <Tab.Screen
          name="Perfil"
          component={ProfileScreen}
          options={{
            title: "Tab2",
            tabBarIcon: ({ color }) => <IonIcon name={"person"} />,
          }}
        />
        <Tab.Screen
          name="About"
          component={AboutScreen}
          options={{
            title: "Tab2",
            tabBarIcon: ({ color }) => <IonIcon name={"help-outline"} />,
          }}
        />
      </Tab.Navigator>
    </>
  );
};
