import token from "jsonwebtoken";

export const setToken = async (info: any) => {
  return await token.sign({ ...info }, "adwadwadwadw");
};
export const checkToken = async (tokenString: string) => {
  return await token.verify(tokenString, "adwadwadwadw");
};
