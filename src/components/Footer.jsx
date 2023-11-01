// Packages
import {
  Box,
  Flex,
  Image,
  Heading,
  Container,
  VStack,
  Text
} from '@chakra-ui/react';
import React from 'react';
import { SiGmail } from 'react-icons/si';
import { FaFacebookSquare, FaLinkedin, FaYoutube } from 'react-icons/fa';

const socialMediaLinks = [
  {
    icon: <FaLinkedin />,
    name: 'Linked in',
    link: '#'
  },
  {
    icon: <FaFacebookSquare />,
    name: 'Facebook',
    link: '#'
  },
  {
    icon: <FaYoutube />,
    name: 'Youtube',
    link: '#'
  },
  {
    icon: <SiGmail />,
    name: 'Email',
    link: '#'
  }
];

const siteMap = [
  {name: 'About us', link: '#about-us' },
  {name: 'Our Projects', link: '#our-projects'},
  {name: 'Our Vision', link: '#vision'},
  {name: 'Our Sector', link: '#our-sector'},
  {name: 'Media', link: '#media'}
];

const externalLinks = ['Company Group'];

const footerTheme1 = {
  color: '#FFF',
  fontFamily: 'Readex Pro Deca',
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: 300,
  lineHeight: 'normal'
};

const footerTheme2 = {
  color: '#93CE20',
  fontFamily: 'Readex Pro Deca',
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: 300,
  lineHeight: 'normal'
};

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <Box
      id=""
      w={"100%"}
      as="section"
      pos={'relative'}
      display={'flex'}
      flexShrink={'0'}
      h={'max-content'}
      backgroundSize={'cover'}
      flexDirection={'column'}
      backgroundPosition={'right'}
      backgroundImage={[
        "linear-gradient(360deg, #024731 11.10%, rgba(2, 71, 49, 0.00) 100%), url('footer/footer-bg.jpg')",
        "linear-gradient(360deg, #024731 11.10%, rgba(2, 71, 49, 0.00) 100%), url('footer/footer-bg.jpg')",
        "linear-gradient(90deg, #024731 11.10%, rgba(2, 71, 49, 0.00) 100%), url('footer/footer-bg.jpg')",
        "linear-gradient(90deg, #024731 11.10%, rgba(2, 71, 49, 0.00) 100%), url('footer/footer-bg.jpg')",
        "linear-gradient(90deg, #024731 11.10%, rgba(2, 71, 49, 0.00) 100%), url('footer/footer-bg.jpg')",
      ]}
    >
      <Flex 
        mb={6}
        flexDir={['column','column','column','row','row']}>
      <Box
          py={50}
          px={100}
          display={'flex'}
          right={['0','0','0','0','0']}
          marginLeft={['0','0','auto','auto','auto']}
          width={['100%','100%','100%','100%','100%']}
          justifyContent={['center','center','center','end','end']}
          pos={['static','static','static','absolute','absolute',]}
        >
          <Image
            width={'250px'}
            height={'auto'}
            flexShrink={'0'}
            src="navbar/nav-logo.png"
            alt="Innovative Agri Andustry, Member of LR Group"
          ></Image>
        </Box>
        <Box 
          width={"100%"} 
          pt={[0,0,0,70,70]} 
          px={[10,10,10,30,50]}
          >
          <Flex 
            justifyContent={['center','center','center','left','left']} 
            mb={[10,10,20,20,20]}
          >
            <VStack 
              spacing={8} 
              align={['center','center','center','flex-start','flex-start']}
            >
              <Heading
                color={'#FFF'}
                fontWeight={'400'}
                textAlign={'center'}
                fontStyle={'normal'}
                lineHeight={'normal'}
                fontSize={['40px','40px','40px','40px','50px']}
              >
                AGRICULTURE INDUSTRY
              </Heading>
              <Text
                as="h6"
                size="md"
                color={'#FFF'}
                textAlign={'center'}
                fontStyle={'normal'}
                fontWeight={'light'}
                lineHeight={'normal'}
                fontFamily={'Readex Pro Deca'}
              >
                Santa Maria, Bulacan, Philippines | rencesantos14@gmail.com
              </Text>
              <Container 
                padding={0} 
                color="#FFF" 
                maxW={'90vw'} 
                display={'flex'} 
                justifyContent={['center','center','center','start','start']}
              >
                <Flex gap={'2'} fontWeight={'bold'}>
                  {socialMediaLinks.map((info) => (
                    <Box
                      key={info.name}
                      display={'flex'}
                      columnGap={'5px'}
                      cursor={'pointer'}
                      alignItems={'center'}
                    >
                      <Heading as="h6" fontSize={'30px'}>
                        <a>{info.icon}</a>
                      </Heading>
                    </Box>
                  ))}
                </Flex>
              </Container>
            </VStack>
          </Flex>
          <Flex 
            justifyContent={['center','center','center','flex-start','flex-start']}
          >
            <VStack 
              spacing={[12,12,8,8,8]} 
              align={['center','center','center','flex-start','flex-start']}
            >
              <Flex 
                gap={[10,10,5,5,5]} 
                flexDirection={['column','column','row','row','row']}
              >
                <Text 
                  sx={footerTheme1} 
                  textAlign={'center'}
                >
                  Site Map
                </Text>
                {siteMap.map((info, index) => (
                  <Text 
                    key={index} 
                    sx={footerTheme2} 
                    textAlign={'center'}
                  >
                    <a
                    href={info.link}
                    onClick={() => scrollToSection(info.link)}
                    >
                      {info.name}
                    </a>
                  </Text>
                ))}
              </Flex>
              <Flex 
                gap={[10,10,5,5,5]} 
                flexDirection={['column','column','row','row','row']}
              >
                <Text 
                  sx={footerTheme1} 
                  textAlign={'center'}
                >
                  External Links
                </Text>
                {externalLinks.map((info, i) => (
                  <Text 
                    key={i} 
                    sx={footerTheme2} 
                    textAlign={'center'}
                  >
                    {info}
                  </Text>
                ))}
              </Flex>
            </VStack>
          </Flex>
        </Box>
      </Flex>

      <Text
        my={8}
        color={'#FFF'}
        fontSize={'12px'}
        fontWeight={'400'}
        textAlign={'center'}
        fontStyle={'normal'}
        lineHeight={'normal'}
        fontFamily={'Readex Pro Deca'}
      >
        ©2023 Agriculture Industry. All Rights Reserved
      </Text>
    </Box>
  );
};

export default Footer;
