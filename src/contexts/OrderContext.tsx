import { createContext, useState } from 'react';
import {
  DoughtsType,
  FillingType,
  OrderContextData,
  PointsProviderProps,
  SizeType,
} from '../@types';

export const OrderContext = createContext({} as OrderContextData);

export const PointsProvider: React.FC<PointsProviderProps> = ({ children }) => {
  const [order, setOrder] = useState(null);

  function setSelectDoughtToOrder(selectDought: DoughtsType) {
    setOrder({
      dought: selectDought,
    });
  }

  function setSelectedSizeToOrder(selectedSize: SizeType) {
    setOrder({
      ...order,
      size: selectedSize,
    });
  }

  function setSelectedFillingToOrder(selectedFilling: FillingType) {
    setOrder({
      ...order,
      filling: selectedFilling,
    });
  }

  return (
    <OrderContext.Provider
      value={{
        order,
        setSelectDoughtToOrder,
        setSelectedSizeToOrder,
        setSelectedFillingToOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
