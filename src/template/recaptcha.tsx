import { Box } from "@mui/material";
import recaptchaImg from "../assets/recaptcha.png";
import { Checkbox } from "../components/checkbox/checkbox";

export const ReCaptcha = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      bgcolor="#f9f9f9"
      border="1px solid #e5e5e5"
      justifyContent="space-between"
      width="420px"
      boxSizing="border-box"
      padding="0 1rem"
    >
      <Box display="flex" alignItems="center">
        <Checkbox name="recaptcha" />
      </Box>
      <img src={recaptchaImg} width="80" />
    </Box>
  );
};
