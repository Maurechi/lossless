import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import logoImg from '../../assets/images/logo.svg'

const LogoImg = styled.img`
  height: 4.4rem;
  width: 15rem;
`
const LogoLink = styled(NavLink)`
  /* @media (max-width: ${({ theme }) => theme.media.sm}) {
    display: none;
  } */
`

const Logo = () => {
  return (
    <LogoLink to='/'>
      <LogoImg src={logoImg} />
    </LogoLink>
  )
}

export default Logo
