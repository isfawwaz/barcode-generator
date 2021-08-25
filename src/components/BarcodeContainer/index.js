import React from 'react';
import { Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const BarcodeContainer = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <Box bg="white" py={4} w="40%" minH="100%" d="flex" flexDir="column" ref={ref} {...props}>
      {children}
    </Box>
  );
});

BarcodeContainer.propTypes = {
  children: PropTypes.node,
};

BarcodeContainer.defaultProps = {
  children: null,
};

export default BarcodeContainer;
