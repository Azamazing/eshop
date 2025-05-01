/** @jsxImportSource @emotion/react */

import Container from "../layouts/Container/Container";

import { footerStyle, footerContentStyle, footerCopyrightStyle } from "./style";

import FooterContacts from "./FooterContacts/FooterContacts";
import FooterSocialLinks from "./FooterSocialLinks/FooterSocialLinks";
import FooterCopyright from "./FooterCopyright/FooterCopyright";

const Footer = () => {
  return (
    <footer css={footerStyle}>
      <Container>
        <div css={footerContentStyle}>
          <FooterContacts />
          <FooterSocialLinks />
        </div>
        <div css={footerCopyrightStyle}>
          <FooterCopyright />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
