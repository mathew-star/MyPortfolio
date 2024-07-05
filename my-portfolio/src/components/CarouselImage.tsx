import * as React from "react";
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";


interface CarouselImageProps {
  images: string[];
}

export const CarouselImage: React.FC<CarouselImageProps> = ({ images }) => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState<string | null>(
    null
  );

  const openModal = (image: string) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };

  return (
    <>
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <button
                      onClick={() => openModal(image)}
                      className="w-full h-full flex items-center justify-center"
                      style={{ cursor: "pointer" }}
                    >
                      <Image
                        src={image}
                        alt={`Project Image ${index + 1}`}
                        width={500}
                        height={500}
                        className="w-full h-auto rounded-lg object-cover"
                      />
                    </button>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="relative p-12"
      >
        <IoMdClose onClick={closeModal} className= "text-black absolute top-1 right-1 w-8 h-8 cursor-pointer"/>
        {selectedImage && (
          <img
            src={selectedImage}
            alt="Full Screen Preview"
            className="w-full h-full"
          />
        )}
      </Modal>
    </>
  );
};
