import { taskView } from "../styles/components/task-view";

export const getPriorityColor = (priority) => {
  const priorityColors = {
    high: taskView.highPriority,
    medium: taskView.mediumPriority,
    low: taskView.lowPriority,
  };

  return priorityColors[priority] || taskView.lowPriority;
};
