import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from "./../Screens/ListingsScreen";
import ListingDetailsScreen from "./../Screens/ListingDetailsScreen";
import colors from "../config/colors";

const Stack = createStackNavigator();
const FeedNavigator = () => (
  <Stack.Navigator
    mode="modal"
    screenOptions={{
      headerTintColor: colors.white,
      headerStyle: { backgroundColor: colors.dodgerBlue },
      title: "Replace",
    }}
  >
    <Stack.Screen
      name="Listings"
      component={ListingsScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ListingDetails"
      component={ListingDetailsScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default FeedNavigator;
