import React, { useState } from 'react';
import { Image } from '@chakra-ui/image';
import {
  Button,
  Collapse,
  Link,
  List,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  useDisclosure
} from '@chakra-ui/react';
import { MdOutlineMenu, MdClose } from 'react-icons/md';
import { Box, Container, Flex, Spacer, Text } from '@chakra-ui/layout';
import { ChevronDownIcon } from '@chakra-ui/icons';

const navPage = [
  { name: 'Home', link: '#home' },
  { name: 'About Us', link: '#about-us' },
  { name: 'Our Projects', link: '#our-projects' },
  { name: 'Our Sectors', link: '#our-sector' },
  { name: 'Contact Us', link: '#contact-us' },
  { name: 'Media', link: '#media' }
];

const Navbar = () => {
  const [show, setShow] = useState(false);

  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Box as="nav" bg="white" maxW="100vw" backgroundColor="#009A4F" p="16px">
        <Container maxW={'90vw'} color="#FFF">
          <Flex alignItems={'center'}>
            <Image
              src="/navbar/nav-logo.png"
              name="nav logo"
              alt="nav logo"
              width={['100px', '150px', '150px', '150px', '160px']}
            />
            <Spacer />
            {navPage.map((page) => (
              <Box
                key={page.name}
                display={['none', 'none', 'none', 'block', 'block']}
              >
                <Text fontSize={'xl'} fontWeight={'medium'} p={'10px'}>
                  <a
                    href={page.link}
                    onClick={() => scrollToSection(page.link)}
                  >
                    {page.name}
                  </a>
                </Text>
              </Box>
            ))}
          </Flex>
        </Container>
      </Box>
    </>
  );
};

const MobileNav = () => {
  return <Box>Test</Box>;
};

export default Navbar;
