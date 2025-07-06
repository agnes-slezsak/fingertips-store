import styled from "styled-components";

import { FOOTER_TEXT } from "../../utils/consts";

const StyledFooter = styled.footer`
  width: 100vw;
  padding: 16px 0;
  background: ${({ theme }) => theme.colors.darkGrey};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-size: 0.95rem;
  margin-top: auto;
`;

const Footer = () => <StyledFooter>{FOOTER_TEXT}</StyledFooter>;

export default Footer;
