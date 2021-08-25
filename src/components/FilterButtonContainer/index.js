import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@chakra-ui/react';

const FilterButtonContainer = ({ children, ...props }) => {
  return (
    <Box py={4} d="flex" alignItems="center" justifyContent="center" {...props}>
      {children}
    </Box>
  );
};

FilterButtonContainer.propTypes = {
  children: PropTypes.node,
};

FilterButtonContainer.defaultProps = {
  children: null,
};

export default FilterButtonContainer;
