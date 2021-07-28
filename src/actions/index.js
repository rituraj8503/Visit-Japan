import { getMarkers } from "../utils";

export function getLocations() {
  return async (dispatch) => {
    const locations = await getMarkers();
    dispatch(setLocations(locations));
  };
}

function setLocations(locations) {
  return {
    type: "SET_LOCATIONS",
    locations,
  };
}