import { TaskModalComponent } from "@/src/components/Message";
import { TaskItemComponent } from "@/src/components/TaskItem";
import { useAuth } from "@/src/hooks/auth.hooks";
import { useTasks } from "@/src/hooks/useTask.hooks";
import { TaskDTO } from "@/src/models/task.model";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Button, FlatList, View } from "react-native";
import { PublicStackNavigationProp } from "../../routes/types";
import { styles } from "./styles";

const Tarefas = () => {
  const navigation = useNavigation<PublicStackNavigationProp>();
  const { tasks, error } = useTasks();
  const [selectedTask, setSelectedTask] = useState<TaskDTO | null>(null);
  const { signOut } = useAuth();

  if (error) return <div>{error}</div>;

  const handleTaskPress = (task: TaskDTO) => {
    setSelectedTask(task);
  };

  const handleCloseModal = () => {
    setSelectedTask(null);
  };

  const handleLogout = async () => {
    await signOut();
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItemComponent 
            data={item} 
            isClickable={true} 
            onPress={(id) => handleTaskPress(item)}
          />
        )}
      />
      <Button title="Logout" onPress={handleLogout} />

      {selectedTask && (
        <TaskModalComponent
          isVisible={!!selectedTask}
          task={selectedTask}
          onClose={handleCloseModal}
        />
      )}
    </View>
  );
};

export { Tarefas };

