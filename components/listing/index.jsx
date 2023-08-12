import React from 'react';
import { Icon } from '@iconify/react';
import Button from '../Button';
import Div from '../Div';
import { Skeleton } from 'antd';

export default function PricingTable({
  title,
  features,
  btnLink,
  btnText,
  regLink,
  regText,
  refLink,
  refText,
}) {
  return (
    <Div className="cs-pricing_table text-gray-200 cs-style1">
      <h2 className="cs-pricing_title">{title}</h2>
      <Div className="cs-pricing_btn_wrap cs-main_header ">
        <Button btnLink={regLink} btnText={regText} />
        <Button btnLink={refLink} btnText={refText} />
      </Div>
      <ul className="cs-pricing_feature cs-mp0">
        {features.map((feature, index) => (
          <Skeleton
            avatar
            paragraph={{
              rows: 4,
            }}
          />
        ))}
      </ul>
      <Div className="cs-pricing_btn_wrap">
        <Button btnLink={btnLink} btnText={btnText} />
      </Div>
    </Div>
  );
}
