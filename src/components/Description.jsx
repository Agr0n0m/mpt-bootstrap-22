import React from 'react'
import { motion } from "framer-motion"
import '../App.css';

const Description = () => {
  return (
    <div>    
      <div>Description</div>
      <div>
        {/*<motion.img
            width={'15%'}
            src='/img/icon.png'
            alt=''
            //Анимация
            animate={{rotate: 360}}
            transition={{
              delay:0.2,
              duration: 3,
              repeat: Infinity,
              repeatDelay: 1,
            }}
          />

          <motion.p
            initial={{
              x: -1000,
              opacity: 0,
            }}

            animate={{
              x: 500,
              opacity: 1, 
            }}

            transition={{
              delay:1,
              duration: 2,
              repeat: Infinity,
              repeatDelay: 0.5,
              type: 'tween',
            }}

          >It`s magic</motion.p>
          */}
      </div>

      <motion.div id='div1'
        initial={{
          x: -1000,
          opacity: 0,
        }}

        animate={{
          x: 0,
          opacity: 1,
        }}

        transition={{
          delay: 1,
          duration: 2,
        }}
      >Complete documentation of the Framer Motion animation library. A production-ready motion library for React.</motion.div>

      <div id='divImg'>
        <motion.div id='div2'
          initial={{
            opacity: 0,
          }}

          animate={{
            y: 0,
            opacity: 1,
          }}

          transition={{
            delay: 1,
            duration: 2,
          }}
        >
          <motion.img 
            src='/img/banner-new.jpeg'
            className='banner'
            width={350}
            initial={{
              opacity: 0.6,
            }}

            transition={{
              duration: 5,
            }}

            whileTap={{
              rotate: 360,
            }}
          ></motion.img>
        </motion.div>

        <motion.div id='div3'
          initial={{
            opacity: 0,
            scale: 0.5,
          }}

          animate={{
            scale: 1,
            opacity: 1,
          }}

          transition={{
            duration: 2,
          }}
        >
          <motion.img 
            src='/img/ball.jpg'
            className='ball'
            width={200}
            initial={{
              opacity: 0.6,
            }}

            transition={{
              duration: 5,
            }}

            whileHover={{
              scale: 2,
              transition:{
                duration: 2,
              }
            }}
          ></motion.img>
        </motion.div>

        <motion.div id='div4'
          initial={{
            opacity: 0,
            scale: 0.5,
          }}

          animate={{
            scale: 1,
            opacity: 1,
          }}

          transition={{
            duration: 2,
          }}
        >
          <motion.img 
            drag='x'
            src='/img/ball.jpg'
            className='ball'
            width={200}
            initial={{
              opacity: 0.6,
            }}

            transition={{
              duration: 5,
            }}

            whileDrag={{
              scale: 2,
            }}
          ></motion.img>
        </motion.div>

        <motion.button
          className='btn btn-primary'
          whileHover={{
            scale: 1.2,

          }}
        > Press Me

        </motion.button>
      </div>

      
        
        
    </div>

  )
}

export default Description