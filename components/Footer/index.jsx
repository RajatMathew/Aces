import React from 'react';
import Div from '../Div';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import MenuWidget from '../Widget/MenuWidget';
import SocialWidget from '../Widget/SocialWidget';
import TextWidget from '../Widget/TextWidget';

export default function Footer({ copyrightText, logoSrc, logoAlt, text }) {
  const copyrightLinks = [
    {
      title: 'Terms and Conditions',
      href: '/',
    },
    {
      title: 'Privacy Policy',
      href: '/',
    },
  ];

  const serviceMenu = [
    {
      title: 'About us',
      href: '/about',
    },
    {
      title: 'Our story',
      href: '/story',
    },
    {
      title: 'Contact us',
      href: '/contact',
    },
    {
      title: 'Blog',
      href: '/blog',
    },
  ];

  return (
    <footer className="cs-fooer">
      <Div className="cs-fooer_main">
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-4 col-sm-6">
              <Div className="cs-footer_item">
                <TextWidget
                  logoSrc="/images/logo.svg"
                  logoAlt="Logo"
                  text="We at ACES believe artist interaction is
                  vital for art to thrive, unity in harmony to
                  build a community for artists and art to thrive!"
                />
                <SocialWidget />
              </Div>
            </Div>
            <Div className="col-lg-4 col-sm-6">
              <Div className="cs-footer_item">
                <MenuWidget menuItems={serviceMenu} menuHeading="Links" />
              </Div>
            </Div>
            <Div className="col-lg-4 col-sm-6">
              <Div className="cs-footer_item">
                <ContactInfoWidget title="Contact Us" />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Div className="container">
        <Div className="cs-bottom_footer">
          <Div className="cs-bottom_footer_left">
            <Div className="cs-copyright">Copyright © 2023  Arsvitae Infotech pvt ltd.</Div>
          </Div>
          <Div className="cs-bottom_footer_right">
            <MenuWidget menuItems={copyrightLinks} variant=" cs-style2" />
          </Div>
        </Div>
      </Div>
    </footer>
  );
}
