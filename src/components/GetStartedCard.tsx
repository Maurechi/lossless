import { useAtom } from 'jotai'
import Metamask from '../assets/icons/Metamask'
import { accountAtom } from '../Atoms'
import { requestAccount } from '../helpers/requestAccount'
import { Button } from './common'
import { AnimatedBox } from './common/Boxes'
import Text from './common/Text'

const GetStartedCard = () => {
  const [, setAccount] = useAtom(accountAtom)
  const onClick = async () => {
    const [account] = await requestAccount()
    setAccount(account)
  }
  return (
    <AnimatedBox
      padding='7rem'
      justify='space-around'
      align='center'
      flexDirection='column'
      background='white'
      radius='8px'
      width='100%'
      initial={{ x: 3000 }}
      animate={{ x: 0, maxWidth: 'fit-content' }}
      exit={{
        x: -1000,
        position: 'absolute',
        top: `${window.innerWidth > 501 ? 'auto' : '17rem'}`,
        maxWidth: '0px',
      }}
      transition={{
        type: 'spring',
        damping: 30,
        stiffness: 300,
        duration: 300,
      }}
    >
      <Metamask />
      <Text
        size='2.5rem'
        sizeDesktop='3.2rem'
        align='center'
        maxWidth='45rem'
        margin='2.4rem 0 3.2rem 0'
      >
        Get started by connecting with Web3/Metamask!
      </Text>
      <Button onClick={onClick} text='Connect with Metamask' />
    </AnimatedBox>
  )
}

export default GetStartedCard
