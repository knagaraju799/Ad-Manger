import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./CreateAdCard.scss";
import { CreateAdForm } from "..";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

const CreateAdCard = (props) => {
  const ads = useSelector((state) => state.ads.ads);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const adFormObj = {
    formData: {
      title: "Create Ad",
      desc: "To create your Ad, please enter details below",
      buttonTitle: "Create",
    },
    adData: {
      id: ads[ads.length - 1].id + 1,
      title: "",
      descTitle: "",
      description: "",
      status: "live",
      imageUrl: "",
      adType: "image",
    },
  };
  return (
    <Card sx={{ width: 285, height: 360 }} className="createAdCard">
      <div className="createAdCard--LinkDiv">
        <Button
          onClick={handleClickOpen}
          className="createAdCard--LinkDiv--Create"
        >
          + Create ad
        </Button>
        <CreateAdForm open={open} setOpen={setOpen} adFormObj={adFormObj} />
      </div>
    </Card>
  );
};

export default CreateAdCard;
