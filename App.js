import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import BottomNavigation from './Screens/BottomNavigation';


export default function App() {
return (
<View style={{flex: 1}}>
<StatusBar style="auto" />
<BottomNavigation/>
</View>
);
}