
export const MainIntro = () => {
  return (
    <div className='flex text-white justify-end mr-4 md:mr-24'>
      <div className='font-main-content-text text-4xl md:text-6xl lg:text-7xl lg:mt-32 text-right'>
        <h2 className='mb-2 lg:mb-12'>Something</h2>
        <h2 className='mb-12 lg:mb-12'>is in there.</h2>
        <h2 className='text-3xl mb-12 lg:text-5xl'>10.19.2024</h2>
        <a
          target='_blank'
          rel='noreferrer'
          href="https://www.google.com/maps/place/38%C2%B019'48.0%22N+94%C2%B052'02.2%22W/@38.33,-94.8694665,17z/data=!3m1!4b1!4m6!3m5!1s0!7e2!8m2!3d38.3299996!4d-94.8672672"
        >
          <div className='text-3xl text-blue-primary lg:text-5xl hover:text-white hover:bg-blue-primary rounded underline'>
            <h2>38°19'48.0"N</h2>
            <h2>94°52'02.2"W</h2>
          </div>
        </a>
      </div>
    </div>
  );
};
