// import { useState, useEffect } from 'react'
import { useAtom } from 'jotai'
import { accountAtom, buttonTextAtom } from '../Atoms'
import GetStartedCard from '../components/GetStartedCard'
import { Box, PageWrapper, Button } from '../components/common'
import { AnimatePresence } from 'framer-motion'
import TokenForm from '../components/TokenForm'
import { requestAccount } from '../helpers/requestAccount'

const HomePage = () => {
  const [account, setAccount] = useAtom(accountAtom)
  const [buttonText, setButtonText] = useAtom(buttonTextAtom)
  const onClick = async () => {
    const account = await requestAccount()
    setAccount(account[0])
    setButtonText(
      `${account[0].substring(0, 6)}...${account[0].substring(
        account[0].length - 4
      )}`
    )
  }

  return (
    <PageWrapper>
      <AnimatePresence>
        <Box margin='0 0 2rem 0' hiddenOnDesktop>
          <Button text={buttonText} withIcon onClick={onClick} />
        </Box>
        {!account ? <GetStartedCard key='card' /> : <TokenForm key='form' />}
      </AnimatePresence>
    </PageWrapper>
  )
}

export default HomePage
