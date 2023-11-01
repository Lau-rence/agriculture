import { Box, Container, Heading } from '@chakra-ui/layout';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon
} from '@chakra-ui/react';
import React from 'react';
import { BiSolidCaretDownCircle } from 'react-icons/bi';

const accordionList = [
  {
    name: 'agri philippines',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ducimus officia vero ipsum harum? Fugit ducimus cumque eligendi veritatis sint.'
  },
  {
    name: 'green woods valley-agri',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ducimus officia vero ipsum harum? Fugit ducimus cumque eligendi veritatis sint.'
  },
  {
    name: 'agri business (AB)',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ducimus officia vero ipsum harum? Fugit ducimus cumque eligendi veritatis sint.'
  },
  {
    name: 'wheat company',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ducimus officia vero ipsum harum? Fugit ducimus cumque eligendi veritatis sint.'
  },
  {
    name: 'green life company',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ducimus officia vero ipsum harum? Fugit ducimus cumque eligendi veritatis sint.'
  },
  {
    name: 'agri philippines center',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ducimus officia vero ipsum harum? Fugit ducimus cumque eligendi veritatis sint.'
  },
  {
    name: 'green woods valley-agri center',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ducimus officia vero ipsum harum? Fugit ducimus cumque eligendi veritatis sint.'
  },
  {
    name: 'agri business center(ABC)',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ducimus officia vero ipsum harum? Fugit ducimus cumque eligendi veritatis sint.'
  },
  {
    name: 'wheat company center',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ducimus officia vero ipsum harum? Fugit ducimus cumque eligendi veritatis sint.'
  },
  {
    name: 'green life company center',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ducimus officia vero ipsum harum? Fugit ducimus cumque eligendi veritatis sint.'
  },
  {
    name: 'agri',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ducimus officia vero ipsum harum? Fugit ducimus cumque eligendi veritatis sint.'
  },
  {
    name: 'green woods valley',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ducimus officia vero ipsum harum? Fugit ducimus cumque eligendi veritatis sint.'
  },
  {
    name: 'agri business (ab)',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ducimus officia vero ipsum harum? Fugit ducimus cumque eligendi veritatis sint.'
  }
];

const AccordionList = () => {
  return (
    <>
      <Box as="section" minH={'100vh'} marginTop={'60px'} id="accordion-list">
        <Box
          w="100%"
          h="100%"
          p={'200px 16px'}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundAttachment={'fixed'}
          backgroundColor="rgba(0, 0, 0, 0.37);"
          backgroundImage="linear-gradient(rgba(0, 154, 79, .7),  rgba(0, 154, 79, .7) 100%), url('accordion/accordion-bg.jpg')"
        >
          <Container maxW={'90vw'}>
            <Accordion rounded={'xl'} allowToggle>
              {accordionList.map((content, index) => (
                <AccordionItem
                  key={index}
                  bg={'#fff'}
                  rounded={'xl'}
                  marginBottom={'5px'}
                >
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <Heading
                          color="#024731"
                          fontSize={['24px', '24px', '30px', '30px', '30px']}
                        >
                          {content.name}
                        </Heading>
                      </Box>

                      <BiSolidCaretDownCircle size={'30px'} color="#93CE20" />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} color="#024731">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default AccordionList;
