const API_URL = `http://127.0.0.1:8080/api`;

const simpleFetch = async (endpoint, endpointName) => {
  fetch(API_URL + endpoint, {
    mode: "cors",
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then(async (response) => {
    if (!response.ok) {
      console.error(`${endpointName}: Network response was not ok`);
      return null;
    }
    response = await response.json()
    console.log("Fetched Data:" + response);

    return response;
  });
};

const getTitleLyrics = async () => {
  const parsedData = await simpleFetch("/index", " getTitleLyrics");
  console.log(parsedData["lyricText"]);
  // return parsedData["text"];
};

export { getTitleLyrics };
