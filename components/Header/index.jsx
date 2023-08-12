import React, { useEffect, useState, useMemo } from 'react';
import SocialWidget from '../Widget/SocialWidget';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import Div from '../Div';
import { UserOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { Button, Divider, Popover, Segmented } from 'antd';
import { Skeleton } from 'antd';

const content = (
  <div
    style={{ backgroundColor: '#07031b', color: 'white', width: '200px' }}
  >
    <Skeleton avatar paragraph={{ rows: 1 }} />
    <hr></hr>
    <div>
      Your art
    </div>
    <hr></hr>
    <div>
      Privacy policy
    </div>
    <hr></hr>
    <div>
      Contact us
    </div>
    <hr></hr>
    <div>
      About us
    </div><hr></hr>
    <div>
      Follow us on

      <SocialWidget />
    </div>
  </div>
);

const buttonWidth = 70;


export default function Header({ variant }) {
  const [showArrow, setShowArrow] = useState(true);
  const [arrowAtCenter, setArrowAtCenter] = useState(false);

  const mergedArrow = useMemo(() => {
    if (arrowAtCenter) return { pointAtCenter: true };
    return showArrow;
  }, [showArrow, arrowAtCenter]);


  const [isSticky, setIsSticky] = useState(false);
  const [sideHeaderToggle, setSideHeaderToggle] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);

  return (
    <>
      <header
        className={`cs-site_header cs-style1 text-uppercase ${variant ? variant : ''
          } cs-sticky_header ${isSticky ? 'cs-sticky_header_active' : ''}`}
      >
        <Div className="cs-main_header">
          <Div className="container">
            <Div className="cs-main_header_in">
              <Div className="cs-main_header_left">
                <Link className="cs-site_branding" href="/">
                  <img src="/images/logo.svg" alt="Logo" />
                </Link>
              </Div>
              <Div className="cs-main_header_center">
                <Div className="cs-nav cs-primary_font cs-medium">
                  <ul
                    className="cs-nav_list"
                    style={{ display: `${mobileToggle ? 'block' : 'none'}` }}
                  >
                    <li >
                      <Link href="/" onClick={() => setMobileToggle(false)}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="about" onClick={() => setMobileToggle(false)}>
                        About Us
                      </Link>
                    </li>
                    <li >
                      <Link
                        href="/contact"
                        onClick={() => setMobileToggle(false)}
                      >
                        Contact Us
                      </Link>
                    </li>
                    <li >
                      <Link
                        href="/passion"
                        onClick={() => setMobileToggle(false)}
                      >
                        Join Our Community
                      </Link>
                    </li>
                  </ul>
                  <span
                    className={
                      mobileToggle
                        ? 'cs-munu_toggle cs-toggle_active'
                        : 'cs-munu_toggle'
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                </Div>
              </Div>
              <Div className="cs-main_header_right">
                <Popover placement="bottomRight" color='#07031b' content={content} arrow={mergedArrow}>
                  <Button type="primary"><UserOutlined /></Button>
                </Popover>

              </Div>
            </Div>
          </Div>
        </Div>
      </header>

      <Div
        className={
          sideHeaderToggle ? 'cs-side_header active' : 'cs-side_header'
        }
      >
        <button
          className="cs-close"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div
          className="cs-side_header_overlay"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div className="cs-side_header_in">
          <Div className="cs-side_header_shape" />
          <Link className="cs-site_branding" href="/">
            <img src="/images/footer_logo.svg" alt="Logo" />
          </Link>
          <Div className="cs-side_header_box">
            <h2 className="cs-side_header_heading">
              Do you have a idea in your <br /> mind? Keep connect us.
            </h2>
          </Div>
          <Div className="cs-side_header_box">
            <ContactInfoWidget title="Contact Us" withIcon />
          </Div>
          <Div className="cs-side_header_box">
            <SocialWidget />
          </Div>
        </Div>
      </Div>
    </>
  );
}
