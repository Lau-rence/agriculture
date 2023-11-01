// Packages
import React from 'react';
import { LuLeaf } from 'react-icons/lu';
import { GrGroup } from 'react-icons/gr';
import { Button } from '@chakra-ui/button';
import { PiBuildings } from 'react-icons/pi';
import { FaPlug, FaPlay } from 'react-icons/fa';
import { MdOutlineWaterDrop } from 'react-icons/md';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';
import {
  Box,
  Flex,
  Heading,
  List,
  ListItem,
  Stack,
  Text
} from '@chakra-ui/layout';

// Components

// Assets
import { Image } from '@chakra-ui/image';
import { Avatar } from '@chakra-ui/avatar';
//import { ReactComponent as CurvedLineSVG } from '../assets/svg/waveLine.svg';
import { Icon } from '@chakra-ui/react';

const content = [
  { name: 'Agriculture Industry', icon: <LuLeaf /> },
  { name: 'Power and Energy', icon: <FaPlug /> },
  { name: 'Housing and Constructions', icon: <PiBuildings /> },
  { name: 'Water', icon: <MdOutlineWaterDrop /> },
  { name: 'Education and Training', icon: <GrGroup /> }
];

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Stack
        gap={'0'}
        id="home"
        bg="white"
        as="section"
        overflow={'hidden'}
        flexDir={['column', 'column', 'column', 'row', 'row']}
      >
        <Flex
          zIndex={2}
          align={'self-start'}
          position={'relative'}
          p={[1, 1, 6, 12, 16]}
          flex={[2, 2, 1, 1, 1]}
          backgroundSize={'cover'}
          backgroundPosition={'bottom'}
          backgroundRepeat={'no-repeat'}
          backgroundImage={'url("/hero/hero-bg-L.png")'}
        >
          <Image
            left={'-5'}
            zIndex={'0'}
            position={'absolute'}
            src="/hero/random-2.svg"
            bottom={['100', '100', '100', '100', '170']}
            width={['70px', '70px', '70px', '70px', '100px']}
          />
          <Image
            left={'0'}
            zIndex={'0'}
            bottom={'0'}
            position={'absolute'}
            src="/hero/random-1.svg"
            width={['40px', '50px', '70px', '70px', '70px']}
          />
          <Image
            zIndex={'0'}
            bottom={'0'}
            position={'absolute'}
            src="/hero/broccoli.svg"
            left={['30', '55', '70', '70', '90']}
            width={['50px', '70px', '70px', '70px', '90px']}
          />
          <Image
            zIndex={'0'}
            position={'absolute'}
            src="/hero/bell-pepper.svg"
            bottom={['0', '0', '0', '0', '0']}
            left={['75', '130', '150', '200', '230']}
            width={['60px', '80px', '80px', '110px', '110px']}
          />

          <Image
            zIndex={'0'}
            position={'absolute'}
            src="/hero/carrot.svg"
            bottom={'0'}
            left={['100', '200', '200', '250', '380']}
            width={['190px', '270px', '270px', '250px', '350px']}
          />

          <Image
            zIndex={'0'}
            position={'absolute'}
            src="/hero/eggplant.svg"
            right={['60px', '75px', '75px', '75px', '75px']}
            bottom={'0'}
            width={['70px', '70px', '80px', '110px', '110px']}
          />

          <Image
            zIndex={'0'}
            position={'absolute'}
            src="/hero/beans.svg"
            bottom={'2'}
            right={['0', '0', '0', '0', '-10']}
            width={['90px', '100px', '120px', '120px', '150px']}
          />

          <Box
            p={[2, 2, 2, 10, 10]}
            textAlign={['center', 'center', 'center', 'start', 'start']}
          >
            <Heading
              mb={[2, 2, 2, 5, 5]}
              textColor={'#009A4F'}
              fontSize={['2xl', '2xl', '2xl', '3xl', '3xl']}
            >
              Welcome to
            </Heading>
            <Heading
              textColor={'#000'}
              mb={[2, 2, 2, 5, 5]}
              fontSize={['40px', '40px', '3rem', '4rem', '4rem']}
            >
              WELCOME TO AGRICULTURE INDUSTRY
            </Heading>
            <Text>
              Agriculture Industry is a member of
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed vel metus auctor, dignissim libero eget, cursus leo. 
              Fusce ac libero nec dolor vulputate cursus vel at massa. 
              Sed auctor, felis ut viverra fermentum, urna ex bibendum ligula, 
              nec facilisis sapien tortor at nisi. 
            </Text>

            <List
              mt={30}
              gap={['10px', '3px', '20px', '0', '0']}
              zIndex={'1'}
              display={'flex'}
              position="relative"
              flexDir={['column', 'row', 'row', 'column', 'column']}
            >
             {/*
              <Box
                // w={'991px'}
                zIndex={-10}
                margin={'auto'}
                position="absolute"
                bottom={['0 ', '0', '0', '0', '0']}
                left={['-15', '-1000', '-1000', '0', '0']}
                top={['-10', '-20', '-20', '0', '0']}
                transform={[
                  'rotate(-90deg) translateY(100px)',
                  'rotate(180deg) translateY(100px)',
                  'rotate(180deg) translateY(100px)',
                  'rotate(-90deg) translateY(100px)',
                  'rotate(-90deg) translateY(100px)'
                ]}
                // style={{ rotate: '-90deg' }}
              >
                <CurvedLineSVG style={{ width: '325px', height: '25px' }} />
              </Box>*/}
              {content.map((name, i) => (
                <ListItem key={i}>
                  <Flex
                    w={'full'}
                    alignItems={'center'}
                    justifyContent={[
                      'center',
                      'center',
                      'start',
                      'start',
                      'start'
                    ]}
                  >
                    <Flex
                      // align="center"

                      w={'full'}
                      alignItems="center"
                      flexDir={['row', 'column', 'column', 'row', 'row']}
                      justifyContent={[
                        'start',
                        'center',
                        'start',
                        'start',
                        'start'
                      ]}
                    >
                      <Box
                        w={'full'}
                        display="flex"
                        alignItems="center"
                        bgRepeat="no-repeat"
                        justifyContent="center"
                        backgroundPosition="center"
                        bgImage="/hero-circle-bg.svg"
                        width={['70px', '70px', '70px', '90px', '90px']}
                        height={['70px', '70px', '70px', '90px', '90px']}
                        style={
                          name.name === 'Power and Energy Sector' ||
                          name.name === 'Water'
                            ? { marginLeft: '30px' }
                            : { marginLeft: '0px' }
                        }
                      >
                        <Box
                          display="flex"
                          color={'#024731'}
                          borderRadius="50%"
                          alignItems="center"
                          justifyContent="center"
                          bg="rgba(147, 206, 32, .3)"
                          width={['30px', '30px', '30px', '30px', '40px']}
                          height={['30px', '30px', '30px', '30px', '40px']}
                          fontSize={['23px', '23px', '23px', '23px', '28px']}
                        >
                          {name.icon}
                        </Box>
                      </Box>
                      <Text
                        color={'#024731'}
                        textAlign={'center'}
                        fontFamily={'Reem Kufi'}
                        fontSize={['16px', '16px', '16px', '20px', '20px']}
                      >
                        {name.name}
                      </Text>
                    </Flex>
                  </Flex>
                </ListItem>
              ))}
            </List>

            <Box
              w={'full'}
              display={'flex'}
              alignItems={'flex-end'}
              justifyContent={'center'}
            >
              <Button
                gap={'10px'}
                color={'#fff'}
                padding={'25px'}
                display={'flex'}
                marginTop={'20px'}
                fontWeight={'normal'}
                colorScheme={'#F67B00'}
                backgroundColor={'#F67B00'}
                mb={['90px', '90px', '90px', '30px', '30px']}
              >
                <Flex alignItems={'center'} gap={4}>
                  <a
                    href="#about-us"
                    onClick={() => {
                      scrollToSection('#about-us');
                    }}
                  >
                    <Flex alignItems={'center'} gap={4}>
                      About us <BsFillArrowDownCircleFill size={'20px'} />
                    </Flex>
                  </a>{' '}
                </Flex>
              </Button>
            </Box>
          </Box>
        </Flex>
        <Flex
          zIndex={10}
          // position={'relative'}
          alignItems={'center'}
          p={[20, 20, 20, 0, 0]}
          flex={[0, 0, 1, 1, 1]}
          backgroundSize={'cover'}
          justifyContent={'center'}
          backgroundRepeat={'no-repeat'}
          backgroundPosition={'left center'}
          backgroundImage={'url("/hero/hero-bg-R.png")'}
        >
          <Box color={'#fff'}>
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                w={'80px'}
                h={'80px'}
                bg={'gray.100'}
                border={'none'}
                rounded={'full'}
                shadow={
                  '0 0 0 12px rgba(255, 255, 255, 0.3), 0 0 0 20px rgba(255, 255, 255, 0.3)'
                }
                _hover={{
                  bg: 'white',

                  boxShadow:
                    '0 0 0 12px rgba(255, 255, 255, 0.5), 0 0 0 20px rgba(255, 255, 255, 0.5)'
                }}
              >
                <FaPlay size={'30px'} color="#009A4F" />
              </Button>
            </a>
          </Box>
        </Flex>
      </Stack>
    </>
  );
};

export default Hero;
