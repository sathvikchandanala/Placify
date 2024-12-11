export const sendToken = (user, statusCode, res, message) => {
  const token = user.getJWTToken();
  console.log(token);
  const options = {
    expires: new Date(
      Date.now() + (process.env.COOKIE_EXPIRE || 7) * 24 * 60 * 60 * 1000 // Default to 7 days if COOKIE_EXPIRE is undefined
    ),
    httpOnly: true, // Prevent client-side access
    secure: "development", // Secure in production
    sameSite: "Strict", // Adjust to your use case, e.g., 'Lax' or 'None'
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    message,
    token,
  });
};
