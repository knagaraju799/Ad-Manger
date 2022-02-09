import { adConstants } from "../_constants";
import photo1 from "../../assets/images/image1.jpg";
import photo2 from "../../assets/images/image2.jpg";
import photo3 from "../../assets/images/image3.jpg";

const intialState = {
  ads: [
    {
      id: 0,
      title: "Double Door Fridge1",
      descTitle: "Huge Double Door Fridge",
      description: "Maximum storage capacity with our counter depth fidge",
      status: "live",
      imageUrl: photo1,
      adType: "video",
    },
    {
      id: 1,
      title: "Double Door Fridge2",
      descTitle: "Huge Double Door Fridge",
      description: "Maximum storage capacity with our counter depth fidge",
      status: "live",
      imageUrl: photo2,
      adType: "image",
    },
    {
      id: 2,
      title: "Double Door Fridge3",
      descTitle: "Huge Double Door Fridge",
      description: "Maximum storage capacity with our counter depth fidge",
      status: "live",
      imageUrl: photo3,
      adType: "video",
    },
    {
      id: 3,
      title: "Double Door Fridge4",
      descTitle: "Huge Double Door Fridge",
      description: "Maximum storage capacity with our counter depth fidge",
      status: "live",
      imageUrl: photo1,
      adType: "video",
    },
    {
      id: 4,
      title: "Double Door Fridge5",
      descTitle: "Huge Double Door Fridge",
      description: "Maximum storage capacity with our counter depth fidge",
      status: "paused",
      imageUrl: photo2,
      adType: "image",
    },
    {
      id: 5,
      title: "Double Door Fridge6",
      descTitle: "Huge Double Door Fridge",
      description: "Maximum storage capacity with our counter depth fidge",
      status: "live",
      imageUrl: photo3,
      adType: "video",
    },
    {
      id: 6,
      title: "Double Door Fridge7",
      descTitle: "Huge Double Door Fridge",
      description: "Maximum storage capacity with our counter depth fidge",
      status: "draft",
      imageUrl: null,
      adType: "image",
    },
  ],
};

export function ads(state = intialState, action) {
  switch (action.type) {
    case adConstants.AD_FETCH_REQUEST:
      return {
        ads: action.ads,
      };
    case adConstants.AD_DELETE_REQUEST:
      const result = state.ads;
      state.ads.splice(
        state.ads.findIndex((a) => a.id === action.adIndex.id),
        1
      );
      console.log(result);
      return {
        ...state,
        ads: state.ads,
      };
    case adConstants.AD_ADD_REQUEST:
      state.ads.push(action.obj);
      return {
        ...state,
        ads: state.ads,
      };
    case adConstants.AD_UPDATE_REQUEST:
      const index = state.ads.findIndex((a) => a.id === action.obj.id);
      state.ads[index].title = action.obj.title;
      state.ads[index].descTitle = action.obj.descTitle;
      state.ads[index].description = action.obj.description;
      state.ads[index].imageUrl = action.obj.imageUrl;
      return {
        ...state,
        ads: state.ads,
      };
    default:
      return state;
  }
}
