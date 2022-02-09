import React, { useState } from "react";
import "./CreateAdForm.scss";
import { useDispatch } from "react-redux";
import { adActions } from "../../redux/_actions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextareaAutosize from "@mui/material/TextareaAutosize";

const CreateAdForm = (props) => {
  const { formData, adData } = props.adFormObj;
  const [title, setTitle] = useState(adData.title);
  const [descTitle, setDescTitle] = useState(adData.descTitle);
  const [imageAddr, setImageAddr] = useState(adData.imageUrl);
  const [descript, setDescript] = useState(adData.description);
  const dispatch = useDispatch();

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleCreate = () => {
    console.log(formData.buttonTitle);
    if (formData.buttonTitle === "Create") {
      const obj = {
        id: adData.id,
        title: title,
        descTitle: descTitle,
        description: descript,
        status: adData.state,
        imageUrl: imageAddr,
        adType: adData.adType,
      };
      dispatch(adActions.adAddAction(obj));
    } else {
      const obj = {
        id: adData.id,
        title: title,
        descTitle: descTitle,
        description: descript,
        imageUrl: imageAddr,
      };
      dispatch(adActions.adUpdateAction(obj));
    }

    props.setOpen(false);
  };

  const getTheTitle = (e) => {
    setTitle(e.target.value);
    console.log(e.target.value);
  };

  const getTheimageUrl = (e) => {
    setImageAddr(e.target.value);
    console.log(e.target.value);
  };

  const getTheDescTitle = (e) => {
    setDescTitle(e.target.value);
    console.log(e.target.value);
  };

  const getTextArea = (e) => {
    setDescript(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <Dialog open={props.open} onClose={handleClose}>
        <DialogTitle>{formData.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{formData.desc}</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
            name="title"
            value={title}
            onChange={getTheTitle}
          />
          <TextField
            autoFocus
            margin="dense"
            id="imageUrl"
            label="Image Url"
            type="text"
            fullWidth
            variant="standard"
            name="imageUrl"
            value={imageAddr}
            onChange={getTheimageUrl}
          />
          <TextField
            autoFocus
            margin="dense"
            id="descTitle"
            label="Desc Title"
            type="text"
            fullWidth
            variant="standard"
            className="marginTop"
            name="descTitle"
            value={descTitle}
            onChange={getTheDescTitle}
          />
          <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            placeholder="Description"
            style={{ width: 200 }}
            className="marginTop"
            name="textArea"
            value={descript}
            onChange={getTextArea}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleCreate}>{formData.buttonTitle}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CreateAdForm;
