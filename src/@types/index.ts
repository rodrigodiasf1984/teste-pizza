import { ReactNode } from 'react';

export interface OptionsProps {
  value: string;
  label: string;
  dought?: DoughtsType;
  size?: SizeType;
  filling?: FillingType;
}

export interface ContentProps {
  title: string;
  imageUrl: string;
}

export interface ButtonProps {
  onClick?: () => void;
}

export interface OrderContextData {
  order: {
    dought: DoughtsType;
    size: SizeType;
    filling: FillingType;
  };
  setSelectDoughtToOrder: (item: DoughtsType) => void;
  setSelectedSizeToOrder: (item: SizeType) => void;
  setSelectedFillingToOrder: (item: FillingType) => void;
}

export interface PointsProviderProps {
  children: ReactNode;
}

export interface DoughtsType {
  id: number;
  title: string;
  description: string;
  price: number;
  recommendation: boolean;
}
export interface DoughProps {
  data: Array<DoughtsType>;
}

export interface SizeType {
  id: number;
  title: string;
  size: number;
  price: number;
  recommendation: boolean;
}

export interface SizeProps {
  data: Array<SizeType>;
}

export interface FillingType {
  id: number;
  title: string;
  description: string;
  price: number;
  recommendation: boolean;
}

export interface FillingProps {
  data: Array<FillingType>;
}

export interface ModalProps {
  closeModal: () => void;
}
