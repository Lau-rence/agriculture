import { Box, Container, Flex, Heading, Spacer, Text } from '@chakra-ui/layout';
import React from 'react';
import { RiMailSendLine } from 'react-icons/ri';
import { BiPhoneCall } from 'react-icons/bi';
import { MdOutlineLocationOn } from 'react-icons/md';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import { FaFacebookSquare, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

import '@fontsource/reem-kufi';

const labelAndIcon = [
  {
    name: 'rencesantos14@gmail.com',
    icon: <RiMailSendLine />,
    link: 'rencesantos14@gmail.com',
    type: 'email'
  },
  {
    name: '(+63) 947 6032 653',
    icon: <BiPhoneCall />,
    link: '+639476032653',
    type: 'phone'
  },
  {
    name: 'Bulacan, Philippines',
    icon: <MdOutlineLocationOn />,
    link: 'https://www.google.com/maps/place/Bulakan,+Bulacan/@14.7650961,120.7869734,12z/data=!3m1!4b1!4m6!3m5!1s0x33964d16f1fd52fb:0x86bd978533995ead!8m2!3d14.7942735!4d120.8799008!16zL20vMDM5bndn?entry=ttu',
    type: 'map'
  },
  {
    name: 'Santa Maria, Bulacan, Philippines',
    icon: <HiOutlineBuildingOffice2 />,
    link: 'https://www.google.com/maps/place/Bulakan,+Bulacan/@14.7650961,120.7869734,12z/data=!3m1!4b1!4m6!3m5!1s0x33964d16f1fd52fb:0x86bd978533995ead!8m2!3d14.7942735!4d120.8799008!16zL20vMDM5bndn?entry=ttu',
    type: 'map'
  }
];

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

const handlelink = (data) => {
  switch (data?.type) {
    case 'email':
      window.location = `mailto:${data?.link}`;
      break;
    case 'phone':
      window.location = `tel:${data?.link}`;
      break;
    case 'map':
      window.location = `${data?.link}`;
      break;
    default:
      break;
  }
};

const TopInfo = () => {
  return (
    <>
      <Box as="section" bg="white" maxW="100vw" p="16px">
        <Container maxW={'90vw'} color="#009A4F">
          <Flex gap={'2'} fontWeight={'bold'}>
            {labelAndIcon.map((info) => (
              <Box
                key={info.name}
                display={'flex'}
                columnGap={'5px'}
                alignItems={'center'}
                marginRight={['0', '0', '0', '15px', '15px']}
              >
                <Heading onClick={() => handlelink(info)} as="h6" size="md">
                  {info.icon}
                </Heading>

                <Text
                  as="h6"
                  fontSize={'xs'}
                  display={['none', 'none', 'none', 'block', 'block']}
                >
                  {info.name}
                </Text>
              </Box>
            ))}

            <Spacer />

            {socialMediaLinks.map((info) => (
              <Box
                key={info.name}
                display={'flex'}
                columnGap={'5px'}
                cursor={'pointer'}
                alignItems={'center'}
              >
                <Heading as="h6" size="md">
                  <a href={info.link}>{info.icon}</a>
                </Heading>
              </Box>
            ))}
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default TopInfo;
