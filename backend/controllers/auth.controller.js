export const loginUser = async (req, res) => {
  try {
    res.send("login");
  } catch (error) {
    console.log(error.message);
  }
};

export const signupUser = (req, res) => {
  res.send("signup route");
};

export const logoutUser = (req, res) => {
  res.send("logout route");
};
