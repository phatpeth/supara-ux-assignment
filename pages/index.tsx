import { Container, Typography } from "@mui/material";
import Form from "../components/Form";

function HomePage() {
  return (
    <Container maxWidth="sm" sx={{ my: { xs: "16px", sm: "24px" } }}>
      <Typography variant="h3" color="primary" mb="8px">
        Enter Clock In Information
      </Typography>
      <Form />
    </Container>
  );
}

export default HomePage;
