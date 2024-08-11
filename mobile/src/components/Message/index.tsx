import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import theme from "../../theme";
import { Heading } from "../Heading";
import { styles } from "./styles";

interface ITaskModalProps {
  isVisible: boolean;
  task: {
    id: string;
    name: string;
    description?: string;
  };
  onClose: () => void;
}

const TaskModalComponent: React.FC<ITaskModalProps> = ({ isVisible, task, onClose }) => {
  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <Heading
            text={task.name}
            type="XL"
            align="center"
            color={theme.COLORS.BLACK}
          />
          <Text style={styles.description}>ID: {task.id}</Text>
          <Text style={styles.description}>Descrição: {task.description || "Sem descrição"}</Text>

          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export { TaskModalComponent };

