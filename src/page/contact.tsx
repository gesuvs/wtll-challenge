import { Box, Typography } from "@mui/material";
import { FormHTMLAttributes, ReactNode } from "react";

type ContactProps = {
  children: ReactNode;
} & FormHTMLAttributes<HTMLFormElement>;

export const Contact = ({ children, onSubmit }: ContactProps) => {
  return (
    <Box
      position="relative"
      borderRadius="4px"
      height="500px"
      padding="2rem"
      bgcolor="#FFF"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="absolute"
        bgcolor="#000000"
        height="4rem"
        top="10px"
        left="50%"
        width="90%"
        style={{
          transform: "translate(-50%, -50%)",
        }}
      >
        <Typography color="#FFF" variant="h6">
          FALE CONOSCO
        </Typography>
      </Box>
      <Box
        onSubmit={onSubmit}
        display="flex"
        flexDirection="column"
        marginTop="1rem"
        component="form"
      >
        {children}
      </Box>
    </Box>
  );
};
