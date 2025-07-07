import {
  ToastContainer,
  ToastItem,
  StyledToastMessage,
  CloseButton,
} from "./ToastMessage.styles";
import { useStore } from "../../store/store";

const ToastMessage = () => {
  const { toasts, removeToast } = useStore();

  return (
    <ToastContainer>
      {toasts.map((toast) => (
        <ToastItem key={toast.id}>
          <StyledToastMessage>{toast.message}</StyledToastMessage>
          <CloseButton onClick={() => removeToast(toast.id)}>✕</CloseButton>
        </ToastItem>
      ))}
    </ToastContainer>
  );
};

export default ToastMessage;
