import { useState, useEffect } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

const Lightbox = ({ images, currentIndex, closeLightbox, title }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(currentIndex);

  const handleNext = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    setCurrentImageIndex(currentIndex);
  }, [currentIndex]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 transition-all">
      <div className="absolute inset-0" onClick={closeLightbox}></div>
      <div className="absolute left-0 top-0 p-8">
        <a
          href={images[currentImageIndex].url}
          target="_blank"
          className="text-white capitalize transition-all underline hover:text-blue-500"
        >
          {images[currentImageIndex].title}
        </a>
      </div>
      <button onClick={handlePrev} className="absolute left-[20px] ">
        <MdOutlineKeyboardArrowLeft className="text-7xl text-gray-400 transition-all hover:text-gray-300" />
      </button>
      <div className="relative max-w-4xl max-h-90p flex items-center justify-center">
        <img
          src={images[currentImageIndex].imageUrl}
          alt="lightbox"
          className="max-w-full max-h-full"
        />
      </div>
      <button onClick={handleNext} className="absolute right-[20px]">
        <MdOutlineKeyboardArrowRight className="text-7xl text-gray-400 transition-all hover:text-gray-300" />
      </button>
      <button
        className="absolute top-0  p-2 m-2 right-0"
        onClick={closeLightbox}
      >
        <IoMdCloseCircle className="text-4xl md:text-5xl text-white hover:opacity-80 transition-all" />
      </button>
    </div>
  );
};

export default Lightbox;
