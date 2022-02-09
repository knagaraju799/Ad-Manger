import * as React from "react";
import "./AdCard.scss";
import { useDispatch } from "react-redux";
import { adActions } from "../../redux/_actions";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import facbookIcon from "../../assets/svg/icons8-facebook.svg";
import googleIcon from "../../assets/svg/icons8-google (1).svg";
import linkedIcon from "../../assets/svg/icons8-linkedin.svg";
import noImage from "../../assets/images/no-image.jpg";
import { CreateAdForm } from "..";

const options = ["Delete", "Edit"];
const ITEM_HEIGHT = 30;

function AdCard(props) {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open1 = Boolean(anchorEl);

  const [open, setOpen] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const adFormObj = {
    formData: {
      title: "Edit Ad",
      desc: "To edit your Ad, please edit details below",
      buttonTitle: "Update",
    },
    adData: {
      id: props.item.id,
      title: props.item.title,
      descTitle: props.item.descTitle,
      description: props.item.description,
      imageUrl: props.item.imageUrl,
    },
  };

  const handleClose = (event, option) => {
    console.log(typeof event.target.innerText, option);
    if (option === "Delete") {
      const re = dispatch(adActions.adDeleteAction(props.item));
      console.log(re);
      props.setUpdatedAds(props.item);
    }
    if (option === "Edit") {
      setOpen(true);
    }

    setAnchorEl(null);
  };

  return (
    <>
      <Card sx={{ width: 285, height: 360 }} className="adCard">
        <div className="adCard--CardHeader">
          <span className="adCard--CardHeader--Title">{props.item.title}</span>
          <IconButton
            className="adCard--IconButton"
            aria-label="more"
            id="long-button"
            aria-controls={open1 ? "long-menu" : undefined}
            aria-expanded={open1 ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            anchorEl={anchorEl}
            open={open1}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: "20ch",
              },
            }}
          >
            {options.map((option) => (
              <MenuItem
                key={option}
                selected={option === "Pyxis"}
                onClick={(e) => handleClose(e, option)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
        <Link to={`/ads/${props.item.id}`} className="adCard--Link">
          <CardMedia
            component="img"
            height="155"
            image={props.item.imageUrl !== null ? props.item.imageUrl : noImage}
            alt="Paella dish"
          />
          <CardContent>
            <div className="adCard--CardContent--DescTitle">
              {props.item.descTitle}
            </div>
            <div className="adCard--CardContent--Description">
              {props.item.description}
            </div>

            <div className="adCard--CardActions">
              {props.item.status === "live" ? (
                <div className="adcard--CardActions--Div">
                  <div>
                    <img
                      src={facbookIcon}
                      alt="fb"
                      className="adCard--Icon addCard--FB"
                    />
                    <img
                      src={linkedIcon}
                      alt="linkedIn"
                      className="adCard--Icon addCard--FB"
                    />
                    <img
                      src={googleIcon}
                      alt="google"
                      className="adCard--Icon"
                    />
                  </div>
                  <span className="adcard--CardActions--Div--Live">Live</span>
                </div>
              ) : props.item.status === "paused" ? (
                <div className="adcard--CardActions--Div--Paused"> Paused</div>
              ) : (
                <div className="adcard--CardActions--Div--Draft">Draft</div>
              )}
            </div>
          </CardContent>
        </Link>
      </Card>
      <CreateAdForm open={open} setOpen={setOpen} adFormObj={adFormObj} />
    </>
  );
}

export default AdCard;
