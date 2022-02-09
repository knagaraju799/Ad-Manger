import { adConstants } from "../_constants";

const adFetchAction = (adObj) => {};

const adDeleteAction = (adIndex) => {
  return {
    type: adConstants.AD_DELETE_REQUEST,
    adIndex,
  };
};

const adAddAction = (obj) => {
  return {
    type: adConstants.AD_ADD_REQUEST,
    obj,
  };
};

const adUpdateAction = (obj) => {
  return {
    type: adConstants.AD_UPDATE_REQUEST,
    obj,
  };
};

export const adActions = {
  adFetchAction,
  adDeleteAction,
  adAddAction,
  adUpdateAction,
};
