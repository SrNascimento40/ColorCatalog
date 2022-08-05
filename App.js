import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ColorButton from './src/components/ColorButton';


export default function App() {
  const [backgroundColor, setBackgroundColor] = useState("blue")
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <ColorButton backgroundColor="red" onPress={setBackgroundColor}/>
      <ColorButton backgroundColor="blue" onPress={setBackgroundColor} />
      <ColorButton backgroundColor="green" onPress={setBackgroundColor} />
      <ColorButton backgroundColor="yellow" onPress={setBackgroundColor} />
      <ColorButton backgroundColor="gray" onPress={setBackgroundColor} />
      <ColorButton backgroundColor="black" onPress={setBackgroundColor} />
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
});
