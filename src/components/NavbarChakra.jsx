import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
  Container,
  Spacer
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon
} from '@chakra-ui/icons';

const navPage = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about-us' },
  { label: 'Our Projects', href: '#our-projects' },
  { label: 'Our Sectors', href: '#our-sector' },
  { label: 'Contact Us', href: '#contact-us' },
  { label: 'Media', href: '#media' }
];

const NavbarChakra = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box bg={'#009A4F'} as="nav">
      <Container maxW={['', '', '', '90vw', '90vw']}>
        <Flex
          p={'20px'}
          minH={'60px'}
          borderStyle={'solid'}
          alignItems={'center'}
          justifyContent={'space-between'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
        >
          <Flex>
            <Image
              alt="nav logo"
              name="nav logo"
              src="/navbar/nav-logo.png"
              width={['120px', '180px', '180px', '180px', '200px']}
            />
          </Flex>
          <Flex
            ml={10}
            alignItems={'center'}
            display={['none', 'none', 'none', 'none', 'flex']}
          >
            <DesktopNav />
          </Flex>

          <Flex
            ml={{ base: -2 }}
            display={['flex', 'flex', 'flex', 'flex', 'none']}
          >
            <IconButton
              colorScheme="#93CE20"
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={5} h={5} color={'white'} />
                ) : (
                  <HamburgerIcon w={9} h={9} color={'white'} />
                )
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
        </Flex>
      </Container>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.100', 'gray.200');
  const linkHoverColor = useColorModeValue('#024731', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
      {navPage.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Box
                p={2}
                as="a"
                fontSize={'xl'}
                fontWeight={500}
                color={linkColor}
                href={navItem.href ?? '#'}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor
                }}
              >
                {navItem.label}
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                p={4}
                border={0}
                minW={'sm'}
                rounded={'xl'}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Box
      p={2}
      as="a"
      href={href}
      rounded={'md'}
      role={'group'}
      display={'block'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            fontWeight={500}
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
          >
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          flex={1}
          opacity={0}
          align={'center'}
          justify={'flex-end'}
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
        >
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  );
};

const MobileNav = () => {
  return (
    <Stack p={4} bg={useColorModeValue('white', 'gray.800')}>
      {navPage.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? '#'}
        alignItems="center"
        justifyContent="space-between"
        _hover={{
          textDecoration: 'none'
        }}
      >
        <Text
          fontSize={'16px'}
          fontWeight={600}
          textAlign={'center'}
          color={useColorModeValue('#024731', 'green.200')}
        >
          {label}
        </Text>
        {children && (
          <Icon
            w={6}
            h={6}
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          align={'start'}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
        >
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

export default NavbarChakra;
