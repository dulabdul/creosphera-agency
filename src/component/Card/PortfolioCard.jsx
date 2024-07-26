"use client";
import React, { useEffect, useState, useMemo } from "react";
import CustomButton from "../Button";
import { Dropdown } from "flowbite-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Lightbox from "../Lightbox/Lightbox";

export default function PortfolioCard() {
  const pathName = usePathname();
  const data = {
    categories: [
      {
        name: "web development",
        projects: [
          {
            id: 1,
            title: "Minerva Rooms",
            url: "https://www.minervarooms.com/",
            imageUrl: "/images/project/minerva.webp",
          },
          {
            id: 2,
            title: "Publik Nasional",
            url: "https://publiknasional.com/",
            imageUrl: "/images/project/publikNasional.webp",
          },
          {
            id: 3,
            title: "Portofolio project",
            url: "https://ar-portofolio.my.id/",
            imageUrl: "/images/project/Portofolio.webp",
          },
          {
            id: 4,
            title: "Car Mania",
            url: "https://rent-car-theta.vercel.app/",
            imageUrl: "/images/project/rentCar.webp",
          },
          {
            id: 5,
            title: "Space Consultant",
            url: "https://consultan-ads.vercel.app/",
            imageUrl: "/images/project/consultant.webp",
          },
          {
            id: 6,
            title: "Albar Tech CCTV",
            imageUrl: "/images/project/albartech.webp",
          },
        ],
      },
      {
        name: "digital marketing",
        projects: [
          {
            id: 1,
            title: "Ads 1",
            imageUrl: "/images/project/ads1.png",
          },
          {
            id: 2,
            title: "Ads 2",
            imageUrl: "/images/project/ads2.png",
          },
          {
            id: 3,
            title: "Ads 3",
            imageUrl: "/images/project/ads3.png",
          },
          {
            id: 4,
            title: "Ads 4",
            imageUrl: "/images/project/ads5.png",
          },
          {
            id: 5,
            title: "Ads 5",
            imageUrl: "/images/project/ads5.png",
          },
        ],
      },
    ],
  };
  const [selectedCategory, setSelectedCategory] = useState("web development");
  const [windowWith, setWindoWidth] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImages, setCurrentImages] = useState([]);

  const openLightbox = (images, index, title) => {
    setCurrentImages(images);

    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    setWindoWidth(window.screen.width);
    const handleWindowResize = () => {
      setWindoWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [data.categories]);
  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value);
  }
  function filteredProject() {
    if (!selectedCategory) {
      return data.categories;
    }
    return data.categories?.filter((item) => item.name === selectedCategory);
  }
  let filterList = useMemo(filteredProject, [
    selectedCategory,
    data.categories,
  ]);

  return (
    <>
      <div className="portfolio_category-name flex flex-row gap-4 justify-start md:justify-center items-center py-8">
        {windowWith < 576 ? (
          <Dropdown
            inline={true}
            className="capitalize"
            label={selectedCategory}
            dismissOnClick={false}
          >
            {data.categories?.map((item, index) => (
              <Dropdown.Item className="capitalize" key={index}>
                <button
                  aria-label="Open Dropdown"
                  type="button"
                  value={item.name}
                  className="capitalize"
                  onClick={handleCategoryChange}
                >
                  {item.name}
                </button>
              </Dropdown.Item>
            ))}
          </Dropdown>
        ) : (
          data.categories?.map((item, index) => (
            <div key={index}>
              <CustomButton
                type="button"
                ariaLabel="Change category"
                value={item.name}
                onClick={handleCategoryChange}
                className={`text-primary font-medium text-base md:text-lg capitalize transition-all duration-200 ease-in hover:text-redColor ${
                  selectedCategory === item.name
                    ? "border-b-2 border-redColor"
                    : ""
                }`}
              >
                {item.name}
              </CustomButton>
            </div>
          ))
        )}
      </div>
      <div className="grid grid-cols-1 items-center gap-4 justify-center md:grid-cols-2 xl:grid-cols-3">
        {pathName === "/"
          ? filterList?.map((item) => {
              return item.projects.length === 0
                ? "<p>No Data Portoflio</p>"
                : item?.projects?.slice(0, 3).map((project, index) => (
                    <div className="max-w-[425px] max-h-[325px] overflow-hidden transition-all duration-200 hover:scale-105">
                      <Image
                        width={375}
                        height={325}
                        key={project.id}
                        src={project.imageUrl}
                        alt={project.title}
                        onClick={() => openLightbox(item.projects, index)}
                        className="w-ful h-full object-cover cursor-pointer"
                      />
                    </div>
                  ));
            })
          : filterList?.map((item) => {
              return item.projects.length === 0
                ? "<p>No Data Portoflio</p>"
                : item?.projects?.map((project) => (
                    <div className="max-w-[425px] max-h-[325px] overflow-hidden transition-all duration-200 hover:scale-105">
                      <Image
                        width={375}
                        height={325}
                        key={project.id}
                        src={project.imageUrl}
                        alt={project.title}
                        onClick={() => openLightbox(item.projects, index)}
                        className="w-ful h-full object-cover cursor-pointer"
                      />
                    </div>
                  ));
            })}
      </div>

      {pathName === "/" ? (
        <div className="flex justify-center pt-8">
          <CustomButton
            type="link"
            href="/portofolio"
            isSecondary
            id="open portofolio"
            isSecondaryHover
            isRounded
            isFlex
            ariaLabel="Buka portofolio page"
            className="btn text-primary items-center max-w-[170px]"
          >
            Lihat Semua
          </CustomButton>
        </div>
      ) : (
        <div className="flex justify-center pt-8">
          <CustomButton
            type="link"
            href="/portofolio"
            isSecondary
            isSecondaryHover
            id="open portofolio"
            isRounded
            isFlex
            ariaLabel="Buka Portofolio Page"
            className="btn text-primary items-center max-w-[170px] invisible"
          >
            Lihat Semua
          </CustomButton>
        </div>
      )}
      {isOpen && (
        <Lightbox
          images={currentImages}
          currentIndex={currentIndex}
          closeLightbox={closeLightbox}
        />
      )}
    </>
  );
}
