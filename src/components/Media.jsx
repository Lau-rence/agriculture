import {
  Box,
  Heading,
  Flex,
  Grid,
  GridItem,
  Image,
  AspectRatio
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

const mediaContent = [
  {
    link: 'https://www.youtube.com/embed/8ddMwIE4sqI'
  },
  {
    link: 'https://www.youtube.com/embed/sRx-OJg0rVU'
  },
  {
    link: 'https://www.youtube.com/embed/9Fm5cBmlu7Y'
  },
  {
    link: 'https://www.youtube.com/embed/C-d5_qLX6FE'
  },
  {
    link: 'https://www.youtube.com/embed/T0P8V3Ndbrs'
  },
  {
    link: 'https://www.youtube.com/embed/Dn_iik3M5_Y'
  }
]

const Media = () => {
  const [showIframesCount, setShowIframesCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setShowIframesCount(window.innerWidth <= 767 ? 3 : mediaContent.length);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize the count based on the initial window width.

    // Clean up the event listener when the component is unmounted.
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <Box
      id="media"
      as="section"
      display={'flex'}
      marginTop={'30px'}
      position={'relative'}
      marginBottom={'50px'}
      justifyContent={'center'}
    >
      <Image 
            position={'absolute'} 
            src={'/media/broccoli.png'}
            top={['-20%','-20%','-30%','-70%','-70%']}
            right={0}
            w={['200px','250px','450px','582.402px','582.402px']}
            zIndex={-1}
          />
      <Flex
        w={'88%'}
        // h={'100vh'}
        flexDirection={'column'}
        alignItems={'flex-start'}
        gap={['20px','20px','49px','49px','49px']}
      >
        <Box
          width={'100%'}
          display={'flex'}
          flexDir={['row','row','column','column','column']} 
          justifyContent={['center','center','start','start','start']}
        >
          <Heading
            color={['#009A4F','#009A4F','#024731','#024731','#024731']}
            fontSize={'50px'}
            fontWeight={'400'}
            textShadow={
              '0px 3.4345476627349854px 7.230626583099365px 0px rgba(0, 0, 0, 0.04), 0px 27.429088592529297px 57.745452880859375px 0px rgba(0, 0, 0, 0.07)'
            }
          >
            MEDIA
          </Heading>
          <Box 
            h={'8px'} 
            w={'86px'} 
            bg={'#93CE20'} 
            display={['none','none','block','block','block']}
          />
        </Box>  
        <Grid 
          templateColumns={[
            'repeat(1, 1fr)',
            'repeat(1, 1fr)',
            'repeat(2, 1fr)',
            'repeat(2, 1fr)',
            'repeat(3, 1fr)']}
        >
          {mediaContent.slice(0, showIframesCount).map((info, index) => (
            <GridItem 
              key={index} 
              mr={5}
              mb={5}
            >
              <AspectRatio 
                width={["85.8vw","85.8vw","42.8vw","42.8vw","28vw"]} 
                height="228.095px">
                <iframe
                  src={info.link}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{
                  borderRadius: '14.436px',
                  boxShadow:
                    '0px 3.4345476627349854px 7.230626583099365px 0px rgba(0, 0, 0, 0.04), 0px 27.429088592529297px 57.745452880859375px 0px rgba(0, 0, 0, 0.07)',
                  }}
                ></iframe>
              </AspectRatio>
            </GridItem>
          ))}
        </Grid> 
      </Flex>
    </Box>
  );
};

export default Media;
