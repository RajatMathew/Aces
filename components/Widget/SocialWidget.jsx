import { Icon } from '@iconify/react';
import Div from '../Div';
import Link from 'next/link';

export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1">
      <Link href="https://instagram.com/acesorg" className="cs-center">
        <Icon icon="fa6-brands:instagram" />
      </Link>
      <Link href="https://twitter.com/Acesorg_com" className="cs-center">
        <Icon icon="fa6-brands:twitter" />
      </Link>
      <Link href="https://www.facebook.com/acesorg" className="cs-center">
        <Icon icon="fa6-brands:youtube" />
      </Link>
    </Div>
  );
}
