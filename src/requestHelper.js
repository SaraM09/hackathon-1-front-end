import axios from "axios";

const base = axios.create({
  baseURL: "http://localhost:3000/",
});

const createUser = async (userDetail) => {
  const response = await base.post("users", userDetail);
  return response.data;
};

export { createUser };

// username, email, password, fullName, phoneNumber, location, firebaseId
