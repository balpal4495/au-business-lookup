import React from 'react';
import { BusinessListItem } from './BusinessListItem';
import { Business } from '../../shared/types';
import { GridList, GridListTile } from '@material-ui/core';

interface Props {
  businesses: Business[];
}
export const BusinessList = (props: Props) => {
  const { businesses } = props;
  return (
    <>
      <GridList cellHeight={300} cols={3}>
        {businesses.map((business: Business) => (
          <GridListTile key={business.Abn} cols={1}>
            <BusinessListItem business={business} />
          </GridListTile>
        ))}
      </GridList>
    </>
  );
};
