type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Heading: React.FC<Props> = ({ children, className }) => {
  return <h2 className={`color-blue-950 text-xl ${className}`}>{children}</h2>;
};
