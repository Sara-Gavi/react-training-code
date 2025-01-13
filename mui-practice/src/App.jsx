import { Button, Container } from "@mui/material";

function App() {
  return (
    <div>
      <Container sx={{ border: 2, boxShadow: 3, pb: 2 }}>
        <h1>App</h1>
        <Button variant="contained">Hello World</Button>
      </Container>
    </div>
  );
}

export default App;
