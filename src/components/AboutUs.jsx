import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Image,
  Text
} from '@chakra-ui/react';
import { useState } from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { PiPlant } from 'react-icons/pi';
import PopUp from './AboutUsPopUp';

const AboutUs = () => {
  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };
  const [openPopup, setOpenPopup] = useState(false);
  return (
    <>
      <Box as="section" bg="white" p="16px" id="about-us">
        <Container maxW={'90vw'} color="#009A4F">
          <Heading
            as={'h4'}
            margin={'30px 0px'}
            fontSize={['70px', '70px', '70px', '70px', '40px']}
            textAlign={['center', 'center', 'center', 'center', 'left']}
          >
            About Us
          </Heading>
          <Flex
            direction={[
              'column-reverse',
              'column-reverse',
              'column-reverse',
              'column-reverse',
              'row'
            ]}
            gap={'50px'}
          >
            <Box
              flex={2}
              textAlign={['center', 'center', 'center', 'left', 'left']}
            >
              <Flex
                gap={'20px'}
                fontSize={'20px'}
                color={'#024731'}
                marginTop={'10px'}
                direction={'column'}
                textAlign={'justify'}
              >
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Nullam ac ante vel tortor luctus dignissim. Vestibulum sit amet justo in libero varius venenatis. 
                  Quisque ac ipsum sit amet est lacinia volutpat. Sed feugiat libero in nunc feugiat, 
                  nec tristique justo scelerisque. Sed in odio eu purus dictum tincidunt. 
                  Praesent vestibulum quam eget justo hendrerit, eget hendrerit nulla pharetra. 
                  Sed convallis, velit ac fermentum tincidunt, dolor purus volutpat nisl, id luctus orci quam in urna. 
                  Vivamus auctor suscipit odio, eu feugiat purus. Sed vel purus a libero dapibus efficitur.
                </Text>
                <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed vel metus auctor, dignissim libero eget, cursus leo. 
                Fusce ac libero nec dolor vulputate cursus vel at massa. 
                Sed auctor, felis ut viverra fermentum, urna ex bibendum 
                ligula, nec facilisis sapien tortor at nisi. 
                Vivamus id malesuada justo. 
                Quisque et est nec libero sollicitudin varius non eget nisl. 
                Sed quis libero a velit posuere egestas. 
                Phasellus scelerisque ac dolor eget varius. Nulla facilisi.
                </Text>
              </Flex>
              <a href="#popup">
                <Button
                  gap={'10px'}
                  color={'#fff'}
                  padding={'25px'}
                  display={'flex'}
                  marginTop={'20px'}
                  fontWeight={'normal'}
                  colorScheme="#F67B00"
                  backgroundColor={'#F67B00'}
                  onClick={()=>{
                    setOpenPopup(true);
                    scrollToSection('#popup');
                  }}
                >
                  <Flex alignItems={'center'} gap={4}>
                      <Flex alignItems={'center'} gap={4}>
                        Read more <BsFillArrowRightCircleFill size={'20px'} />
                      </Flex>
                  </Flex>
                </Button>
              </a>
            </Box>

            <Box
              flex={1}
              display={'flex'}
              alignItems="center"
              justifyContent="center"
            >
              <Flex position="relative">
                <Box
                  p={1}
                  top="0"
                  left="0"
                  zIndex={2}
                  boxShadow="inner"
                  position="absolute"
                  w={['120px', '120px', '120px', '160px', '160px']}
                  h={['120px', '120px', '120px', '160px', '160px']}
                >
                  <Box
                    p={2}
                    w={'100%'}
                    h={'100%'}
                    color={'#fff'}
                    rounded={'2xl'}
                    backgroundColor={'#009A4F'}
                  >
                    <Box
                      p={2}
                      w={'100%'}
                      h={'100%'}
                      display="flex"
                      rounded={'2xl'}
                      alignItems="center"
                      flexDirection="column"
                      justifyContent="center"
                    >
                      <PiPlant size={'60px'} />
                      <Text fontSize={'15px'}>
                        1,000 new direct job opportunities
                      </Text>
                    </Box>
                  </Box>
                </Box>
                <Box
                  p={1}
                  zIndex={1}
                  rounded="full"
                  boxShadow="md"
                  w={['300px', '400px', '400px', '400px', '400px']}
                  h={['300px', '400px', '400px', '400px', '400px']}
                >
                  <Image src="/about/about-img-1.png" w="100%" h="100%" />
                </Box>
                <Box
                  p={1}
                  right="0"
                  bottom="0"
                  zIndex={1}
                  position="absolute"
                  w={['100px', '120px', '120px', '160px', '160px']}
                  h={['100px', '120px', '120px', '160px', '160px']}
                >
                  <Image src="/about/about-img-2.png" w="100%" h="100%" />
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Container>
      </Box>
      <PopUp open={openPopup} onClose={() => setOpenPopup(false)} />
    </>
  );
};

export default AboutUs;
