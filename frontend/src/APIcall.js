import axios from "axios";

const BASE_URL = process.env.BASE_URL || "http://localhost:3001";


class UpForGrabsApi {
  static async request(endpoint, params = {}, verb = "get") {
    let _token = localStorage.getItem("token");
    console.debug("API Call:", endpoint, params, verb);

    let q;

    if (verb === "get") {
      q = axios.get(
        `${BASE_URL}/${endpoint}`, { params: { _token, ...params } });
    } else if (verb === "post") {
      q = axios.post(
        `${BASE_URL}/${endpoint}`, { _token, ...params });
    } else if (verb === "patch") {
      q = axios.patch(
        `${BASE_URL}/${endpoint}`, { _token, ...params });
    } else if (verb === "delete") {
      q = axios.delete(
        `${BASE_URL}/${endpoint}`, { params: { _token, ...params } }
      )
    }

    try {
      return (await q).data;
    } catch (err) {
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }


  static async login(data) {
    let res = await this.request(`users`, data, "post");

    return res.token;
  }
  
  static async signup(data) {
    let res = await this.request(`users`, data, "post");

    return res.token;
  }
}

export default UpForGrabsApi;