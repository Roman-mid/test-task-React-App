import { Bounce, ToastOptions, toast } from "react-toastify";

enum Type {}

export const showToast = (
  type: "success" | "info" | "error",
  message: string
) => {
  const options: ToastOptions = {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  };

  if (type === "success") {
    toast.success(message, options);
  }
  if (type === "info") {
    toast.info(message, options);
  }
  if (type === "error") {
    toast.error(message, options);
  }
};
