import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100vw;
  padding: 16px 0;
  background: #273138;
  color: #f8ffff;
  text-align: center;
  font-size: 0.95rem;
  margin-top: auto;
`;
const FOOTER_TEXT = `© ${new Date().getFullYear()} Fingertips Store. All rights reserved.`;
const Footer = () => <StyledFooter>{FOOTER_TEXT}</StyledFooter>;

export default Footer;
