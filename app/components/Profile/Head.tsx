type Props = {
  children: React.ReactNode;
};

export const Head: React.FC<Props> = ({ children }) => {
  return <h1 className="font-semibold text-xl">{children}</h1>;
};
