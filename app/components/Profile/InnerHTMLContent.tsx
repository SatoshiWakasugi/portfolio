type Props = {
  contentString: string;
};

export const InnerHTMLContent: React.FC<Props> = ({ contentString }) => {
  return (
    <div
      className="leading-relaxed mx-24"
      dangerouslySetInnerHTML={{ __html: contentString }}
    />
  );
};
