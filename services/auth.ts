import axios from "axios";

// const ROOT_API = process.env.NEXT_PUBLIC_API;
const ROOT_API = "http://localhost:5000";
const API_VERSION = "api/v1";

export async function setSignUp(data: any) {
  const URL = "auth/signup";

  const response = await axios
    .post(`${ROOT_API}/${API_VERSION}/${URL}`, data)
    .catch((error) => error.response);
  const axiosResponse = response.data;
  if (axiosResponse?.error === 1) {
    return axiosResponse;
  }
  return axiosResponse.data;
}
