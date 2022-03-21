import Cookie from "universal-cookie";

export const useCookie = () => {
  const cookie = new Cookie();

  const getCookie = cookie.get("userAuth");

  const removeCookie = () => cookie.remove("userAuth");

  return { getCookie, removeCookie };
};
