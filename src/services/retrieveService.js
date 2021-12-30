let base64 = require("base-64");

const username = "admin";
const password = "supersecret";

export async function retrieveAllImages() {
  var obj = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Origin: "",
      Host: "localhost:4000",
      Authorization: "Basic " + base64.encode(username + ":" + password),
    },
  };
  try {
    const response = await fetch("/momos/retrieve", obj);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
}
