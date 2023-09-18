import MyPhotoAPI from "./api";
import axios from "axios";

jest.mock("axios");

describe("MyPhotoAPI", () => {
  afterEach(() => {
    // clear all axios mocks after each test
    axios.mockClear();
  });

  it("authenticates user", async () => {

    axios.mockResolvedValue({ data: {
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIxIiwiaWF0IjoxNjk0OTk3Njk3fQ.1JYVjAgUv3Wbtas5gE3lwi_PseUjuTxke2_n4VxMw4U" }});

    const response = await MyPhotoAPI.authUser({
      username: "u1",
      password: "password",
    });

    expect(response).toEqual(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIxIiwiaWF0IjoxNjk0OTk3Njk3fQ.1JYVjAgUv3Wbtas5gE3lwi_PseUjuTxke2_n4VxMw4U"
    );
    expect(axios).toHaveBeenCalledWith({
      url: "http://localhost:3001/auth/token",
      method: "post",
      data: { username: "u1", password: "password" },
      params: {},
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIxIiwiaWF0IjoxNjkzODU4MjgyfQ.i0rem6rJERnJUtHD8lOmrIRkcxdpA2FPHakJKteaaNA",
      },
    });
  });
});
