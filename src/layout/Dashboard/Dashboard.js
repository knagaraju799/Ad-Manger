import React, { useEffect, useState } from "react";
import "./Dashboard.scss";
import { useSelector, useDispatch } from "react-redux";
import { adActions } from "../../redux/_actions";
import { AdCard, ActionsOnAds, CreateAdCard } from "../../component";

const Dashboard = (props) => {
  const storeAds = useSelector((state) => state.ads.ads);
  const [ads, setAds] = useState(storeAds);
  const dispatch = useDispatch();
  const [updatedAds, setUpdatedAds] = useState(null);

  // console.log(ads);
  useEffect(() => {}, [ads]);

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
          <CreateAdCard />
          {ads.map((item) => (
            <AdCard item={item} key={item.id} setUpdatedAds={setUpdatedAds} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
