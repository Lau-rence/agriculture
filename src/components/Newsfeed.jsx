import {
  Box,
  Heading,
  Flex,
  Grid,
  GridItem,
  HStack,
  VStack,
  AspectRatio
} from '@chakra-ui/react';
import React from 'react';

const Newsfeed = () => {
  return (
    <Box as="section" display={'flex'} justifyContent={'center'} mb={'280px'}>
      <Flex
        width={'88%'}
        h={'maxContent'}
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
            NEWSFEED
          </Heading>
          <Box bg={'#93CE20'} h={'8px'} w={'86px'} display={['none','none','block','block','block']}/>
        </Box>
        <Flex width={'100%'} flexDirection={['column','column','row','row','row']} gap={[4,4,5,8,8]}>
            <Flex width={['100%','100%','70%','70%','70%']} height={['271.714px','350px','100%','100%','100%']}>
              <iframe
                width="100%"
                src="https://www.youtube.com/embed/vXVSw7wTsso"
                title="YouTube video player"
                style={{
                  borderRadius: '14.436px',
                  boxShadow:
                    '0px 3.4345476627349854px 7.230626583099365px 0px rgba(0, 0, 0, 0.04), 0px 27.429088592529297px 57.745452880859375px 0px rgba(0, 0, 0, 0.07)'
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </Flex>
            <Flex 
              flexDirection={['row','row','column','column','column']} 
              width={['100%','100%','30%','30%','30%']} 
              gap={[4,4,5,'19.7525px','19.7525px']}
              height={['75.756px','150px','100%','100%','100%']}
            >
                <AspectRatio  width="100%">
                  <iframe
                    src="https://www.youtube.com/embed/cH1Q868APLg"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    style={{
                      borderRadius: '14.436px',
                      boxShadow:
                        '0px 3.4345476627349854px 7.230626583099365px 0px rgba(0, 0, 0, 0.04), 0px 27.429088592529297px 57.745452880859375px 0px rgba(0, 0, 0, 0.07)'
                    }}
                  ></iframe>
                </AspectRatio>
                <AspectRatio  width="100%">
                <iframe
                  src="https://www.youtube.com/embed/hC4lemk_YqE"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{
                    borderRadius: '14.436px',
                    boxShadow:
                      '0px 3.4345476627349854px 7.230626583099365px 0px rgba(0, 0, 0, 0.04), 0px 27.429088592529297px 57.745452880859375px 0px rgba(0, 0, 0, 0.07)'
                  }}
                ></iframe>
                </AspectRatio>
                <AspectRatio  width="100%" display={['none','none','block','block','block',]}>
                  <iframe
                    src="https://www.youtube.com/embed/qKoJCT-EPCg"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    style={{
                      borderRadius: '14.436px',
                      boxShadow:
                        '0px 3.4345476627349854px 7.230626583099365px 0px rgba(0, 0, 0, 0.04), 0px 27.429088592529297px 57.745452880859375px 0px rgba(0, 0, 0, 0.07)',
                      display: ['none','none','block','block','block']
                    }}
                  ></iframe>
                </AspectRatio>
            </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Newsfeed;
