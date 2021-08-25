import React from 'react';
import { Box } from '@chakra-ui/react';

const Barcode = React.forwardRef((props, ref) => {
  return (
    <Box w="100%" h="100%" d="flex" alignItems="center" justifyContent="center" {...props}>
      <div ref={ref} />
    </Box>
  );
});

export default Barcode;
