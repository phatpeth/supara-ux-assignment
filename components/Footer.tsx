import { AppBar, Toolbar, Typography } from "@mui/material";

const Footer = () => {
  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{ top: "auto", bottom: 0 }}
    >
      <Toolbar sx={{ justifyContent: "flex-end" }}>
        <Typography variant="caption" color="GrayText">
          Create Support Ticket | Chat Support | V.0.0.118
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
