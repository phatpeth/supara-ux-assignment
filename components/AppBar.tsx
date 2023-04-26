import * as React from "react";

import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar as MuiAppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Avatar,
  Button,
  MenuItem,
  Breadcrumbs,
  Link,
} from "@mui/material";

const settings = ["Set Password", "Account", "Dashboard", "Logout"];

const AppBar = () => {
  const [anchorElMenu, setAnchorElMenu] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElMenu(event.currentTarget);
  };
  const handleCloseMenu = (_) => {
    setAnchorElMenu(null);
  };
  return (
    <MuiAppBar position="fixed">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box>
          <Breadcrumbs separator="›" aria-label="breadcrumb" color="white">
            <Link underline="hover" color="white" href="/">
              User Dashboard
            </Link>
            <Typography color="white" fontWeight={900}>
              Attendance
            </Typography>
          </Breadcrumbs>
        </Box>
        <Box sx={{ display: { xs: "none", sm: "flex" } }}>
          <Button sx={{ color: "#fff" }}>Set Password</Button>
          <Button sx={{ color: "#fff" }}>Logout</Button>
          {/* <Button sx={{ color: "#fff" }}>Profile</Button> */}
          <Button sx={{ color: "#fff" }}>
            Hi, Mark
            <Avatar
              alt={"Hello World"}
              src="https://i.pravatar.cc/300"
              sx={{ width: 40, height: 40, ml: "8px" }}
            />
          </Button>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElMenu}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElMenu)}
            onClose={handleCloseMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {settings.map((page) => (
              <MenuItem key={page} onClick={handleCloseMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
};
export default AppBar;
