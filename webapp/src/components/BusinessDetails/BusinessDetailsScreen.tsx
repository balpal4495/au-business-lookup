import { LinearProgress } from '@material-ui/core';
import { RouteComponentProps } from '@reach/router';
import React, { useEffect } from 'react';
import { getByAbn } from '../../services/businessLookupApi';
import { AbnLookupResponse } from '../../shared/types';
import { BusinessDetailsCard } from './BusinessDetailsCard';

type Props = RouteComponentProps<{ abn: string }>;
export const BusinessDetailsScreen: React.FC<Props> = ({ abn }) => {
  const [business, setBusiness] = React.useState<AbnLookupResponse>();
  const [isLoading, setLoading] = React.useState<boolean>(false);

  useEffect(() => {
    async function fetchBusiness() {
      setLoading(true);
      const apiBusiness = await getByAbn(abn!);
      setLoading(false);
      setBusiness(apiBusiness);
    }
    fetchBusiness();
  }, [abn]);

  if (isLoading || !business) return <LinearProgress />;

  return (
    <>
      <BusinessDetailsCard business={business!} />
    </>
  );
};
