// >>
// Project Name: Jakob Au's Personal Website
// Version 5.0.1
// Create by Jakob Au
// Created on 
// Name: 
// Purpose: 
// Using: https://codesandbox.io/embed/github/pmndrs/react-spring/tree/master/demo/src/sandboxes/cards-stack?codemirror=1
// <<

import React, { useState } from 'react'
import { useSprings, animated, to as interpolate } from '@react-spring/web'
import { useDrag } from 'react-use-gesture'

import styles from '../Styles/styles.module.css'
import Card1 from '../../../Media/v5_pictures/Card1.svg';
import Card2 from '../../../Media/v5_pictures/Card2.svg';
import Card3 from '../../../Media/v5_pictures/Card3.svg';
import { display } from '@mui/system';

import Box from '@mui/material/Box';

const cards = [
  Card1,
  Card2,
  Card3,
]

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i: number) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
  display: 'none',
})
const from = (_i: number) => ({ x: 0, rot: 0, scale: 1.5, y: -1000, display: 'block', })

// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r: number, s: number) =>
  `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

// Main Exported Function
function Deck() {
  const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
  const [props, api] = useSprings(cards.length, i => ({
    ...to(i),
    from: from(i),
  })) // Create a bunch of springs using the helpers above

  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2 // If you flick hard enough it should trigger the card to fly out
    const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right

    if (!down && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out

    api.start(i => {
      if (index !== i) return // We're only interested in changing spring-data for the current spring

      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
      const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
      const scale = down ? 1.1 : 1 // Active cards lift up a bit

      const display = isGone ? "none" : "block"

      return {
        x,
        rot,
        scale,
        delay: undefined,
        config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        display,
        isGone,
      }
    })

    if (!down && gone.size === cards.length)
      setTimeout(() => {
        gone.clear()
        api.start(i => to(i))
      }, 600)

  })

  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return (
    <>
    <Box sx={{ pl: {xs:0,sm:0,md:15,lg:20}, pr: {xs:30,sm:30,md:0,lg:0}, pt: {xs:6,sm:5,md:22,lg:13} }}>
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div className={styles.deck} key={i} style={{ x, y, }} >
          {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
          <animated.div
            {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans),
              backgroundImage: `url(${cards[i]})`,
            }}
          />
        </animated.div>
      ))}
      </Box>
    </>
  )
}

export default function App() {
  return (
    <div className={styles.container}>
      <Deck />
    </div>
  )
}
