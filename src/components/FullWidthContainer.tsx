type FullWidthContainerProps = {
  children: React.ReactNode;
};

export const FullWidthContainer = (props: FullWidthContainerProps) => {
  const { children } = props;

  return (
    <div
      className="flex flex-col flex-grow container min-w-screen min-h-screen"
    >
      {children}
    </div>
  );
};
