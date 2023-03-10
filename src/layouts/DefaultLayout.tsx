import { Container, Grid, GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { Header } from '@src/layouts/units/Header';

export const DefaultLayout = () => {
  return (
    <Grid
      templateAreas={`"header"
                  "main"`}
      gridTemplateRows='100px 1fr'
      gridTemplateColumns='1fr'
    >
      <GridItem area='header'>
        <Header />
      </GridItem>
      <GridItem area='main'>
        <Container maxW='1200px' minW='320px' p='80px 16px'>
          <Outlet />
        </Container>
      </GridItem>
    </Grid>
  );
};
