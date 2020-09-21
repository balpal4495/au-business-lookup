import React from 'react';
import { Business } from '../../shared/types';

interface Props {
  business: Business;
}

export const BusinessListItem = (props: Props) => {
  const { business } = props;

  return (
    <>
      <div>{business.Name}</div>
    </>
  );
};
