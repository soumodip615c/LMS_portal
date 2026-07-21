import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const submitAdmission = (formData) => {
  return API.post("/admissions", formData);
};
