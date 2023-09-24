
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";


class MyPhotoAPI {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${MyPhotoAPI.token}` };
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error(err.message);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // individual API routes

  static async authUser(userData) {
    let res = await this.request(`auth/token`, userData, "post");
    return res.token;
  }

  static async signUpUser(formData) {
    let res = await this.request("auth/register", formData, "post");
    return res.token;
  }

  static async getUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  static async patchUser(username, formData) {
    let res = await this.request(`users/${username}`, formData, "patch");
    return res.user;
  }

  static async deleteUser(username) {
    let res = await this.request(`users/${username}`, null, "delete");
    return res;
  }

  // get all posts
  static async getPrompts() {
    let res = await this.request(`prompts`);
    return res.prompts;
  }

  // get specific prompt
  static async getPromptsById(id) {
    let res = await this.request(`prompts/${id}`);
    return res.prompt;
  }
  
  // save a prompt
  static async savePrompt(formData) {
    let res = await this.request(`prompts/`, formData, 'post');
    return res.prompt;
  }

  // patch prompt
  static async patchPrompt(id, formData) {
    let res = await this.request(`prompts/${id}`, formData, "patch");
    return res.prompt;
  }

  // delete prompt
  static async deletePrompt(id) {
    let res = await this.request(`prompts/${id}`, null, "delete");
    return res;
  }

}

// MyPhotoAPI.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIxIiwiaWF0IjoxNjkzODU4MjgyfQ.i0rem6rJERnJUtHD8lOmrIRkcxdpA2FPHakJKteaaNA";

export default MyPhotoAPI;