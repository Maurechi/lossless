import RingLoader from 'react-spinners/RingLoader'
import { AnimatedBox, Text } from './common'

const Loader = () => {
  return (
    <AnimatedBox
      align='center'
      gap='2rem'
      background='#02acd1'
      padding='1rem 4rem'
      radius='35px'
      position='absolute'
      initial={{ top: '-16rem', opacity: 0 }}
      animate={{ top: '-8rem', opacity: 1 }}
      exit={{ top: '-16rem', opacity: 0 }}
      transition={{
        type: 'spring',
        damping: 15,
        stiffness: 120,
        duration: 250,
      }}
    >
      <RingLoader color='white' size={50} />
      <Text color='white' size='1.6rem'>
        Transferring Amount
      </Text>
    </AnimatedBox>
  )
}

export default Loader
