import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface FullScreenViewerProps {
  images: string[];
  selectedImageIndex: number; // Index of the currently selected image
  onClose: () => void;
}

const FullScreenViewer: React.FC<FullScreenViewerProps> = ({
  images,
  onClose,
  selectedImageIndex,
}) => {
  const [currentIndex, setCurrentIndex] = useState(selectedImageIndex);

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        event.preventDefault();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="fixed top-0 left-0 z-50 w-screen h-full bg-black bg-opacity-[.90] flex justify-center items-center">
      <button
        className="absolute top-0 right-0 m-4 text-white"
        onClick={onClose}
      >
        <X className=" w-8 h-8" />
      </button>
      <div className=" w-[75%]">
        <Image
          width={2000}
          height={2000}
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
        />
      </div>
      <button
        className="absolute top-1/2 -mt-4 left-0 p-2 text-white"
        onClick={handlePrev}
      >
        <ChevronLeft className=" w-10 h-10" />
      </button>
      <button
        className="absolute top-1/2 -mt-4 right-0 p-2 text-white"
        onClick={handleNext}
      >
        <ChevronRight className=" w-10 h-10" />
      </button>
    </div>
  );
};

export default FullScreenViewer;
