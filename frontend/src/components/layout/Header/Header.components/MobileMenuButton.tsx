interface MobileMenuButtonProps {
  isMenuOpen: boolean;
  onToggle: () => void;
}

export const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({
  isMenuOpen,
  onToggle,
}) => {
  return (
    <button
      className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:outline-none focus:ring-inset md:hidden"
      onClick={onToggle}
    >
      <span className="sr-only">Открыть меню</span>
      <div className="flex w-6 flex-col space-y-1">
        <span
          className={`block h-0.5 w-6 transform bg-current transition duration-300 ease-in-out ${isMenuOpen ? "translate-y-1.5 rotate-45" : ""}`}
        />
        <span
          className={`block h-0.5 w-6 bg-current transition duration-300 ease-in-out ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
        />
        <span
          className={`block h-0.5 w-6 transform bg-current transition duration-300 ease-in-out ${isMenuOpen ? "-translate-y-1.5 -rotate-45" : ""}`}
        />
      </div>
    </button>
  );
};
