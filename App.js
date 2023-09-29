import { useCallback, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { MediaTypeOptions, launchImageLibraryAsync } from 'expo-image-picker';

export default function App() {
  const [image, setImage] = useState();

  const launch = useCallback(async () => {
    const image = await launchImageLibraryAsync().catch((e) => {
      return e instanceof Error ? e.message : e.toString();
    });

    setImage(image);
  }, [setImage]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Picked image: {image}</Text>
      <Button onPress={launch} title="Pick an image" />
      <StatusBar style="auto" />
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
  text: {
    marginBottom: 12,
  },
});
