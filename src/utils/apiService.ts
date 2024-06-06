import axios from "axios";
const apiUrl = import.meta.env.VITE_API_API_BASE_URL;
const apiKey = import.meta.env.VITE_API_API_KEY;

const StringapiUrl = apiUrl.toString();
axios.defaults.withCredentials = true;

const StringapiKey = apiKey.toString();
const key = `${StringapiKey}`;

// register
export const register = async (formData: object) => {
  try {
    const response = await axios.post(
      `${StringapiUrl}/api/auth/register`,
      formData,
      {
        headers: {
          "x-api-key": `${key}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

// verify account
export const verifyacc = async (data: object) => {
  try {
    const response = await axios.post(
      `${StringapiUrl}/api/auth/verify_otp`,
      data,
      {
        headers: {
          "x-api-key": `${key}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

// create Pin
export const createpin = async (data: object) => {
  try {
    const response = await axios.post(
      `${StringapiUrl}/api/auth/marchant_pass`,
      data,
      {
        headers: {
          "x-api-key": `${key}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};
