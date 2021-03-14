import React from 'react';
import { Button } from '@/styles/components/button';
import { ButtonProps } from '@/@types';

const ButtonComponent: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <Button type="button" {...rest}>
      {!children ? (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 5l7 7-7 7M5 5l7 7-7 7"
          />
        </svg>
      ) : (
        children
      )}
    </Button>
  );
};

export default ButtonComponent;
