import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import "./SwiperHome.css";

import arrowLeft from "../../icons/arrowLeft.svg";
import arrowRight from "../../icons/arrowRight.svg";
import home1 from "../../img/home-1.jpg";
import home2 from "../../img/home-2.jpg";
import home3 from "../../img/home-3.jpg";
import home4 from "../../img/home-4.jpg";

export function SwiperHome() {
	const images = [
		{
			title: "Arquitectura moderna",
			subtitle: "Simplicidad y elegancia",
			anchor: "Ver el proyecto",
			href: "/home1",
			img: home1,
		},
		{
			title: "Lujo de primera clase",
			subtitle: "Vive como una estrella de rock",
			anchor: "Ver el proyecto",
			href: "/home1",
			img: home2,
		},
		{
			title: "Vive tu vida al máximo",
			subtitle: "Y disfruta de la naturaleza",
			anchor: "Ver el proyecto",
			href: "/home1",
			img: home3,
		},
		{
			title: "Elige lo mejor",
			subtitle: "La oportunidad de vivir de ensueño",
			anchor: "Ver el proyecto",
			href: "/home1",
			img: home4,
		},
	];

	return (
		<Swiper
			speed={800}
			parallax={true}
			effect={"fade"}
			loop={true}
			spaceBetween={0}
			freeMode={false}
			pagination={{
				clickable: true,
				el: ".swiper-pagination",
			}}
			modules={[FreeMode, Pagination]}
			className="mySwiper rounded-b-3xl ">
			{images.map((image, index) => (
				<SwiperSlide key={index} className="">
					<div className="home relative hover:cursor-grab  ">
						<aside className="absolute  mx-auto z-20 h-full w-full flex items-end md:items-center justify-center md:justify-between  opacity-20 ">
							<img
								src={arrowLeft.src}
								alt="arrow left"
								className="w-20 "
							/>
							<img
								src={arrowRight.src}
								alt="arrow right"
								className="w-20 "
							/>
						</aside>

						<span className="swiper-fraction absolute text-6xl  top-0 right-0 px-12 md:px-5 font-black  text-white z-20">
							{
								// add a 0 before the current number
								(index + 1).toString().padStart(2, "0")
							}
						</span>

						<span className="swiper-pagination absolute m-auto" />
						<div className="home-swiper relative z-10">
							<div>
								<article className="home-article relative w-full h-screen flex items-center justify-center md:justify-start md:pl-[10rem] ">
									<div
										className="home-data flex flex-col items-center md:items-start text-start z-10 gap-10"
										data-swiper-parallax="500">
										<h3 className="home-subtitle text-white font-bold text-xl lg:text-[2vw] ">
											{image.subtitle}
										</h3>
										<h1
											className="home-title text-white text-4xl lg:text-[4vw] max-w-[15ch] leading-none font-black text-center md:text-left"
											data-swiper-parallax="400">
											{image.title}
										</h1>
										<a
											data-swiper-parallax="300"
											href={image.href}
											className="home-button flex items-center justify-center text-white gap-1 mt-5 group">
											{image.anchor}
										</a>
									</div>
									<img
										data-swiper-parallax="-300"
										src={image.img.src}
										alt={`${image.img} image`}
										className="absolute top-0 left-0 w-full h-full object-cover object-center -z-10"
									/>
								</article>
							</div>
						</div>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
}
