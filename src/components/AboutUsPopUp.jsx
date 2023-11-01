import React from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Spacer,
  Image,
  Text,
  VStack,
  HStack
} from '@chakra-ui/react';

const info = [
  {
    name: 'Crop Diversification',
    description:
      'Crop diversification is a strategy aimed at reducing risk and enhancing sustainability by growing a variety of crops on a single farm.'
  },
  {
    name: 'Sustainable Agriculture',
    description:
      'Sustainable agriculture focuses on environmentally friendly and economically viable farming practices.'
  },
  {
    name: 'Precision Agriculture',
    description:
      'Precision agriculture uses technology, data, and analytics to optimize farming practices.'
  },
  {
    name: 'Value-Added Agriculture',
    description:
      'Value-added agriculture involves processing and marketing agricultural products to create higher-value products.'
  },
  {
    name: 'Agroforestry',
    description:
      'Agroforestry is a land-use strategy that combines agricultural crops or livestock with trees or shrubs in the same field.'
  }
];

const AboutUsPopUp = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <Flex
      top={'0'}
      id="popup"
      left={'0'}
      right={'0'}
      bottom={'0'}
      width={'100%'}
      as={'section'}
      height={'100%'}
      position={'absolute'}
      zIndex={10}
      justifyContent={'center'}
      background={'rgba(0,0,0, 0.5)'}
    >
      <Box
        bg={'#FFF'}
        w={['95%','90%','85%','85%','85%']}
        mt={'120px'}
        h={'fit-content'}
        borderRadius={'20px'}
      >
        <Box
          h={['150px','200px','250px','300px','300px']}
          w={'100%'}
          display={'flex'}
          backgroundSize={'cover'}
          justifyContent={'flex-end'}
          borderTopLeftRadius={'20px'}
          backgroundPosition={'center'}
          borderTopRightRadius={'20px'}
          backgroundRepeat={'no-repeat'}
          bgImage={"url('popup/popup-img-1.png')"}
        >
          <Image
            h={'30px'}
            w={'30px'}
            m={'30px'}
            cursor={'pointer'}
            src={'popup/icon-close.svg'}
            onClick={() => onClose()}
          ></Image>
        </Box>
        <Box my={10} display={'flex'} justifyContent={'center'}>
          <Heading
            color={'#009A4F'}
            fontSize={'50px'}
            fontWeight={'400'}
            fontStyle={'normal'}
            lineHeight={'normal'}
          >
            AGRICULTURE
          </Heading>
        </Box>
        <Flex justifyContent={'center'}>
          <Box
            px={[10,10,10,20,20]}
            py={10}
            h={'max-content'}
            w={'90%'}
            display={'flex'}
            background={'#FFF'}
            borderRadius={'20px'}
            alignItems={'center'}
            justifyContent={'center'}
            border={'3px solid #009A4F'}
            flexDirection={'column'}
          >
              <Text
                color={'#000'}
                fontSize={'20px'}
                fontWeight={'400'}
                textAlign={'center'}
                fontStyle={'normal'}
                lineHeight={'normal'}
                fontFamily={'Be Vietnam Pro'}
              >
                “The ultimate goal of farming is not the growing of crops, but the cultivation and perfection of human beings.“
              </Text>
              <Text
                mt={5}
                color={'#000'}
                fontSize={'15px'}
                fontWeight={'400'}
                fontStyle={'normal'}
                textAlign={'center'}
                lineHeight={'normal'}
                fontFamily={'Be Vietnam Pro'}
              >
                Masanobu Fukuoka
              </Text>
          </Box>
        </Flex>
        <Box 
          px={['30px','30px','30px','50px','50px']} 
          pt={'40px'} 
          display={'flex'} 
          overflow={'auto'} 
          flexDirection={'column'}
          w={'100%'}
          gap={3}
        >
          <Box 
            gap={3}
            display={'flex'} 
            alignItems={'center'}
            flexDir={['column','column','column','row','row']} 
          >
          <Image
            maxW={['355px','355px','423px','423px','423px']}
            ml={'10px'}
            h={'auto'}
            float={'right'}
            order={['initial','initial','initial',1,1]}
            borderRadius={'10px'}
            src={'popup/popup-img-2.png'}
          ></Image>
            <Text
              float={'left'}
              fontSize={'18px'}
              color={'#024731'}
              fontWeight={'400'}
              overflow={'hidden'}
              fontStyle={'normal'}
              lineHeight={'normal'}
              textAlign={'justify'}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nullam ac ante vel tortor luctus dignissim. 
              Vestibulum sit amet justo in libero varius venenatis. 
              Quisque ac ipsum sit amet est lacinia volutpat. 
              Sed feugiat libero in nunc feugiat, nec tristique justo scelerisque. 
              Sed in odio eu purus dictum tincidunt. 
              Praesent vestibulum quam eget justo hendrerit, eget hendrerit nulla pharetra. 
              Sed convallis, velit ac fermentum tincidunt, dolor purus volutpat nisl, id luctus orci quam in urna. 
              Vivamus auctor suscipit odio, eu feugiat purus. 
              Sed vel purus a libero dapibus efficitur.
            </Text>
            </Box>
            <Text
              float={'left'}
              fontSize={'18px'}
              color={'#024731'}
              fontWeight={'400'}
              fontStyle={'normal'}
              lineHeight={'normal'}
              textAlign={'justify'}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nullam ac ante vel tortor luctus dignissim. 
              Vestibulum sit amet justo in libero varius venenatis. 
              Quisque ac ipsum sit amet est lacinia volutpat. 
              Sed feugiat libero in nunc feugiat, nec tristique justo scelerisque. 
              Sed in odio eu purus dictum tincidunt. 
              Praesent vestibulum quam eget justo hendrerit, eget hendrerit nulla pharetra. 
              Sed convallis, velit ac fermentum tincidunt, dolor purus volutpat nisl, id luctus orci quam in urna. 
              Vivamus auctor suscipit odio, eu feugiat purus. 
              Sed vel purus a libero dapibus efficitur.
            </Text>
        </Box>
        <Box
          py={[50,50,50,100,100]}
          w={'100%'}
          display={'flex'}
          fontSize={'50px'}
          color={'#009A4F'}
          fontWeight={'400'}
          fontStyle={'normal'}
          lineHeight={'normal'}
          justifyContent={'center'}
          flexDirection={['column']}
        >
            <Heading
              fontSize={'50px'}
              color={'#009A4F'}
              fontWeight={'400'}
              fontStyle={'normal'}
              lineHeight={'normal'}
              textAlign={'center'}
              px={3}
            >
              five agricultural strategies
            </Heading>
            <Flex flexWrap={'wrap'} padding={[5,5,5,10,10]} justifyContent={'center'}>
              {info.map((info) => (
                <Box
                  m={[5,5,5,10,10]}
                  w={'305px'}
                  h={'max-content'}
                  py={5}
                  bg={'#FFF'}
                  display={'flex'}
                  textAlign={'center'}
                  borderRadius={'20px'}
                  alignItems={'center'}
                  justifyContent={'center'}
                  boxShadow={
                    '0px 4.758189678192139px 10.017241477966309px 0px rgba(0, 0, 0, 0.04), 0px 38px 80px 0px rgba(0, 0, 0, 0.07)'
                  }
                >
                  <VStack>
                    <Heading
                      color={'#000'}
                      fontSize={'25px'}
                      fontWeight={'400'}
                      fontStyle={'normal'}
                      lineHeight={'normal'}
                    >
                      {info.name}
                    </Heading>
                    <Box w={'257px'} display={'flex'} flexDirection={'column'}>
                      <Text
                        color={'#000'}
                        fontSize={'12px'}
                        fontWeight={'400'}
                        fontStyle={'normal'}
                        textAlign={'center'}
                        lineHeight={'normal'}
                        fontFamily={'Readex Pro Deca'}
                      >
                        {info.description}
                      </Text>
                    </Box>
                    <Button
                      w={'158px'}
                      h={'31.268px'}
                      color={'#FFF'}
                      fontSize={'12px'}
                      fontWeight={'400'}
                      fontStyle={'normal'}
                      borderRadius={'20px'}
                      lineHeight={'normal'}
                      background={'#024731'}
                      fontFamily={'Readex Pro Deca'}
                      boxShadow={'0px 5px 6px 0px rgba(2, 71, 49, 0.15)'}
                    >
                      Read more
                    </Button>
                  </VStack>
                </Box>
              ))}
            </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default AboutUsPopUp;
