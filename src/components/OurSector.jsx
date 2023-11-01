import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text
} from '@chakra-ui/layout';
import { useEffect, useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  ButtonGroup,
  Image
} from '@chakra-ui/react';
import PopUp from './SectorPopUp';

const sectorCards = [
  {
    img: 'https://static.vecteezy.com/system/resources/previews/000/622/931/original/agriculture-business-logo-template-unique-green-vector-image.jpg',
    name: 'agri',
    desc: '',
    link: '#'
  },
  {
    img: 'https://thumbs.dreamstime.com/b/farm-garden-logo-vector-icon-template-155985935.jpg',
    name: 'green woods valley-agri',
    desc: '',
    link: '#'
  },
  {
    img: 'https://static.vecteezy.com/system/resources/previews/000/623/682/non_2x/agriculture-business-logo-template-unique-green-vector-image.jpg',
    name: 'agri business (AB)',
    desc: '',
    link: '#'
  },
  {
    img: 'https://static.vecteezy.com/system/resources/previews/000/623/801/original/agriculture-business-logo-template-unique-green-vector-image.jpg',
    name: 'wheat company',
    desc: '',
    link: '#'
  },
  {
    img: 'https://static.vecteezy.com/system/resources/previews/000/623/541/original/agriculture-business-logo-template-unique-green-vector-image.jpg',
    name: 'green life company',
    desc: '',
    link: '#'
  },{
    img: 'https://static.vecteezy.com/system/resources/previews/000/622/931/original/agriculture-business-logo-template-unique-green-vector-image.jpg',
    name: 'agri',
    desc: '',
    link: '#'
  },
  {
    img: 'https://thumbs.dreamstime.com/b/farm-garden-logo-vector-icon-template-155985935.jpg',
    name: 'green woods valley-agri',
    desc: '',
    link: '#'
  },
  {
    img: 'https://static.vecteezy.com/system/resources/previews/000/623/682/non_2x/agriculture-business-logo-template-unique-green-vector-image.jpg',
    name: 'agri business (AB)',
    desc: '',
    link: '#'
  },
  {
    img: 'https://static.vecteezy.com/system/resources/previews/000/623/801/original/agriculture-business-logo-template-unique-green-vector-image.jpg',
    name: 'wheat company',
    desc: '',
    link: '#'
  },
  {
    img: 'https://static.vecteezy.com/system/resources/previews/000/623/541/original/agriculture-business-logo-template-unique-green-vector-image.jpg',
    name: 'green life company',
    desc: '',
    link: '#'
  },
];

const OurSector = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [sector, setSector] = useState({});

  useEffect(()=>{
    if(openPopup){
      scrollToSection('#sectorpopup')
    }
  })
  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <Box
        // p="16px"
        as="section"
        id="our-sector"
        // margin={'50px 0'}
      >
        <Container maxW={'90vw'}>
          <Heading
            as={'h4'}
            margin={'30px 0px 5px'}
            fontSize={['70px', '70px', '70px', '70px', '40px']}
            textAlign={['center', 'center', 'center', 'center', 'left']}
            color={['#009A4F', '#009A4F', '#009A4F', '#009A4F', '#024731']}
          >
            Our Sector
          </Heading>
          <Box
            h={'7px'}
            w={'70px'}
            bg={'green'}
            marginTop={'5px'}
            bgColor={'#93CE20'}
            marginBottom={'50px'}
            display={['none', 'none', 'none', 'none', 'block']}
          />

          <Grid
            templateColumns={[
              'repeat(1, 1fr)',
              'repeat(2, 1fr)',
              'repeat(2, 1fr)',
              'repeat(3, 1fr)',
              'repeat(5, 1fr)'
            ]}
            gap={[2, 2, 2, 4, 4]}
            position={'relative'}
            justifyItems={'center'}
          >
            {sectorCards.map((content, i) => (
              <GridItem key={i}>
                <Card
                  w={['230px', '200px', '230px', '230px', '230px']}
                  h={['350px', '350px', '350px', '360px', '360px']}
                  mb={4}
                >
                  <Image
                    src={content.img}
                    alt={content.name}
                    borderRadius="2xl"
                  />
                  <CardBody>
                    <Stack mt="1" spacing="1">
                      <Heading size="md">{content.name.toUpperCase()}</Heading>
                      <Text>{content.desc}</Text>
                    </Stack>

                    <Box
                      w={'full'}
                      left={'0'}
                      right={'0'}
                      display={'flex'}
                      marginTop={'16px'}
                      position={'absolute'}
                      alignContent={'center'}
                      justifyContent={'center'}
                      bottom={['5', '5', '5', '5', '5']}
                    >
                      <Button
                        w={'150px'}
                        color={'#fff'}
                        rounded={'3xl'}
                        variant="solid"
                        marginTop={'10px'}
                        colorScheme={"#024731"}
                        backgroundColor={"#024731"}
                        onClick={() => {
                          setOpenPopup(true);
                          setSector(content);
                        }}
                      >
                          <Text fontSize={'13px'}> Read More </Text>
                      </Button>
                    </Box>
                  </CardBody>
                </Card>
              </GridItem>
            ))}
          </Grid>
        </Container>
      </Box>
      <PopUp
        open={openPopup}
        onClose={() => setOpenPopup(false)}
        sector={sector}
        id="sectorpopup"
        />
    </>
  );
};

export default OurSector;
