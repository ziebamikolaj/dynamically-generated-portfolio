interface RoundedButtonProps {
  children: React.ReactNode | string;
  className?: string;
  href: string;
}

export default function RoundedButton({
  children,
  className,
  href,
  ...props
}: RoundedButtonProps) {
  return (
    <a
      className={`rounded-full bg-card px-4 py-2 text-sm text-[#CBD5E1] transition-colors duration-300 hover:bg-card-foreground hover:text-card md:text-base lg:text-lg ${className}`}
      href={href}
      {...props}
    >
      {children}
    </a>
  );
}
