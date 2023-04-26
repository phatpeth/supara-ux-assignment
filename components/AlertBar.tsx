import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import { Alert, Badge, Box, Chip, Container } from "@mui/material";

import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import SettingsIcon from "@mui/icons-material/Settings";

const AlertBar = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        alignItems: "stretch",
        justifyContent: "space-between",
        columnGap: "16px",
        pb: { xs: "16px", sm: "24px" },
      }}
    >
      <Alert
        icon={<Chip label="4:39" color="warning" size="small" />}
        variant="outlined"
        severity="warning"
        sx={{ width: "inherit" }}
      >
        Left Before Page Refreshed
      </Alert>
      <Box
        display="flex"
        columnGap="8px"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Badge badgeContent={3} color="error">
          <ErrorOutlineOutlinedIcon color="error" />
        </Badge>
        <SettingsIcon color="action" />
      </Box>
    </Container>
  );
};

export default AlertBar;
