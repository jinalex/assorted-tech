import type { NextPage } from 'next'
import Head from 'next/head'
import {
  Container,
  Stack,
  chakra,
} from '@chakra-ui/react';
import BizCard from '../components/BizCard';
import { useEffect, useRef, useState } from 'react';
import { Ball } from '../components/Ball';


function getObjectFitSize(
  contains: boolean /* true = contain, false = cover */,
  containerWidth: number,
  containerHeight: number,
  width: number,
  height: number
) {
  var doRatio = width / height;
  var cRatio = containerWidth / containerHeight;
  var targetWidth = 0;
  var targetHeight = 0;
  var test = contains ? doRatio > cRatio : doRatio < cRatio;

  if (test) {
    targetWidth = containerWidth;
    targetHeight = targetWidth / doRatio;
  } else {
    targetHeight = containerHeight;
    targetWidth = targetHeight * doRatio;
  }

  return {
    width: targetWidth,
    height: targetHeight,
    x: (containerWidth - targetWidth) / 2,
    y: (containerHeight - targetHeight) / 2
  };
}

const Home: NextPage = () => {
  const ref = useRef<HTMLCanvasElement>(null)
  const [moreBalls, setMoreBalls] = useState(0);

  useEffect(() => {
    if (ref.current == null) {
      return
    }
    const canvas = ref.current;

    const dimensions = getObjectFitSize(
      true,
      canvas.clientWidth,
      canvas.clientHeight,
      canvas.width,
      canvas.height
    );

    const dpr = window.devicePixelRatio || 1;

    //Defining Width and Height
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    //Declaring Variables
    const colorArray = [
      '#E53E3E',
      '#FFE156',
      '#EA638C',
      '#3182CE',
      '#57CC99',
    ]
    let NoOfballs = (innerWidth + innerHeight) / 50,
      gravity = 0.2,
      friction = 0.85,
      x, y, dx, dy, radius, color, ballArray = [] as Ball[];

    //Adding Events Listeners to update the page
    window.addEventListener('resize', function () {
      canvas.width = innerWidth;
      canvas.height = innerHeight;
      init();
    })
    //Utility funtions
    function RandomIntNumber(min: number, max: number) {
      return (Math.floor(Math.random() * (max - min + 1) + min));
    }
    function RandomColor(colors: string[]) {
      return colors[Math.floor(Math.random() * colors.length)]
    }

    //Creating using ball Object and storing them in an Array with Random value
    function init() {
      for (let i = 0; i < NoOfballs; i++) {
        radius = RandomIntNumber(10, 25);
        x = RandomIntNumber(radius, innerWidth - radius);
        y = RandomIntNumber(radius, innerHeight - radius) - innerHeight * RandomIntNumber(1, 1.5);
        dy = RandomIntNumber(-2, 2);
        dx = RandomIntNumber(-2, 2);
        color = RandomColor(colorArray);
        ballArray.push(new Ball(ctx, friction, gravity, x, y, dx, dy, radius, color, dpr));
      }
    }
    // Calling Update to move the ball 
    function animate() {
      requestAnimationFrame(animate)

      ctx.clearRect(0, 0, innerWidth, innerHeight);

      for (let i = 0; i < NoOfballs; i++) {
        ballArray[i]?.update();
      }
    }
    init();
    animate();
  }, [moreBalls])

  return (
    <>
      <Head>
        <title>Assorted Technologies</title>
        <meta name="description" content="Information technology products and services" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <chakra.canvas position='absolute' ref={ref}></chakra.canvas>
      <Container maxW={'7xl'}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 10, md: 28 }}
          direction='column'>
          <BizCard funFunction={() => { setMoreBalls(moreBalls + 1) }} />
        </Stack>
      </Container>
    </>
  );
}

export default Home
