import { Container, Grid } from "@mui/material";

function App() {
  return (
    <div>
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} md={4}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde quo
              repudiandae explicabo quibusdam ducimus rerum veritatis, commodi,
              recusandae expedita reprehenderit tenetur omnis perferendis
              doloremque aspernatur magni cupiditate fugiat magnam alias!
            </p>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde quo
              repudiandae explicabo quibusdam ducimus rerum veritatis, commodi,
              recusandae expedita reprehenderit tenetur omnis perferendis
              doloremque aspernatur magni cupiditate fugiat magnam alias!
            </p>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde quo
              repudiandae explicabo quibusdam ducimus rerum veritatis, commodi,
              recusandae expedita reprehenderit tenetur omnis perferendis
              doloremque aspernatur magni cupiditate fugiat magnam alias!
            </p>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
