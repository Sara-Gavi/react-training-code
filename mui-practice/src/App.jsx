import { Box, Button, Container, Typography } from "@mui/material";
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
import BalanceIcon from "@mui/icons-material/Balance";

function App() {
  return (
    <div>
      <Container sx={{ border: 2, boxShadow: 3, pb: 2 }}>
        <h1>App</h1>
        <Typography variant="h1" component="h2">
          Título 1
        </Typography>
        <Typography variant="h1">Título 2</Typography>
        <Typography variant="body1" textAlign="center">
          Título 3
        </Typography>
        <Box
          sx={{
            border: 2,
            p: 5,
            borderColor: "peru",
            bgcolor: "#111",
            color: "white",
          }}
          component="span"
        >
          Que hermoso es MUI
        </Box>
        <Button
          variant="contained"
          color="error"
          startIcon={<AddHomeWorkIcon />}
        >
          Hello World
        </Button>
        <Button variant="outlined" color="success" endIcon={<BalanceIcon />}>
          Hello World
        </Button>
      </Container>
    </div>
  );
}

export default App;
