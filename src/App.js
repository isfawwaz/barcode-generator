import React from 'react';
import {
  Button,
  ButtonGroup,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Portal,
  VStack,
} from '@chakra-ui/react';
import { CaretDown } from 'phosphor-react';

import AppContainer from './components/AppContainer';
import Barcode from './components/Barcode';
import BarcodeContainer from './components/BarcodeContainer';
import FilterContainer from './components/FilterContainer';
import FilterButtonContainer from './components/FilterButtonContainer';

import useQrCode from './utils/hooks/useQrCode';
import useFilterButton from './utils/hooks/useFilterButton';

function App() {
  const { isOptionOpen, handleOptionOnClose, handleOptionClick } = useFilterButton();
  const { contentRef, fileExt, onDownloadClick, handleExtensionOptionClick } = useQrCode();

  return (
    <AppContainer>
      <FilterContainer>Filter</FilterContainer>
      <BarcodeContainer>
        <Barcode ref={contentRef} />
        <FilterButtonContainer>
          <ButtonGroup size="lg" variant="solid" colorScheme="teal" isAttached>
            <Button colorScheme="teal" size="lg" mr="-px" onClick={onDownloadClick}>
              Download (.{fileExt})
            </Button>
            <Popover isOpen={isOptionOpen} onClose={handleOptionOnClose}>
              <PopoverTrigger>
                <IconButton
                  onClick={handleOptionClick}
                  aria-label="More download options"
                  icon={<CaretDown size={16} weight="fill" />}
                />
              </PopoverTrigger>
              <Portal>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverBody p={0}>
                    <VStack spacing={0} onClick={handleOptionOnClose}>
                      <Button
                        variant="ghost"
                        onClick={() => handleExtensionOptionClick('jpg')}
                        isFullWidth
                        isActive={fileExt === 'jpg'}
                      >
                        .JPG
                      </Button>
                      <Button
                        variant="ghost"
                        onClick={() => handleExtensionOptionClick('png')}
                        isFullWidth
                        isActive={fileExt === 'png'}
                      >
                        .PNG
                      </Button>
                      <Button
                        variant="ghost"
                        onClick={() => handleExtensionOptionClick('webp')}
                        isFullWidth
                        isActive={fileExt === 'webp'}
                      >
                        .WEBP
                      </Button>
                      <Button
                        variant="ghost"
                        onClick={() => handleExtensionOptionClick('svg')}
                        isFullWidth
                        isActive={fileExt === 'svg'}
                      >
                        .SVG
                      </Button>
                    </VStack>
                  </PopoverBody>
                </PopoverContent>
              </Portal>
            </Popover>
          </ButtonGroup>
        </FilterButtonContainer>
      </BarcodeContainer>
    </AppContainer>
  );
}

export default App;
