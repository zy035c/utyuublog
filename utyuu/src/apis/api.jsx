const API_URL = `127.0.0.1:8080/api`;

const simpleFetch = async (endpoint, endpointName) => {
  try {
    const response = await fetch(API_URL + endpoint);

    if (!response.ok) {
        console.error(`${endpointName}: Network response was not ok`);
        return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`${endpointName}: Error fetching text data:`, error);
    return null;
  }
};

const getTitleLyrics = async () => {
  const data = await simpleFetch("/index", "getTitleLyrics");
};

export { getTitleLyrics };
