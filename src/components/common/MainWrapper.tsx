import { useAtom } from 'jotai'
import React from 'react'
import styled from 'styled-components'
import { accountAtom } from '../../Atoms'

const StyledMainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-top: 8rem;
`

const MainWrapper: React.FC = ({ children }) => {
  const [, setAccount] = useAtom(accountAtom)

  window.ethereum?.on('accountsChanged', async function (accounts) {
    setAccount(accounts[0])
  })

  return <StyledMainWrapper>{children}</StyledMainWrapper>
}

export default MainWrapper
