import React, {useState, useEffect} from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback} from "react-native";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import colors from "../constants/colors";
import {View, Image} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import icons from "../constants/icons";
import Button from "../components/Button";

const HomeScreenNavigation = (props) => {

  const Stack = createNativeStackNavigator();

  return (
      <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
      >
        <Stack.Group screenOptions={{
          headerShown: true,
          title: '',
          headerBlurEffect: 'extraLight',
          headerTintColor: colors.darkButton,
          navigationBarColor: colors.darkButton,
          headerStyle: {
            backgroundColor: colors.darkButton
          },
          headerRight: () => {
            return (
                <TouchableHighlight style={{marginRight: 10}} onPress={() => console.log("test icon header")}>
                  <Icon name={'search-sharp'} size={30} color={'#f66c6c'}/>
                </TouchableHighlight>
            )
          }
        }}>
          <Stack.Screen
              name={"HomeScreen"}
              component={HomeScreen}
          />
        </Stack.Group>
      </Stack.Navigator>
  );
};

export default HomeScreenNavigation;