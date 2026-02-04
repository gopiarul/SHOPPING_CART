export const adminLogin = (email, password) => {
  if (email === "gopiarul2004@gmail.com" && password === "gopi2004") {
    localStorage.setItem("admin", JSON.stringify({ email }));
    return true;
  }
  return false;
};

export const isAdminLoggedIn = () => {
  return JSON.parse(localStorage.getItem("admin"));
};

export const adminLogout = () => {
  localStorage.removeItem("admin");
};
