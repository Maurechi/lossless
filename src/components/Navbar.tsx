import { useEffect } from 'react'
import styled from 'styled-components'
import { requestAccount } from '../helpers/requestAccount'
import { useAtom } from 'jotai'
import { accountAtom, buttonTextAtom } from '../Atoms'
import { Box, Button, Logo } from './common'

const StyledNavbar = styled.nav`
  height: 8rem;
  padding: 0rem 5rem;
  display: flex;
  position: fixed;
  width: 100%;
  z-index: 10;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.greyBorder};
  @media (min-width: ${({ theme }) => theme.media.sm}) {
    justify-content: space-between;
    padding: 0rem 10rem;
  }
`

export const Navbar = () => {
  window.ethereum.on('accountsChanged', async function (accounts) {
    setAccount(accounts[0])
  })
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
  useEffect(() => {
    account
      ? setButtonText(
          `${account.substring(0, 6)}...${account.substring(
            account.length - 4
          )}`
        )
      : setButtonText('Connect To Wallet')
  }, [account, setButtonText])
  return (
    <StyledNavbar>
      <Logo />
      <Box hiddenOnMobile>
        <Button text={buttonText} withIcon onClick={onClick} />
      </Box>
    </StyledNavbar>
  )
}
