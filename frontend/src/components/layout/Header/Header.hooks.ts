import { useRef, useState } from 'react';

// Оставляем только useDropdown, useServices больше не нужен
export const useDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const openDropdown = () => setIsOpen(true);
  const closeDropdown = () => setIsOpen(false);
  const toggleDropdown = () => setIsOpen(prev => !prev);

  return {
    isOpen,
    dropdownRef,
    openDropdown,
    closeDropdown,
    toggleDropdown,
  };
};