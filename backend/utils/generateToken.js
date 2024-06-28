import jwt from "jsonwebtoken";
// sign(payload, secret, options): This method is used to create and sign a JWT.
//  The payload parameter is an object that contains the information you want to include in the JWT.
//  The secret parameter is a string that is used to sign the JWT and it is used to verify the JWT later.
const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  res.cookie("jwt", token, {
    maxAge: 30 * 24 * 60 * 60 * 1000,
    httpOnly: true, //prevent XSS attacks cross-site scripting attacks
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "development",
  });
};
export default generateTokenAndSetCookie;
