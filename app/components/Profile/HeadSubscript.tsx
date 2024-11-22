type Props = {
  children: React.ReactNode;
};

export const HeadSubscript: React.FC<Props> = ({ children }) => {
  return <p className=" text-gray-600 mt-2">{children}</p>;
};
