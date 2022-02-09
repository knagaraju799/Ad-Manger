import React from "react";
import { useParams } from "react-router-dom";
import "./AdDetails.scss";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import facbookIcon from "../../assets/svg/icons8-facebook.svg";
import googleIcon from "../../assets/svg/icons8-google (1).svg";
import linkedIcon from "../../assets/svg/icons8-linkedin.svg";
import { CreateAdForm } from "..";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import IconButton from "@mui/material/IconButton";
import noImage from "../../assets/images/no-image.jpg";

function AdDetails() {
  const ads = useSelector((state) => state.ads.ads);
  let params = useParams();
  const [open, setOpen] = React.useState(false);
  const filterAdOut = ads.filter((item) => item.id === parseInt(params.adId));
  const filterAd = filterAdOut[0];
  console.log(filterAd);

  const adFormObj = {
    formData: {
      title: "Edit Ad",
      desc: "To edit your Ad, please edit details below",
      buttonTitle: "Update",
    },
    adData: {
      id: filterAd.id,
      title: filterAd.title,
      descTitle: filterAd.descTitle,
      description: filterAd.description,
      imageUrl: filterAd.imageUrl,
    },
  };

  return (
    <div className="adDetails">
      <Card sx={{ width: 550, height: 400 }} className="adCard">
        <div className="adDetails--Header">
          <div className="adCard--CardHeader">
            <span className="adCard--CardHeader--Title">{filterAd.title}</span>
          </div>
          <IconButton
            className="adDetails--IconButton"
            aria-label="more"
            id="long-button"
            onClick={() => setOpen(true)}
          >
            <EditOutlinedIcon />
          </IconButton>
        </div>

        {filterAd.adType.type === "video" ? (
          <div>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
              height="200"
            />
          </div>
        ) : (
          <CardMedia
            component="img"
            height="155"
            image={filterAd.imageUrl !== null ? filterAd.imageUrl : noImage}
            alt={filterAd.title}
          />
        )}

        <CardContent>
          <div className="adCard--CardContent--DescTitle">
            {filterAd.descTitle}
          </div>
          <div className="adCard--CardContent--Description">
            {filterAd.description}
          </div>

          <div className="adCard--CardActions">
            {filterAd.status === "live" ? (
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
                  <img src={googleIcon} alt="google" className="adCard--Icon" />
                </div>
                <span className="adcard--CardActions--Div--Live">live</span>
              </div>
            ) : filterAd.status === "paused" ? (
              <div className="adcard--CardActions--Div--Paused"> Paused</div>
            ) : (
              <div className="adcard--CardActions--Div--Draft">Draft</div>
            )}
          </div>
        </CardContent>
      </Card>
      <CreateAdForm open={open} setOpen={setOpen} adFormObj={adFormObj} />
    </div>
  );
}

export default AdDetails;
