import React from 'react';
import { Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const AppContainer = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <Box w="100vw" h="100vh" d="flex" className="App" ref={ref} {...props}>
      {children}
    </Box>
  );
});

AppContainer.propTypes = {
  children: PropTypes.node,
};

AppContainer.defaultProps = {
  children: null,
};

export default AppContainer;
