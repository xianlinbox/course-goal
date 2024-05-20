import { StyleSheet, FlatList, View, Button, TextInput } from 'react-native';

export default function App() {
  function startAddGoalHandler() {

  }
  return (
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color="#a065ec"
        onPress={startAddGoalHandler}
      />
      <View style={styles.goalContainer}>
        <FlatList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  goalContainer: {
    flex: 5,
  },
});
