import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { RootStackParams } from "../../routes/StackNavigator";

const ProductScreen = () => {

  //Obtnemos los parametros enviados desde la pantalla anterior
  const params = useRoute<RouteProp<RootStackParams, "Product">>().params;

  //Cambiamos el titulo de la pantalla por el nombre del producto seleccionado
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, []);

  //console.log(params);
  return (
    <View>
      <Text>ProductScreen</Text>

      <Text style={{ fontSize: 20, textAlign: "center", marginTop: 20 }}>
        {params.id} - {params.name}
      </Text>
    </View>
  );
};

export default ProductScreen;
