import React from 'react';

import { Main } from '@/styles/components/main';

const MainComponent: React.FC = ({ children }) => {
  return <Main>{children}</Main>;
};

export default MainComponent;
