import React from "react";
import { makeStyles } from "@mui/styles";
import { Theme, Button } from "@mui/material";
import useModal from "hooks/useModal";
import useNotify from "hooks/useNotify";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
}));

interface Props {}

const index: React.FC<Props> = () => {
  const classes = useStyles();
  const { openModal } = useModal();
  const [key, setKey] = React.useState<string | number>("");
  const { notifySuccess, notifyError, notifyLoading, dismissNotify, dismissNotifyAll } = useNotify();

  const handleClick = () => {
    openModal("Hello");
  };

  const handleSuccess = () => {
    notifySuccess("This is a success message", "This is a success message");
  };
  const handleError = () => {
    notifyError("This is a error message", "This is a success message");
  };
  const handleLoading = () => {
    let k = notifyLoading("This is a error message", "This is a success message");
    setKey(k);
  };
  const handleClose = () => {
    dismissNotify(key);
  };

  return (
    <div className={classes.root}>
      <Button onClick={handleClick} variant="contained" color="primary">
        Modal
      </Button>
      <Button onClick={handleSuccess} variant="contained" color="success">
        Success
      </Button>
      <Button onClick={handleError} variant="contained" color="error">
        Error
      </Button>
      <Button onClick={handleLoading} variant="contained" color="info">
        Loading
      </Button>
      <Button onClick={handleClose} variant="contained" color="info">
        Close
      </Button>
      <Button onClick={dismissNotifyAll} variant="contained" color="warning">
        Close All
      </Button>
    </div>
  );
};

export default index;
