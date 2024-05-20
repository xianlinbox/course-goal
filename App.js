import { useState } from 'react'
import { StyleSheet, FlatList, View, Button, TextInput } from 'react-native';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function closeAddGoalHandler() {
    setModalIsVisible(false)
  }

  function openAddGoalHandler() {
    setModalIsVisible(true)
  }

  function addGoal(newGoal) {
    setCourseGoals([...courseGoals, newGoal])
    setModalIsVisible(false)
  }
  return (
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color="#a065ec"
        onPress={openAddGoalHandler}
      />
      <GoalInput visible={modalIsVisible} onCancel={closeAddGoalHandler} addGoal={addGoal} />
      < View style={styles.goalContainer}>
        <FlatList />
      </View>
    </View >
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
