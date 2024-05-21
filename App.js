import { useState } from 'react'
import { StyleSheet, FlatList, View, Button } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

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

  function deleteGoal(goal) {

  }
  return (
    <>
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#a065ec"
          onPress={openAddGoalHandler}
        />
        <GoalInput visible={modalIsVisible} onCancel={closeAddGoalHandler} addGoal={addGoal} />
        < View style={styles.goalContainer}>
          <FlatList data={courseGoals} renderItem={(itemData) => {
            return (
              <GoalItem onDeleteItem={deleteGoal(itemData.item)} text={itemData.item} />
            )
          }} />
        </View>
      </View >
    </>
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
