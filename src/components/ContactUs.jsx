//Packages
import React from 'react';
import {
  Box,
  Flex,
  Image,
  Heading,
  VStack,
  Text,
  Grid,
  GridItem,
  FormControl,
  Input,
  Textarea,
  Button
} from '@chakra-ui/react';
import { BiPhoneCall } from 'react-icons/bi';
import { RiMailSendLine } from 'react-icons/ri';
import { MdOutlineLocationOn } from 'react-icons/md';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';


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

const ContactUs = () => {

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

  return (
    <Box
      w="100%"
      as="section"
      bg="#146E41"
      display="flex"
      h="maxContent"
      id="contact-us"
      position="relative"
      flexDirection="column"
      marginTop={['530px','500px','100px','50px','50px']}
    >
      <Flex justifyContent="center">
        <Image 
        left={'0px'}
        position={'absolute'}
        src={'contactus/vegetable.png'}
        top={['-80px','-100px','-100px','-140px','-140px']}
        width={['120px','160px','250px','310px','367px']}
        >
        </Image>
        <Box
          w={["70%","70%","80%","88%","88%"]}
          px="40px"
          bg="white"
          top={["-470px","-430px","-250px","-180px","-87px"]}
          h="maxContent"
          position="absolute"
          borderRadius="30px"
          boxShadow="0px 2.767256498336792px 2.2138051986694336px 0px rgba(0, 0, 0, 0.02), 0px 6.650102138519287px 5.32008171081543px 0px rgba(0, 0, 0, 0.03), 0px 12.521552085876465px 10.017241477966309px 0px rgba(0, 0, 0, 0.04), 0px 22.3363094329834px 17.869047164916992px 0px rgba(0, 0, 0, 0.04), 0px 41.777610778808594px 33.422088623046875px 0px rgba(0, 0, 0, 0.05), 0px 100px 80px 0px rgba(0, 0, 0, 0.07);"
        >
          <Grid
            templateColumns={["repeat(1, 1fr)","repeat(1, 1fr)","repeat(2, 1fr)","repeat(4, 1fr)","repeat(4, 1fr)",]}
            w="100%"
            h="100%"
            alignItems="center"
            gap={10}
            my={10}
          >
            {labelAndIcon.map((info) => (
              <GridItem 
                key={info.name} 
                display="flex"
                color={'#024731'}
                alignItems={'center'}
              >
                <Heading 
                  as={'h6'} 
                  size={'3xl'}
                  onClick={() => handlelink(info)}
                  cursor={'pointer'}
                >
                  {info.icon}
                </Heading>
                <Text
                  as='h6'
                  color={'#024731'}
                  fontFamily={'Readex Pro Deca'}
                  fontSize={'15px'}
                  fontStyle={'normal'}
                  fontWeight={'500'}
                  lineHeight={'normal'}
                >
                  {info.name}
                </Text>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Flex>
      <Box 
        h={["120px","130px","130px","160px","160px"]}
        display="flex" 
        alignItems="end" 
        justifyContent="center"
      >
        <Heading
          color={'white'}
          fontSize={'50'}
          fontWeight={'400'}
          lineHeight={'normal'}
        >
          GET IN TOUCH
        </Heading>
      </Box>
      <Box 
        my="50px" 
        display="flex" 
        align="center"
        flexDirection="column" 
      >
        <form>
          <Flex 
            w="88%"  
            gap={['15px','15px','40px','40px','40px']} 
            justifyContent="space-between" 
            flexDirection={['column','column','column','row','row']}
            mb={['15px','15px','40px','40px','40px']} 
            >
            <FormControl>
              <Input
                w="100%"
                h={["60px","60px","79px","79px","79px"]}
                bg="#E9E9E9"
                color={'#555'}
                fontSize={['15px','15px','20px','20px','20px']}
                fontWeight={'400'}
                fontStyle={'normal'}
                lineHeight={'normal'}
                fontFamily={'Readex Pro Deca'}
                borderRadius="45.5px"
                placeholder="Your Full Name"
              />
            </FormControl>
            <FormControl>
              <Input
                w="100%"
                h={["60px","60px","79px","79px","79px"]}
                bg="#E9E9E9"
                borderRadius="45.5px"
                color={'#555'}
                fontSize={['15px','15px','20px','20px','20px']}
                fontWeight={'400'}
                fontStyle={'normal'}
                lineHeight={'normal'}
                fontFamily={'Readex Pro Deca'}
                placeholder="Your Email"
              />
            </FormControl>
          </Flex>
          <FormControl
            mb={['15px','15px','40px','40px','40px']} 
          >
            <Textarea
              w="88%"
              h="194px"
              bg="#E9E9E9"
              borderRadius="25px"
              color={'#555'}
              fontSize={['15px','15px','20px','20px','20px']}
              fontWeight={'400'}
              fontStyle={'normal'}
              lineHeight={'normal'}
              fontFamily={'Readex Pro Deca'}
              placeholder={"Write your message"}
            />
          </FormControl>
          <Button
            w="88%"
            h={["60px","60px","79px","79px","79px"]}
            type="submit"
            bgColor="#93CE20"
            fontWeight={400}
            color={'#146E41'}
            fontSize={['25px','25px','30px','30px','30px']}
            fontStyle={'normal'}
            lineHeight={'normal'}
            borderRadius="45.5px"
            fontFamily={'Readex Pro Deca'}
          >
            Send
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default ContactUs;
