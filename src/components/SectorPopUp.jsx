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
import { color } from 'framer-motion';
import React from 'react';

const SectorPopUp = ({ open, onClose, sector, id }) => {
  if (!open) return null;
  return (
    <Flex
      top={'0'}
      left={'0'}
      right={'0'}
      bottom={'0'}
      width={'100%'}
      as={'section'}
      height={'100%'}
      justifyContent={'center'}
      position={['absolute','absolute','absolute','fixed','fixed']}
      background={'rgba(0,0,0, 0.5)'}
      zIndex={10}
    >
      <Box
        id={id}
        position={'absolute'}
        top={['60%','60%','60%','0','0']}
        bg={'#FFF'}
        mt={'75px'}
        pb={'75px'}
        h={'max-content'}
        borderRadius={'20px'}
        w={['95%','90%','85%','85%','85%']}
      >
        <Flex justifyContent={'flex-end'}>
          <Image
            w={'30px'}
            h={'30px'}
            mt={'18px'}
            mr={'18px'}
            cursor={'pointer'}
            src={'popup/icon-close-black.svg'}
            onClick={() => onClose()}
          />
        </Flex>
        <Box mx={'53px'} h={'100%'}>
          <Heading
            size={'md'}
            color={'#009A4F'}
            fontSize={'50px'}
            fontWeight={'400'}
            textAlign={['center','center','center','start','start']}
          >
            {sector.name.toUpperCase()}
          </Heading>
          <Flex 
            gap={8} 
            mt={'20px'} 
            overflow={'auto'} 
            flexDirection={['column','column','column','row','row']}
            alignItems={['center','center','center','flex-start','flex-start']}
          >
            <Image
              maxW={'423px'}
              h={'257px'}
              maxH={'257px'}
              float={'right'}
              src={sector.img}
              borderRadius={'10px'}
              order={['initial','initial','initial', 1, 1]}
            ></Image>
            <Box w={'100%'} color={'#024731'}>
              <Text
                textAlign={'justify'}
                fontSize={'18px'}
                fontWeight={'400'}
              >
                1 Lorem ipsum dolor sit amet consectetur. Blandit dolor sit
                varius aliquam purus eu ac dictum ut. Diam nulla amet sit
                nulla sed lectus vestibulum. Fringilla sit rhoncus egestas
                libero ultrices in blandit. Lectus donec sed donec ut id. Id
                aliquam sed ultricies sollicitudin curabitur. Aliquam
                suspendisse dignissim viverra viverra at vestibulum neque.
                Aliquet pharetra quis eu pulvinar sapien bibendum quam. Lorem
                ridiculus arcu nisi molestie nunc sed. Vitae nunc risus
                malesuada sed diam congue pretium vel.
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default SectorPopUp;
