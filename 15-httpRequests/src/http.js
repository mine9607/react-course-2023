// optional file

export async function fetchAvailablePlaces() {
  const response = await fetch("http://localhost:3000/places");
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Something went wrong!");
  }

  return resData.places;
}

export async function updateUserPlaces(places) {
  const response = await fetch("http://localhost:3000/user-places", {
    method: "PUT", // fetch api default is GET so we need to change to PUT
    body: JSON.stringify({ places }), // we need to send the data as a string
    headers: {
      "Content-Type": "application/json", // we need to tell the server what type of data we are sending
    },
  });
  const resData = await response.json();

  if (!response.ok) {
    throw new Error(resData.message || "Failed to update user data!");
  }
  return resData.message;
}

export async function fetchUserPlaces() {
  const response = await fetch("http://localhost:3000/user-places");
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Something went wrong!");
  }

  return resData.places;
}
