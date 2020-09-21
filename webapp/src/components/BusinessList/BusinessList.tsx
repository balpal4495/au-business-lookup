import React from 'react';
import { BusinessListItem } from './BusinessListItem';
import { Business } from '../../shared/types';

interface Props {
  businesses: Business[];
}
export const BusinessList = (props: Props) => {
  const { businesses } = props;
  return (
  <>
  {businesses.map((business: Business) => <BusinessListItem key={business.Abn} business={business}/>)}
  </>
  );
};
