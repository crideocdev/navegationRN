import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screen/home/HomeScreen";
import ProductsScreen from "../screen/products/ProductsScrenn";
import SettingsScreen from "../screen/settings/SettingsScreen";
import ProductScreen from "../screen/products/ProductScreen";

export type RootStackParams = {
  Home: undefined;
  Product:{id: number, name: string};
  Products: undefined;
  Settings: undefined;
}

//definimos el tipado
const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: true,
        headerStyle:{
            elevation: 0, //para android para que no se vea la linea
            shadowColor:'transparent' //usado para que en ios no se vea la linea
        }
    }
    }>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
    </Stack.Navigator>
  );
};
