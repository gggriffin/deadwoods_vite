import ImageGallery from 'react-image-gallery';

export const ImageCarousel = () => {
  
  const images = [
    {
      original: "/assets/deadwoods-image-15.jpg",
    },
    {
      original: "/assets/deadwoods-image-17.jpg",
    },
    {
      original: "/assets/deadwoods-image-18.jpg",
    },
    {
      original: "/assets/deadwoods-image-19.jpg",
    },
    {
      original: "/assets/deadwoods-image-20.jpg",
    },
    {
      original: "/assets/deadwoods-image-21.jpg",
    },
    {
      original: "/assets/deadwoods-image-1.jpg",
    },
    {
      original: "/assets/deadwoods-image-3.jpg",
    },
    {
      original: "/assets/deadwoods-image-4.jpg",
    },
    {
      original: "/assets/deadwoods-image-7.jpg",
    },
    {
      original: "/assets/deadwoods-image-8.jpg",
    },
    {
      original: "/assets/deadwoods-image-2.jpg",
    },
    {
      original: "/assets/deadwoods-image-9.jpg",
    },
    {
      original: "/assets/deadwoods-image-10.jpg",
    },
    {
      original: "/assets/deadwoods-image-11.jpg",
    },
    {
      original: "/assets/deadwoods-image-12.jpg",
    },
    {
      original: "/assets/deadwoods-image-13.jpg",
    },
    {
      original: "/assets/deadwoods-image-14.jpg",
    },
    {
      original: "/assets/deadwoods-image-16.jpg",
    },
  ];
  
  return (
    <div className="bg-trueBlack flex min-h-72 flex-col justify-center pb-2 font-main-content-text md:w-8/12">
      <ImageGallery
        items={images}
        showFullscreenButton={false}
        showNav={false}
        showPlayButton={false}
        autoPlay
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
