import ImageGallery from 'react-image-gallery';

//TODO: Why aren't images loading in preview mode and do we care?

export const ImageCarousel = () => {
  const images = [
    {
      original: import.meta.env.BASE_URL + "src/assets/deadwoods-image-15.jpg",
    },
    {
      original: import.meta.env.BASE_URL + "src/assets/deadwoods-image-1.jpg",
    },
    {
      original: import.meta.env.BASE_URL + "src/assets/deadwoods-image-3.jpg",
    },
    {
      original: import.meta.env.BASE_URL + "src/assets/deadwoods-image-5.jpg",
    },
    {
      original: import.meta.env.BASE_URL + "src/assets/deadwoods-image-6.jpg",
    },
    {
      original: import.meta.env.BASE_URL + "src/assets/deadwoods-image-4.jpg",
    },
    {
      original: import.meta.env.BASE_URL + "src/assets/deadwoods-image-7.jpg",
    },
    {
      original: import.meta.env.BASE_URL + "src/assets/deadwoods-image-8.jpg",
    },
    {
      original: import.meta.env.BASE_URL + "src/assets/deadwoods-image-2.jpg",
    },
    {
      original: import.meta.env.BASE_URL + "src/assets/deadwoods-image-9.jpg",
    },
    {
      original: import.meta.env.BASE_URL + "src/assets/deadwoods-image-10.jpg",
    },
    {
      original: import.meta.env.BASE_URL + "src/assets/deadwoods-image-11.jpg",
    },
    {
      original: import.meta.env.BASE_URL + "src/assets/deadwoods-image-12.jpg",
    },
    {
      original: import.meta.env.BASE_URL + "src/assets/deadwoods-image-13.jpg",
    },
    {
      original: import.meta.env.BASE_URL + "src/assets/deadwoods-image-14.jpg",
    },
    {
      original: import.meta.env.BASE_URL + "src/assets/deadwoods-image-16.jpg",
    },
  ];
  
  return (
    <div className="bg-trueBlack flex flex-col justify-center pb-2 font-main-content-text md:w-8/12">
      <ImageGallery
        items={images}
        showFullscreenButton={false}
        showNav={false}
        showPlayButton={false}

      />
      <span className="w-full text-center text-white text-sm">
        Photos courtesy of{" "}
        <a
          className="text-blue-primary underline"
          target="_blank"
          rel="noreferrer"
          href="https://www.shirkmediallc.com/"
        >
          Shirk Media LLC
        </a>
      </span>
    </div>
  );
};
