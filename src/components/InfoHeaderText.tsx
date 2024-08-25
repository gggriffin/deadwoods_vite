type InfoHeaderTextProps = {
    children: React.ReactNode;
}

export const InfoHeaderText = (props: InfoHeaderTextProps) => {
  const { children } = props;
  return (
    <div
      style={{
        textShadow: "1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000",
      }}
      className='text-center text-3xl mt-6 font-bold mb-5 font-main-content-text text-blue-primary'
    >
      {children}
    </div>
  );
};
