import { TaskDTO } from "@/src/models/task.model";
import { CheckCircle, ClipboardText, Timer } from "phosphor-react-native";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import theme from "../../theme";
import { TextComponent } from "../Text";
import { styles } from "./styles";

interface ITaskItemProps {
  data: TaskDTO;
  onPress?: (id: string) => void;
  isClickable?: boolean;
}

const TaskItemComponent: React.FC<ITaskItemProps> = ({
  data,
  onPress,
  isClickable = true,
}) => {
  const getStatusStylesAndIcon = () => {
    switch (data.status) {
      case 1:
        return {
          borderColor: theme.COLORS.GRAY_500,
          icon: (
            <ClipboardText size={24} color={theme.COLORS.GRAY_500} weight="bold" />
          ),
          textColor: "GRAY_500",
          statusText: "Pendente"
        };
      case 2:
        return {
          borderColor: theme.COLORS.ORANGE_500,
          icon: (
            <Timer size={24} color={theme.COLORS.ORANGE_500} weight="bold" />
          ),
          textColor: "ORANGE_500",
          statusText: "Em Andamento"
        };
      case 3:
        return {
          borderColor: theme.COLORS.GREEN,
          icon: (
            <CheckCircle size={24} color={theme.COLORS.GREEN} weight="bold" />
          ),
          textColor: "GREEN",
          statusText: "Concluída"
        };
      default:
        return { icon: null };
    }
  };

  const { borderColor, icon, textColor, statusText } = getStatusStylesAndIcon();

  if (isClickable && onPress) {
    return (
      <TouchableOpacity
        style={[styles.container, { borderColor }]}
        onPress={() => onPress(data.id)}
      >
        <View style={styles.textSection}>
          <TextComponent
            fontWeight="bold"
            text={`Task: ${data.name}`}
            type="LG"
          />
          <TextComponent text={data.id || "No description"} type="MD" />
          <TextComponent text={statusText || "No description"} type="MD" />
        </View>
        {icon && <View style={styles.iconContainer}>{icon}</View>}
      </TouchableOpacity>
    );
  } else {
    return (
      <View style={[styles.container, { borderColor }]}>
        <View style={styles.textSection}>
          <TextComponent
            fontWeight="bold"
            text={`Task: ${data.name}`}
            type="LG"
            color={textColor as "GREEN" | "ORANGE_500" | "GRAY_500" | undefined}
          />
          <TextComponent text={`ID: ${data.id || "No description"}`} type="XS" />
          <TextComponent text={statusText || "No status"} type="XS" />
        </View>
        {icon && <View style={styles.iconContainer}>{icon}</View>}
      </View>
    );
  }
};

export { TaskItemComponent };

