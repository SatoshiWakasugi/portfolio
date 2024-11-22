type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Card: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={`bg-white p-16 rounded-lg ${className}`}>{children}</div>
  );
};
