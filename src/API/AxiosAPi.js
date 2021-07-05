import Axios from "axios";

const request = (requestType, url, data = "") => {
  let option = {
    baseURL: "https://60b362401bec230017bf3915.mockapi.io/api/testdemo/product",
    url: url,
    method: requestType,
    data: data,
  };
  return Axios(option);
};

export const getProduct = (url = "") => {
  return request("GET", "/" + url, "");
};

export const postProduct = (url, data) => {
  return request("POST", "/" + url, data);
};

export const putProduct = (url, data) => {
  return request("PUT", "/" + url, data);
};

export const deleteProduct = (url, data = "") => {
  return request("DELETE", "/" + url, data);
};
