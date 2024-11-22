type Props = {
  children: React.ReactNode;
};

export const LinkItem: React.FC<
  Props & React.AnchorHTMLAttributes<HTMLAnchorElement>
> = ({ children, ...props }) => {
  return (
    <a className="text-blue-600" {...props}>
      {children}
    </a>
  );
};
