import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Tab1Screen from "../screen/tabs/Tab1Screen";
import Tab2Screen from "../screen/tabs/Tab2Screen";
import Tab3Screen from "../screen/tabs/Tab3Screen";
import { globalColors } from "../theme/theme";
import { Text } from "react-native";
import { TopTabsNavigator } from "./TopTabsNavigator";
import { StackNavigator } from "./StackNavigator";
import IonIcon from "../components/shared/IonIcon";

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        sceneStyle: {
          backgroundColor: globalColors.background,
          marginBottom: 5,
        },
        headerStyle: {
          elevation: 0,
          borderColor: "transparent",
          shadowColor: "transparent",
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name="Tab1"
        options={{
          title: "Tab1",
          tabBarIcon: ({ color }) => <IonIcon name={'albums'}/>,
        }}
        component={Tab1Screen}
      />
      <Tab.Screen
        name="Tab2"
        options={{
          title: "Tab2",
          tabBarIcon: ({ color }) => <IonIcon name={'home'}/>,
        }}
        component={TopTabsNavigator}
      />
      <Tab.Screen
        name="Tab3"
        options={{
          title: "Tab3",
          tabBarIcon: ({ color }) => <IonIcon name={'accessibility'}/>,
        }}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
};
