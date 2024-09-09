import {createContext, useContext, useState, ReactNode} from 'react';
import React from 'react';
import {TempUnits} from '../models/weather';

export interface TemperatureUnitsContextProps {
  temperatureUnit: TempUnits;
  setTemperatureUnit: (tempUnit: TempUnits) => void;
}

const defaultValue: TemperatureUnitsContextProps = {
  temperatureUnit: 'C',
  setTemperatureUnit: () => {},
};

const TemperatureUnitsContext = createContext(defaultValue);

interface TemperatureUnitsProviderProps {
  children: ReactNode;
}

export const TemperatureUnitsProvider = ({
  children,
}: TemperatureUnitsProviderProps) => {
  const [temperatureUnit, setTemperatureUnit] = useState<TempUnits>('C');

  return (
    <TemperatureUnitsContext.Provider
      value={{
        temperatureUnit,
        setTemperatureUnit,
      }}>
      {children}
    </TemperatureUnitsContext.Provider>
  );
};

export const useTemperatureUnits = () => {
  const context = useContext(TemperatureUnitsContext);
  if (!context) {
    throw new Error(
      'useTemperatureUnits must be used within an TemperatureUnitsProvider',
    );
  }
  return context;
};
