import { useState } from 'react';

const useFilterButton = () => {
  const [isOptionOpen, setIsOptionOpen] = useState(false);

  const handleOptionOnClose = () => setIsOptionOpen(false);

  const handleOptionClick = () => setIsOptionOpen(true);

  return {
    isOptionOpen,
    handleOptionOnClose,
    handleOptionClick,
  };
};

export default useFilterButton;
