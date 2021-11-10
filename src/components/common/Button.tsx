import styled, { css } from 'styled-components'
import UserWallet from '../../assets/icons/UserWallet'
import { motion } from 'framer-motion'

interface StyledProps {
  hoverChange?: boolean
}
const StyledButton = styled(motion.button)<StyledProps>`
  background: ${({ theme }) => theme.colors.btnMain};
  box-shadow: ${({ theme }) => theme.shadows.surface10};
  padding: 1rem 2.4rem;
  /* height: 4rem; */
  font-size: 1.6rem;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  transition: all 0.7s ease;
  color: ${({ theme }) => theme.colors.surface100};
  ${({ hoverChange }) =>
    hoverChange &&
    css`
      :hover {
        background: linear-gradient(90deg, #f7f8bf, #f7f7f5 35%, #e2f1f5)
          no-repeat;
        box-shadow: 10px 5px 5px ${({ theme }) => theme.colors.light30};
        color: ${({ theme }) => theme.fontColors.gray100};
      }
    `}
`

interface Props {
  text: string
  onClick: () => void
  withIcon?: boolean
  hover?: boolean
}
const Button = ({ text, onClick, withIcon, hover, ...props }: Props) => {
  return (
    <StyledButton {...props} hoverChange={hover} onClick={onClick}>
      {withIcon && <UserWallet />}
      {text}
    </StyledButton>
  )
}

export default Button
