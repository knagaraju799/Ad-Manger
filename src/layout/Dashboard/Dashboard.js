import React, { useState } from "react";
import "./Dashboard.scss";
import { useSelector } from "react-redux";
import { AdCard, ActionsOnAds, CreateAdCard } from "../../component";

const Dashboard = (props) => {
  const storeAds = useSelector((state) => state.ads.ads);
  const [ads] = useState(storeAds);
  const [, setUpdatedAds] = useState(null);
  const [, setGetAddedUpdate] = useState(false);

  const getActionResult = (input) => {
    console.log(input);
  };

  console.log(ads);
  return (
    <div className="dashboard">
      <div className="dashboard--Appbar">Ad Manager</div>
      <div className="dashboard--Body">
        <ActionsOnAds getActionResult={getActionResult} />
        <div className="dashboard--Ads">
          <CreateAdCard setGetAddedUpdate={setGetAddedUpdate} />
          {ads.map((item) => (
            <AdCard item={item} key={item.id} setUpdatedAds={setUpdatedAds} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
