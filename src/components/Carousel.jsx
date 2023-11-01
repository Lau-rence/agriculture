import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image
} from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';

import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill
} from 'react-icons/bs';

const Carousel = () => {
  // const images = [
  //   { url: '/public/carousel/carousel-img-1.png', long: true },
  //   { url: '/public/carousel/carousel-img-8.png' },
  //   { url: '/public/carousel/carousel-img-4.png', long: true },
  //   { url: '/public/carousel/carousel-img-2.png' },
  //   { url: '/public/carousel/carousel-img-3.png', long: true },
  //   { url: '/public/carousel/carousel-img-6.png' },
  //   { url: '/public/carousel/carousel-img-7.png', long: true },
  //   { url: '/public/carousel/carousel-img-2.png' },
  //   { url: '/public/carousel/carousel-img-8.png', long: true },
  //   { url: '/public/carousel/carousel-img-3.png' },
  //   { url: '/public/carousel/carousel-img-4.png', long: true },
  //   { url: '/public/carousel/carousel-img-5.png' },
  //   { url: '/public/carousel/carousel-img-6.png', long: true },
  //   { url: '/public/carousel/carousel-img-7.png' }
  // ];

  const images = [
    {
      url: 'https://images.pexels.com/photos/1276237/pexels-photo-1276237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      url: 'https://images.pexels.com/photos/1084540/pexels-photo-1084540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      url: 'https://images.pexels.com/photos/1562389/pexels-photo-1562389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      url: 'https://images.pexels.com/photos/4919737/pexels-photo-4919737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      url: 'https://images.pexels.com/photos/360013/pexels-photo-360013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      url: 'https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      url: 'https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      url: 'https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      url: 'https://images.pexels.com/photos/360013/pexels-photo-360013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      url: 'https://images.pexels.com/photos/1276237/pexels-photo-1276237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      url: 'https://images.pexels.com/photos/1084540/pexels-photo-1084540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      url: 'https://images.pexels.com/photos/1562389/pexels-photo-1562389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      url: 'https://images.pexels.com/photos/360013/pexels-photo-360013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      url: 'https://images.pexels.com/photos/4919737/pexels-photo-4919737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  /* <Grid
        templateColumns="repeat(7, 1fr)"
        sx={{ columnGap: '10px', rowGap: '10px' }}
        height="400px" // Set a fixed height for the grid container
      >
        {images.map((image, i) => (
          <GridItem
            key={i}
            bg={i % 2 === 0 ? 'gray' : 'green'}
            maxW={'250px'}
            height="100%" // Make grid items fill the entire container height
            sx={{ margin: '0' }}
            rounded={'xl'}
          >
            <Image
              src="https://images.pexels.com/photos/1276237/pexels-photo-1276237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Cover Image"
              objectFit="cover"
              rounded={'xl'}
              width="100%"
              height="100%"
            />
          </GridItem>
        ))}
      </Grid> */

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getDisplayedImages = () => {
    const lastIndex =
      currentIndex + 14 < images.length ? currentIndex + 14 : images.length;
    if (currentIndex + 14 < images.length) {
      return images.slice(currentIndex, lastIndex);
    } else {
      const overflowCount = currentIndex + 14 - images.length;
      return [...images.slice(currentIndex), ...images.slice(0, overflowCount)];
    }
  };

  return (
    <Box position="relative" marginTop="50px" id="carousel">
      <Grid
        gap={'10px'}
        flexWrap={'wrap'}
        templateColumns={[
          'repeat(7, 1fr)',
          'repeat(7, 1fr)',
          'repeat(7, 1fr)',
          'repeat(7, 1fr)',
          'repeat(7, 1fr)'
        ]}
      >
        {getDisplayedImages().map((image, i) => (
          <GridItem
            key={i}
            maxW={'250px'}
            sx={{
              margin: '0',
              maxWidth: '100%',
              height: i % 2 === 0 ? '300px' : '200px'
            }}
            rounded={'xl'}
          >
            <Image
              width="100%"
              height="100%"
              rounded={'xl'}
              src={image.url}
              objectFit="cover"
              alt="Cover Image"
            />
          </GridItem>
        ))}
      </Grid>

      <Box
        top={'50%'}
        left={'50px'}
        bg={'gray.100'}
        border={'none'}
        rounded={'full'}
        cursor={'pointer'}
        marginRight={'10px'}
        position={'absolute'}
        backgroundColor={'#fff'}
        transform={'translateY(-50%)'}
        shadow={
          '0 0 0 7px rgba(255, 255, 255, 0.5), 0 0 0 14px rgba(255, 255, 255, 0.5)'
        }
        _hover={{
          bg: 'white',

          boxShadow:
            '0 0 0 10px rgba(255, 255, 255, 0.5), 0 0 0 18px rgba(255, 255, 255, 0.5)'
        }}
        onClick={handlePrevious}
      >
        <BsFillArrowLeftCircleFill size={'40px'} color="#009A4F" />
      </Box>
      <Box
        top={'50%'}
        right={'50px'}
        bg={'gray.100'}
        border={'none'}
        rounded={'full'}
        cursor={'pointer'}
        marginRight={'10px'}
        position={'absolute'}
        backgroundColor={'#fff'}
        transform={'translateY(-50%)'}
        shadow={
          '0 0 0 7px rgba(255, 255, 255, 0.5), 0 0 0 14px rgba(255, 255, 255, 0.5)'
        }
        _hover={{
          bg: 'white',

          boxShadow:
            '0 0 0 10px rgba(255, 255, 255, 0.5), 0 0 0 18px rgba(255, 255, 255, 0.5)'
        }}
        onClick={handleNext}
      >
        <BsFillArrowRightCircleFill size={'40px'} color="#009A4F" />
      </Box>
    </Box>
  );
};

export default Carousel;
