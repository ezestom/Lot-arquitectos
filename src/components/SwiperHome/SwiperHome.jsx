import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import "./SwiperHome.css";

import arrowLeft from "../../icons/arrowLeft.svg";
import arrowRight from "../../icons/arrowRight.svg";
import home1 from "../../img/farmApp.jpg";
import home2 from "../../img/orange.avif";
import home3 from "../../img/cow2.jpg";
import home4 from "../../img/farm3.webp";

import banner1 from "../../img/platform1_test.png";
import banner2 from "../../img/platform2_test.png";
import banner3 from "../../img/platform3_test.png";
import banner4 from "../../img/platform4_test.png";

export function SwiperHome() {
	const images = [
		{
			title: "Más que un Software",
			subtitle: "La puerta al futuro de la industria agrícola.",
			anchor: "Ver el proyecto",
			href: "/www.cacta.eco",
			img: home1,
			img2: banner1,
		},
		{
			title: "Performance por KPI",
			subtitle: "La App que te ayuda a mejorar tu rendimiento.",
			anchor: "Ver el proyecto",
			href: "/home1",
			img: home2,
			img2: banner2,
		},
		{
			title: "Análisis y gestión",
			subtitle: "Aumenta la productividad de tu ganado.",
			anchor: "Ver el proyecto",
			href: "/home1",
			img: home3,
			img2: banner3,
		},
		{
			title: "Reportes EPD",
			subtitle: "Activa tu cadena de valor y posiciona tu producto",
			anchor: "Ver el proyecto",
			href: "/home1",
			img: home4,
			img2: banner4,
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
			className="mySwiper rounded-b-3xl  ">
			{images.map((image, index) => (
				<SwiperSlide key={index} className="">
					<div className="home relative  ">
						<aside className="absolute  mx-auto z-30 h-full w-full flex items-end md:items-center justify-center md:justify-between  opacity-25 ">
							<img
								src={arrowLeft.src}
								alt="arrow left"
								className="w-25 "
							/>
							<img
								src={arrowRight.src}
								alt="arrow right"
								className="w-25 "
							/>
						</aside>

						<span className="swiper-fraction absolute text-6xl  top-0 right-0 px-12 md:px-5 font-black  text-white z-20">
							{
								// add a 0 before the current number
								(index + 1).toString().padStart(2, "0")
							}
						</span>

						<span className="swiper-pagination absolute m-auto" />
						<div className="home-swiper relative z-20">
							<div>
								<article className="home-article relative w-full h-screen flex items-center justify-center md:justify-start md:pl-[10rem]">
									<div
										className="home-data absolute flex flex-col items-center md:items-start text-start z-10 gap-10"
										data-swiper-parallax="500">
										<h1
											className="home-title bg-gradient-to-r from-white via-[#c684ff]  to-[#8e33ff] text-transparent bg-clip-text text-6xl lg:text-[5vw] max-w-[12ch] leading-none tracking-tight font-black text-center md:text-left -my-4 drop-shadow-md py-4"
											data-swiper-parallax="400">
											{image.title}
										</h1>
										<h3 className="home-subtitle text-white font-bold text-3xl lg:text-[2vw] max-w-[25ch] sm:leading-10 text-center sm:text-start tracking-tight ">
											{image.subtitle}
										</h3>
										{/* <a
											data-swiper-parallax="300"
											href={image.href}
											target="_blank"
											className="home-button flex items-center justify-center text-white gap-1 mt-5 group z-40">
											{image.anchor}
										</a> */}
									</div>
									<img
										data-swiper-parallax="-300"
										src={image.img.src}
										alt={`${image.img} image`}
										className="absolute top-0 left-0 w-full h-full object-cover object-center -z-10"
									/>
									<img
										data-swiper-parallax="-200"
										id="img2"
										src={image.img2.src}
										alt={`${image.img2} image`}
										className="absolute w-full -bottom-[15rem] sm:-bottom-[7.5rem]  m-auto sm:-right-[35rem] object-contain  sm:rounded-[3rem] -z-10 opacity-85 sm:p-7 shadow-md "
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
