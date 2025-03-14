import ThemeToggle from "../features/ThemeToggle";
interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  return (
    <div
      className={`w-dvw flex h-16 px-20 bg-optionHighlight items-center ${className}`}
    >
      <nav className="w-full">
        <ul className="flex space-x-24 items-center justify-end">
          <ThemeToggle />
          <li>Item One</li>
          <li>Item Two</li>
          <li>Item Three</li>
          <li>Item Four</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
