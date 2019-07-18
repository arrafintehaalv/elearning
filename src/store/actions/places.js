import { ADD_PLACE, DELETE_PLACE } from "./actionTypes";

export const addPlace = (placeName, location, image) => {
  return dispatch => {
    fetch("https://us-central1-locationapp-adee9.cloudfunctions.net/store", {
      method: "POST",
      body: JSON.stringify({
        image: image.base64
      })
    })
      .catch(err => console.log(err))
      .then(res => res.json())
      .then(parsedRes => {
        const placeData = {
          name: placeName,
          location: location,
          image: parsedRes.imageUrl
        };
        return fetch("https://locationapp-adee9.firebaseio.com/places.json", {
          method: "POST",
          body: JSON.stringify(placeData)
        });
      })
      .catch(err => console.log(err))
      .then(res => res.json())
      .then(parsedRes => {
        console.log(parsedRes);
      });
  };
};
export const deletePlace = key => {
  return {
    type: DELETE_PLACE,
    placeKey: key
  };
};
