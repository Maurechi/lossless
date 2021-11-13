import { useState, useEffect, useCallback } from 'react'
import { AnimatedBox, Box, Button, Input, Text } from './common'
import LERC20Artifacts from '../artifacts/contracts/LERC20.sol/LERC20.json'
import { ethers } from 'ethers'

import { LERC20 } from '../types/LERC20'
import { accountAtom } from '../Atoms'
import { useAtom } from 'jotai'
import { requestAccount } from '../helpers/requestAccount'
import { AnimatePresence } from 'framer-motion'
import Loader from './Loader'
import Toast from './Toast'

const TokenForm = () => {
  const [account, setAccount] = useAtom(accountAtom)
  const [recipient, setRecipient] = useState<string>('')
  const [amount, setAmount] = useState<number | string>('')
  const [balance, setBalance] = useState('')
  const [name, setName] = useState<string>('')
  const [symbol, setSymbol] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [sent, setSent] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const [tokenAddress, setTokenAddress] = useState<string>('')
  const getBalance = async () => {
    if (tokenAddress === '') {
      setError('Please add ERC-20 or LERC-20 Token Address')
      return setBalance('')
    } else if (/^0x[a-fA-F0-9]{40}$/.test(tokenAddress)) {
      setError('')
      if (typeof window.ethereum !== 'undefined') {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const contract = new ethers.Contract(
          tokenAddress,
          LERC20Artifacts.abi,
          provider
        ) as LERC20
        const [account] = await requestAccount()
        const balance = await contract.balanceOf(account)
        const contractName = await contract.name()
        const contractSymbol = await contract.symbol()
        setBalance(ethers.utils.formatEther(balance))
        setName(contractName)
        setSymbol(contractSymbol)
        setAccount(account)
      }
    } else {
      setError('Please use a valid Ethereum Address')
      setBalance('')
    }
  }

  async function sendToken() {
    if (!account || !amount) return

    if (typeof window.ethereum !== 'undefined') {
      setError('')
      await requestAccount()

      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const contract = new ethers.Contract(
        tokenAddress,
        LERC20Artifacts.abi,
        signer
      ) as LERC20
      try {
        const transaction = await contract.transfer(
          recipient,
          ethers.utils.parseEther(amount.toString())
        )
        setLoading(true)
        await transaction.wait()
        setLoading(false)
        setSent(true)
        setTimeout(() => {
          setSent(false)
        }, 3000)
        resetForm()
      } catch (error: any) {
        setLoading(false)
        setError(error.message)
      }
    }
  }

  const resetForm = useCallback(() => {
    setBalance('')
    setAmount('')
    setRecipient('')
  }, [])
  const submitForm = () => {
    setBalance('')
    if (tokenAddress === '')
      return setError('Please add ERC-20 or LERC-20 Token Address')
    if (recipient === '') return setError('Please add Recipient Address')
    if (amount === '') return setError('Please add Amount')
    sendToken()
  }
  useEffect(() => {
    if (account) {
      resetForm()
    }
  }, [account, resetForm])
  return (
    <AnimatedBox
      position='relative'
      flexDirection='column'
      width='35rem'
      radius='8px'
      initial={{ x: 3000 }}
      animate={{ x: 0 }}
      exit={{ x: -3000, position: 'absolute' }}
      transition={{
        type: 'spring',
        damping: 30,
        stiffness: 300,
        duration: 300,
      }}
    >
      <AnimatePresence>
        <Box
          background='white'
          z='10'
          paddingDesktop='7rem'
          padding='4rem 7rem'
          justify='space-around'
          flexDirection='column'
          radius='8px'
          align='center'
          gap='4rem'
        >
          {loading && <Loader />}
          {sent && <Toast text='Transfer sent successfully' />}
          <Button hover text='Get Balance' onClick={getBalance} />
          <Box flexDirection='column' gap='2rem'>
            <Input
              onChange={(e) => setTokenAddress(e.target.value)}
              value={tokenAddress}
              placeholder='Token address'
            />
            <Input
              onChange={(e) => setRecipient(e.target.value)}
              value={recipient}
              placeholder='Recipient address'
            />
            <Input
              type='number'
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              placeholder='Amount'
            />
          </Box>
          <Button hover text='Send Token' onClick={submitForm} />
        </Box>
        {balance && (
          <AnimatedBox
            width='100%'
            background='#02acd1'
            justify='center'
            radius='0 0 8px 8px'
            padding='1rem 1rem'
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{
              type: 'spring',
              damping: 12,
              stiffness: 120,
              duration: 250,
            }}
          >
            <Text align='center' color='white' size='1.6rem'>
              Your Balance of {name}: {balance} {symbol}
            </Text>
          </AnimatedBox>
        )}
        {error && (
          <AnimatedBox
            width='100%'
            background='#bf1414'
            radius='0 0 8px 8px'
            padding='1rem 1rem'
            justify='center'
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{
              type: 'spring',
              damping: 12,
              stiffness: 120,
              duration: 250,
            }}
          >
            <Text align='center' color='white' size='1.6rem'>
              {error}
            </Text>
          </AnimatedBox>
        )}
      </AnimatePresence>
    </AnimatedBox>
  )
}

export default TokenForm
