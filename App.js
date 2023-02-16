import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "./src/screens/SearchScreen";
import ResultDetail from "./src/screens/ResultDetail";

const Stack = createNativeStackNavigator()

const container = () => {
  return <NavigationContainer>
    <Stack.Navigator initialRouteName="Search">
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Detail" component={ResultDetail} />
    </Stack.Navigator>
  </NavigationContainer>
}

export default container


// import React from 'react';
// import { NavigationContainer, StackActions } from '@react-navigation/native';
// import { createNativeStackNavigator, NativeStackView } from '@react-navigation/native-stack';


// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// function HomeScreen() {
//   return <View style={styles.container}>
//           <Text>Open up App.js to start working on your app!</Text>
//           <StatusBar style="auto" />
//         </View>
// }

// function DetailsScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//     </View>
//   );
// }

// const Stack = createNativeStackNavigator()

// export default function App() {
//   return (
//   <NavigationContainer>
//     <Stack.Navigator initialRouteName='Home'>
//         <Stack.Screen name='Home' component={HomeScreen} />
//         <Stack.Screen name='Detail' component={DetailsScreen} />
//     </Stack.Navigator>
//   </NavigationContainer>    
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
