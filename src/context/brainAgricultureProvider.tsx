import { useState, useEffect, ReactNode } from 'react';
import { CreateBrainAgricultureContext, IDashBoardValues } from './contex';
import { getDashboardValues } from '../services/api/farmer/useCases/getDashboardValues';
import { Loading } from '../shared/components/Loading/Loading';

type Props = {
  children: ReactNode
};

export const BrainAgricultureProviderContext = ({ children }: Props): JSX.Element => {
  const [loading, setLoading] = useState(true);
  const [dashboardValues, setDashBoardValues] = useState<IDashBoardValues>(
    {} as IDashBoardValues,
  );

  const fetchDashboardValues = async () => {
    try {
      const data = await getDashboardValues();
      setDashBoardValues(data);
      return;
    } catch (error) {
      return {};
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardValues();
  }, []);

  return (
    <CreateBrainAgricultureContext.Provider
      value={{
        dashboardValues
      }}
    >
      <div style={{ position: 'relative' }}>
        {children}
        {loading && <Loading />}
      </div>
    </CreateBrainAgricultureContext.Provider>
  );
};
