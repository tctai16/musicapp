import axios from "axios";
import { loginUrl, registerUrl, userUrl } from "./api";
import { RegisterBody } from "../interface/RegisterBody";
import { LoginBody } from "../interface/LoginBody";

export const registerApi = ({ name, email, password,birthday }: RegisterBody) => {
  const registerRequest = axios({
    method: "POST",
    url: registerUrl,
    params: { name, email, password,birthday },
    headers: {
      "Content-Type": "application/json",
    },
  });
  return registerRequest;
};

export const loginApi = ({ email, password }: LoginBody) => {
  const loginRequest = axios({
    method: "POST",
    url: loginUrl,
    data: { email, password },
    headers: {
      "Content-Type": "application/json",
    },
  });
  return loginRequest;
};

export const profileApi = async () => {
  try {
    const response = await axios.get(userUrl + "/profile");
    const data = await response.data;
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  
};
export const updateAvatarApi = async (imgFile : any) => {
  try {
    const formData = new FormData();
    formData.append("imgFile", imgFile);
    console.log(imgFile);
    const response = await axios.post(userUrl.concat("/updateAvatar"), formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error uploading avatar:", error);
    throw error;
  }
};
