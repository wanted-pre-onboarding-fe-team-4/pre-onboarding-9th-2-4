import { Grid, GridItem, Flex } from '@chakra-ui/react';
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
      <GridItem area='main' p='20'>
        <Flex justifyContent='center'>
          <div style={{ maxWidth: '1200px' }}>
            <Outlet />
          </div>
        </Flex>
      </GridItem>
    </Grid>
  );
};
