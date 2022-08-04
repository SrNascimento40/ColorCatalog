import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ActivityIndicator, Button, Text, View, Dimensions, Platform } from 'react-native';

const { height, width } = Dimensions.get('window')

export default function App() {
  const onButtonPress = () => {
    console.log(`${new Date().toLocaleTimeString()} button press`);
  }
  return (
    <View style={styles.container}>
      {Platform.OS === 'web' && <Text>RONALDO!</Text>}
      {Platform.OS === 'android' && <Text style={styles.textAndroid}>Running on android!</Text>}
      <Button title="Click here" onPress={onButtonPress} />
      <ActivityIndicator Size="large" color="fff" />
      <StatusBar style="auto" />
      <Text>height: {height}</Text>
      <Text>width: {width}</Text>
      <Text>{Platform.OS}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textAndroid: {
    color: 'brown',
    padding: 30,
  }
});
