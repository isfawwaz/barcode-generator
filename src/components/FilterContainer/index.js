import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/react';

const FilterContainer = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <Box bg="gray.50" p={4} w="60%" minH="100%" ref={ref} {...props}>
      {children}
    </Box>
  );
});

FilterContainer.propTypes = {
  children: PropTypes.node,
};

FilterContainer.defaultProps = {
  children: null,
};

export default FilterContainer;
