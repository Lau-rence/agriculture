import { Box, Container, Flex, Heading, Text } from '@chakra-ui/layout';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Avatar,
  Card
} from '@chakra-ui/react';
import { BiSolidCaretDownCircle } from 'react-icons/bi';

const localProjects = [
  {
    logo: 'https://static.vecteezy.com/system/resources/previews/000/622/931/original/agriculture-business-logo-template-unique-green-vector-image.jpg',
    name: 'agri',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam distinctio exercitationem nisi, corporis, hic blanditiis voluptate fuga sit assumenda ex saepe, debitis dignissimos eligendi non.'
  }
];

const intlProjects = [
  {
    logo: 'https://thumbs.dreamstime.com/b/farm-garden-logo-vector-icon-template-155985935.jpg',
    name: 'green woods valley-agri',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam distinctio exercitationem nisi, corporis, hic blanditiis voluptate fuga sit assumenda ex saepe, debitis dignissimos eligendi non.'
  },
  {
    logo: 'https://static.vecteezy.com/system/resources/previews/000/623/682/non_2x/agriculture-business-logo-template-unique-green-vector-image.jpg',
    name: 'agri business (AB)',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam distinctio exercitationem nisi, corporis, hic blanditiis voluptate fuga sit assumenda ex saepe, debitis dignissimos eligendi non.'
  },
  {
    logo: 'https://static.vecteezy.com/system/resources/previews/000/623/801/original/agriculture-business-logo-template-unique-green-vector-image.jpg',
    name: 'wheat company',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam distinctio exercitationem nisi, corporis, hic blanditiis voluptate fuga sit assumenda ex saepe, debitis dignissimos eligendi non.'
  },
  {
    logo: 'https://static.vecteezy.com/system/resources/previews/000/623/541/original/agriculture-business-logo-template-unique-green-vector-image.jpg',
    name: 'green life company',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam distinctio exercitationem nisi, corporis, hic blanditiis voluptate fuga sit assumenda ex saepe, debitis dignissimos eligendi non.'
  }
];

const OurProjects = () => {
  return (
    <>
      <Box
        p="16px"
        bg="white"
        as="section"
        id="our-projects"
        marginTop={'60px'}
        backgroundColor="#fff"
      >
        <Container maxW={'90vw'}>
          <Heading
            fontSize={'70px'}
            textAlign={'center'}
            textColor={'#009A4F'}
            display={['block', 'block', 'block', 'none', 'none']}
          >
            Our Projects
          </Heading>
          <Flex
            gap={'50px'}
            alignItems={'flex-start'}
            justifyContent={'space-around'}
            direction={['column', 'column', 'column', 'row', 'row']}
          >
            <Box
              flex={1}
              alignItems={'center'}
              justifyContent={'center'}
              w={'full'}
            >
              <Heading
                fontSize={'3xl'}
                textColor={'#009A4F'}
                display={['none', 'none', 'none', 'block', 'block']}
              >
                Our Projects
              </Heading>
              <Heading
                as="h3"
                fontSize={'45px'}
                margin={'10px 0 20px'}
                textAlign={['center', 'center', 'center', 'left', 'left']}
              >
                Local
              </Heading>

              <Card>
                <Accordion
                  marginTop={'30px'}
                  allowToggle="false"
                  position={'relative'}
                >
                  {localProjects.map((project, index) => (
                    <AccordionItem key={index} p={'16px'}>
                      <Box
                        w="43px"
                        h="51px"
                        zIndex={2}
                        position={'absolute'}
                        backgroundColor="#009A4F"
                        borderRadius="16px 0 16px 0"
                      >
                        <Heading
                          color="#fff"
                          fontSize={'42px'}
                          textAlign="center"
                        >
                          {index + 1}
                        </Heading>
                      </Box>
                      <AccordionButton>
                        <Flex
                          flex="1"
                          as="span"
                          gap={'16px'}
                          textAlign="left"
                          alignItems={'center'}
                          padding={'20px 0 0 30px'}
                        >
                          <Avatar
                            h="70px"
                            w={'70px'}
                            src={project.logo}
                            name={project.name}
                          />
                          <Heading
                            as={'h5'}
                            fontSize={['20px', '20px', '30px', '30px', '30px']}
                          >
                            {project.name}
                          </Heading>
                        </Flex>
                        <BiSolidCaretDownCircle size={'30px'} color="#93CE20" />
                      </AccordionButton>

                      <AccordionPanel pb={4}>
                        <Text color="#024731">{project.content}</Text>
                      </AccordionPanel>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Card>
            </Box>

            <Box
              flex={1}
              alignItems={'center'}
              justifyContent={'center'}
              w={'full'}
            >
              <Heading
                fontSize={'3xl'}
                textColor={'#009A4F'}
                display={['none', 'none', 'none', 'block', 'block']}
              >
                Our Projects
              </Heading>
              <Heading
                as="h3"
                fontSize={'45px'}
                margin={'10px 0 20px'}
                textAlign={['center', 'center', 'center', 'left', 'left']}
              >
                International
              </Heading>

              <Card>
                <Accordion
                  allowToggle="false"
                  marginTop={'30px'}
                  position={'relative'}
                >
                  {intlProjects.map((project, index) => (
                    <AccordionItem key={index} p={'16px'}>
                      <Box
                        w="43px"
                        h="51px"
                        zIndex={2}
                        position={'absolute'}
                        backgroundColor="#009A4F"
                        borderRadius="16px 0 16px 0"
                      >
                        <Heading
                          color="#fff"
                          fontSize={'42px'}
                          textAlign="center"
                        >
                          {index + 1}
                        </Heading>
                      </Box>
                      <AccordionButton>
                        <Flex
                          flex="1"
                          as="span"
                          gap={'16px'}
                          textAlign="left"
                          alignItems={'center'}
                          padding={'20px 0 0 30px'}
                        >
                          <Avatar
                            w="70px"
                            h="70px"
                            src={project.logo}
                            name={project.name}
                          />
                          <Heading
                            as={'h5'}
                            fontSize={['20px', '20px', '30px', '30px', '30px']}
                          >
                            {project.name}
                          </Heading>
                        </Flex>
                        <BiSolidCaretDownCircle size={'30px'} color="#93CE20" />
                      </AccordionButton>

                      <AccordionPanel pb={4}>
                        <Text color="#024731">{project.content}</Text>
                      </AccordionPanel>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Card>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default OurProjects;
