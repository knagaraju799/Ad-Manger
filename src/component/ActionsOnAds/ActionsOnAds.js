import React from "react";
import "./ActionsOnAds.scss";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import SortOutlinedIcon from "@mui/icons-material/SortOutlined";
import { CustomSearch } from "../reuse";
import CustomMenu from "../../reuse/CustomMenu/CustomMenu";

const ActionsOnAds = ({ getActionResult }) => {
  const customMenuSort = {
    menuList: ["Created Date", "Updated Date"],
    icon: <SortOutlinedIcon className="commonIconStyles" />,
    actionName: "Sort",
  };

  const customMenuFilter = {
    menuList: ["Type", "Name"],
    icon: <FilterAltOutlinedIcon className="commonIconStyles" />,
    actionName: " Filter",
  };

  const getFiredAction = (input) => {
    console.log(input);
  };

  return (
    <div className="actionsOnAds">
      <CustomSearch />
      <div className="actionsOnAds--Right">
        <CustomMenu
          customMenuObj={customMenuSort}
          getFiredAction={getFiredAction}
        />
        <CustomMenu
          customMenuObj={customMenuFilter}
          getFiredAction={getFiredAction}
        />
      </div>
    </div>
  );
};

export default ActionsOnAds;
