const API_URL = `http://127.0.0.1:8080/api`;

const printObjectProperties = (obj) => {
  Object.keys(obj).forEach(prop => {
    console.log(prop + ': ' + obj[prop]);
  });
};

const simpleFetch = async (endpoint, endpointName) => {
  const response = await fetch(API_URL + endpoint, {
    mode: "cors",
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

    if (!response.ok) {
      console.error(`${endpointName}: Network response was not ok`);
      return null;
    }
    const parsed = await response.json()
    console.log("Fetched Data at " + endpoint + "," + endpointName);
    printObjectProperties(parsed); 

    return parsed;

};

const getTitleLyrics = async () => {
  const parsedData = await simpleFetch("/index", " getTitleLyrics");
  return parsedData;
};

export { getTitleLyrics };
