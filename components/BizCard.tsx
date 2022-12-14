import {
  Heading,
  useBreakpointValue,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';

interface BizCardProps {
  funFunction: () => void;
}

export default function BizCard({ funFunction }: BizCardProps) {
  return (
    <Center py={6} zIndex={99}>
      <Box
        maxW={'380px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        <Text fontSize={{base: '4xl', md: '6xl'}}>🤹🏼</Text>
        <Heading fontSize={{base: 'xl', md:'3xl'}} fontWeight='black'>
          Assorted Technologies Inc.
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
          oo<Text as='span' fontSize='sm'>oo</Text><Text as='span' fontSize='xs'>oo</Text><Text as='span' fontSize='2xs'>n</Text><Text as='span' fontSize='3xs'>nn</Text> your side
        </Text>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}>
          We grow traffic with content and streamline businesses operations with AI.</Text>

        <Box mt={6}>
          <Text fontWeight={500} color='gray.800' mb={2}>Specialties:</Text>
          <Stack align={'center'} justify={'center'} wrap='wrap'>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('blue.50', 'blue.800')}
              color={'blue.800'}
              fontWeight={'500'}>
              AI Powered Workflows
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('blue.50', 'blue.800')}
              color={'blue.800'}
              fontWeight={'500'}>
              Content and SEO
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('blue.50', 'blue.800')}
              color={'blue.800'}
              fontWeight={'500'}>
              Product Development
            </Badge>
          </Stack>

          <Stack mt={8} direction={'row'} spacing={4}>
            {/* <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            _focus={{
              bg: 'gray.200',
            }}
            onClick={funFunction}
          >
            More Balls
          </Button> */}
            <Button
              as='a'
              href={useBreakpointValue({base: 'sms:+14152739479&body=Hello, I\'m looking for help with...', md: 'mailto:hello@assortedtech.ca?subject=Work inquiry&body=Hello,'})} target='_blank' textDecoration='none'
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'gray.800'}
              color={'white'}
              boxShadow={
                'xl'
              }
              _hover={{
                bg: 'gray.600',
              }}
              _focus={{
                bg: 'gray.500',
              }}
            >
              {useBreakpointValue({base:'Text Us', md: 'Email Us'})}
            </Button>
          </Stack>
        </Box>
      </Box>
    </Center>
  );
}