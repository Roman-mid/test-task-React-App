import { Bounce, ToastOptions, toast } from "react-toastify";

export enum TYPE_TOAST {
  SUCCESS = "success",
  INFO = "info",
  ERROR = "error",
}

export const showToast = (type: TYPE_TOAST, message: string) => {
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

  if (type === TYPE_TOAST.SUCCESS) {
    toast.success(message, options);
  }
  if (type === TYPE_TOAST.INFO) {
    toast.info(message, options);
  }
  if (type === TYPE_TOAST.ERROR) {
    toast.error(message, options);
  }
};
