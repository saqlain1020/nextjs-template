import { useCallback } from "react";
import { useSnackbar } from "notistack";

const useNotify = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const notifySystem = useCallback((title: string, message: string, type: string) => {
    console.log(`Notify: ${title} Message: ${message} Type: ${type}`);
  }, []);

  const notifySuccess = useCallback((title: string, message: string) => {
    // code
    enqueueSnackbar(title, { variant: "success" });
  }, []);

  const notifyError = useCallback((title: string, message: string) => {
    enqueueSnackbar(title, { variant: "error" });
    // code
  }, []);

  const notifyLoading: (title: string, message: string) => string | number = useCallback((title, message) => {
    let id = enqueueSnackbar(title, { variant: "info", persist: true });
    return id;
  }, []);

  const dismissNotify = useCallback((id: string | number) => {
    // code
    closeSnackbar(id);
  }, []);

  const dismissNotifyAll = useCallback(() => {
    // code
    closeSnackbar();
  }, []);

  return {
    notifySystem,
    notifySuccess,
    notifyError,
    notifyLoading,
    dismissNotify,
    dismissNotifyAll,
  };
};

export default useNotify;
