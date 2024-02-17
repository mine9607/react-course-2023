import { useState, useEffect } from "react";
import Places from "./Places.jsx";
import Error from "./Error.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";

export default function AvailablePlaces({ onSelectPlace }) {
  const [isLoading, setIsLoading] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState(null);

  // Todo: Fetch available places from backend API

  // fetch
  // option 1 - sends a get request to the url endpoint
  // useEffect(() => {
  //   fetch("http://localhost:3000/places")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((resData) => {
  //       setAvailablePlaces(resData.places);
  //     });
  // }, []);

  // option 2: newer syntax
  // useEffect(() => {
  //   const fetchPlaces = async () => {
  //     const response = await fetch("http://localhost:3000/places");
  //     const resData = await response.json();
  //     setAvailablePlaces(resData.places);
  //   };

  //   fetchPlaces();
  // }, []);

  // option 3: newer syntax with try/catch
  // useEffect(() => {
  //   const fetchPlaces = async () => {
  //     setIsLoading(true);
  //     try {
  //       const response = await fetch("http://localhost:3000/places");
  //       const resData = await response.json();
  //       setAvailablePlaces(resData.places);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchPlaces();
  // }, []);

  // option 4: newer syntax with try/catch and if !response.ok
  useEffect(() => {
    const fetchPlaces = async () => {
      setIsLoading(true);
      try {
        // const response = await fetch("http://localhost:3000/places");
        // const resData = await response.json();

        // if (!response.ok) {
        //   throw new Error("Something went wrong!");
        // }
        // moved the above code into separate file for reusability fetching data:

        const places = await fetchAvailablePlaces();

        // fetch user location
        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(
            // resData.places,  -- update: removed when fetching function was added
            places,
            position.coords.latitude,
            position.coords.longitude
          );
          setAvailablePlaces(sortedPlaces);
          setIsLoading(false);
        });
      } catch (error) {
        console.log(error);
        setError({ message: error.message || "Something went wrong!" });
        setIsLoading(false);
      }
    };
    fetchPlaces();
  }, []);

  if (error) {
    return <Error title="An Error occurred!" message={error.message} />;
  }
  fetchAvailablePlaces();

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isLoading}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
