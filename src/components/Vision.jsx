import { Image } from '@chakra-ui/image';
import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text
} from '@chakra-ui/layout';
import React from 'react';
import { PiPlant } from 'react-icons/pi';

const listItems = [
  { name: 'Implement and promote sustainable farming methods to protect the environment and ensure long-term agricultural productivity.' },
  {
    name: 'Maintain high product quality and safety standards to meet consumer demands and build trust in our brand.'
  },
  {
    name: ' Expand into new markets, both domestically and internationally, to increase market share and revenue.'
  },
  {
    name: 'Embrace technology for precision agriculture, data analytics, and automation to enhance efficiency and reduce resource use.'
  },
  { name: 'Foster strong relationships with local communities, providing support, education, and resources to benefit both farmers and the region.' },
  {
    name: 'Diversify product offerings and invest in value-added processes to capture more of the value chain and increase profitability.'
  },
  {
    name: 'Commit to reducing the carbon footprint and minimizing waste while promoting biodiversity and eco-friendly land management practices.'
  }
];

const Vision = () => {
  return (
    <>
      <Box
        p="16px"
        id="vision"
        bg="white"
        as="section"
        margin={'50px 0'}
        backgroundColor="#fff"
      >
        <Container maxW={'90vw'}>
          <Heading
            as={'h4'}
            margin={'20px 0px 5px'}
            fontSize={['70px', '70px', '70px', '70px', '40px']}
            textAlign={['center', 'center', 'center', 'center', 'left']}
            color={['#009A4F', '#009A4F', '#009A4F', '#024731', '#024731']}
          >
            Our Vision
          </Heading>
          <Box
            h={'7px'}
            w={'70px'}
            bg={'green'}
            marginTop={'10px'}
            bgColor={'#93CE20'}
            marginBottom={'50px'}
            display={['none', 'none', 'none', 'block', 'block']}
          />
          <Flex
            direction={[
              'column-reverse',
              'column-reverse',
              'column-reverse',
              'row',
              'row'
            ]}
          >
            <Flex
              flex={1}
              flexDirection={'column'}
              marginTop={['120px', '120px', '120px', '0px', '0px']}
            >
              <Box lineHeight={'1.10'}>
                <Text
                  fontSize={'40px'}
                  color={'#024731'}
                  textAlign={['center', 'center', 'center', 'left', 'left']}
                >
                  Leading the Way in Sustainable Agriculture
                </Text>
                <Text
                  color={'#024731'}
                  marginTop={'10px'}
                  textAlign={['center', 'center', 'center', 'left', 'left']}
                >
                  Our vision is to lead the way in sustainable agriculture, empowering farmers and nourishing communities. We strive to be at the forefront of innovation, consistently delivering high-quality, safe, and environmentally responsible agricultural products.
                </Text>
              </Box>
              <Box>
                <Text
                  color={'#024731'}
                  margin={'15px 0'}
                  fontWeight={'semibold'}
                  fontSize={['27px', '30px', '30px', '24px', '24px']}
                  textAlign={['center', 'center', 'center', 'left', 'left']}
                >
                  What makes us Unique:
                </Text>
                <List>
                  {listItems.map((item, i) => (
                    <ListItem
                      key={i}
                      gap={'20px'}
                      display={'flex'}
                      flexWrap={'nowrap'}
                      alignItems={'center'}
                      justifyContent={[
                        'center',
                        'flex-start',
                        'flex-start',
                        'flex-start',
                        'flex-start'
                      ]}
                    >
                      <Box>
                        {/* <PiPlant min={'36px'} size={'36px'} color="#93CE20" /> */}
                        <Box width={'45px'}>
                          <Image
                            w={'100%'}
                            h={'100%'}
                            src="/healthicons_agriculture-outline.svg"
                            alt="hand with plant svg"
                          />
                        </Box>
                        {/* <Image
                          src={TrySVG}
                          alt="healthicons_agriculture-outline"
                        ></Image> */}
                      </Box>
                      <Text mb={4}>{item.name}</Text>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Flex>
            <Flex flex={1} justifyContent="center" alignItems="center">
              <Flex position="relative">
                <Box
                  p={1}
                  zIndex={2}
                  position="absolute"
                  left={['-5', '-5', '-10', '-10', '-10']}
                  bottom={['-25', '-25', '-35', '-35', '-35']}
                  w={['120px', '150px', '150px', '180px', '180px']}
                  h={['120px', '150px', '150px', '180px', '180px']}
                >
                  <Box
                    p={1}
                    w={'100%'}
                    h={'100%'}
                    zIndex={1}
                    rounded="2xl"
                    position="absolute"
                  >
                    <Image
                      w="100%"
                      h="100%"
                      rounded={'2xl'}
                      alt={'innovative agri image'}
                      src="https://images.pexels.com/photos/1562389/pexels-photo-1562389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    />
                  </Box>
                </Box>
                <Box
                  p={1}
                  zIndex={1}
                  rounded="2xl"
                  boxShadow="md"
                  w={['300px', '400px', '400px', '400px', '400px']}
                  h={['200px', '300px', '300px', '400px', '400px']}
                >
                  <Image
                    w="100%"
                    h="100%"
                    rounded="2xl"
                    objectFit={'fit'}
                    alt={'innovative agri image'}
                    src="https://images.pexels.com/photos/1084540/pexels-photo-1084540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  />
                </Box>
                <Box
                  p={1}
                  zIndex={1}
                  position="absolute"
                  right={['-5', '-5', '-10', '-10', '-10']}
                  w={['150px', '250px', '250px', '270px', '270px']}
                  h={['120px', '220px', '220px', '240px', '240px']}
                  bottom={['-75', '-75', '-100', '-100', '-100']}
                >
                  <Image
                    w="100%"
                    h="100%"
                    objectFit={'fit'}
                    alt="innovative agri image"
                    src="/about/about-img-2.png"
                  />
                </Box>
              </Flex>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Vision;
