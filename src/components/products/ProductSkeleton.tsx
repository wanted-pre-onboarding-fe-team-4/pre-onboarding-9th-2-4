import {
  AspectRatio,
  Box,
  Card,
  Grid,
  Skeleton,
  SkeletonText,
} from '@chakra-ui/react';

const ProductLiSkeleton = () => {
  return (
    <Grid
      gridTemplateColumns={[
        'repeat(1, 1fr)',
        'repeat(2, 1fr)',
        'repeat(3, 1fr)',
        'repeat(4, 1fr)',
      ]}
      gap='2rem'
    >
      {[...Array(10)].map((_, key) => (
        <Card
          key={key}
          maxW='20rem'
          p='2rem 1rem'
          display='flex'
          flexDir='column'
          gap='2rem'
          justifyContent='space-between'
          cursor='pointer'
        >
          <Box display='flex' flexDir='column' alignItems='start' gap='1rem'>
            <Skeleton width='80%' height='2rem' />
            <SkeletonText fontSize='2xl' width='100%' />
            <Skeleton width='5rem' height='1rem' />
          </Box>

          <AspectRatio ratio={1 / 1} width='100%'>
            <Skeleton width='100%' height='100%' rounded='xl' />
          </AspectRatio>

          <Skeleton width='6rem' height='2rem' />
        </Card>
      ))}
    </Grid>
  );
};
export default ProductLiSkeleton;
