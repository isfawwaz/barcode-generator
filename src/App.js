import React from 'react';

import AppContainer from './components/AppContainer';
import Barcode from './components/Barcode';
import BarcodeContainer from './components/BarcodeContainer';
import FilterContainer from './components/FilterContainer';

import useQrCode from './utils/hooks/useQrCode';

function App() {
  const { contentRef } = useQrCode();

  return (
    <AppContainer>
      <FilterContainer>Filter</FilterContainer>
      <BarcodeContainer>
        <Barcode ref={contentRef} />
      </BarcodeContainer>
    </AppContainer>
  );
}

export default App;
