type QuestionAskedProps = {
    children: React.ReactNode;
} 

export const QuestionAsked = (props: QuestionAskedProps) => {
    const { children } = props;
  
    return (
      <div
        style={{
          textShadow: "1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000",
        }}
        className='font-bold mb-5 text-blue-primary'
      >
        {children}
      </div>
    );
  };
  