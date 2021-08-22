import axios from "axios";

const getDba = async (dba) => {
  const { data } = await axios.get(
    `https://data.cityofnewyork.us/resource/43nn-pn8j.json?dba=${dba.toUpperCase()}`
  );
  return data;
};

const getBoro = async (boro) => {
  const { data } = await axios.get(
    `https://data.cityofnewyork.us/resource/43nn-pn8j.json?boro=${boro}`
  );
  return data;
};

const getCamis = async (camis) => {
  const { data } = await axios.get(
    `https://data.cityofnewyork.us/resource/43nn-pn8j.json?camis=${camis}`
  );
  return data;
};

const defaults = {
  getDba,
  getBoro,
  getCamis
};

export default defaults;

//https://data.cityofnewyork.us/resource/43nn-pn8j.json
