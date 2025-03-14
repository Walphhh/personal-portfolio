interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  return (
    <div
      className={`w-dvw flex h-16 px-20 bg-amber-200 items-center ${className}`}
    >
      <nav className="w-full">
        <ul className="flex space-x-24 justify-end">
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
