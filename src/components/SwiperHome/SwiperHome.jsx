import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Parallax, Pagination } from "swiper/modules";
import "./SwiperHome.css";

import arrowLeft from "../../icons/arrowLeft.svg";
import arrowRight from "../../icons/arrowRight.svg";
import home1 from "../../img/malvinas.jpg";
import home2 from "../../img/orange.avif";
import home3 from "../../img/cow2.jpg";
import home4 from "../../img/farm3.webp";
import home5 from "../../img/irrigator.jpg";
import home6 from "../../img/farm2.jpg";

import banner1 from "../../img/escudo2.png";
import banner2 from "../../img/escudo2.png";
import banner3 from "../../img/escudo2.png";
import banner4 from "../../img/escudo2.png";
import banner5 from "../../img/escudo2.png";

import logo from "../../img/nicov-title.png";

export function SwiperHome() {
	const swiperRef = useRef(null); // Crear referencia para el Swiper

	const images = [
		{
			title: "Más que un Software",
			subtitle: "La puerta al futuro de la industria agrícola. ",
			paragraph:
				"Automatiza, calcula y reporta el impacto ambiental de tu empresa.",
			anchor: "Ver el proyecto",
			href: "/www.cacta.eco",
			img: home1,
			img2: banner5,
		},
		{
			title: " Vista 360",
			subtitle: "Toda tu información en una sola pantalla",
			paragraph:
				"Simplifica tu análisis ambiental con datos claros y centralizados. Identifica fácilmente los mayores contribuyentes de tu huella ambiental.",
			anchor: "Ver el proyecto",
			href: "/home1",
			img: home3,
			img2: banner1,
		},
		{
			title: "Más eficiencia",
			subtitle: "Cero trabajo extra",
			paragraph:
				"Automatiza la captura de datos y elimina procesos manuales para que tu equipo se enfoque en lo importante.",
			anchor: "Ver el proyecto",
			href: "/home1",
			img: home4,
			img2: banner3,
		},
		{
			title: "Informes automáticos",
			subtitle: "Siempre al día con los informes",
			paragraph:
				"Genera reportes internos y externos con un clic y mantente al tanto de las regulaciones internacionales sin esfuerzo.",
			anchor: "Ver el proyecto",
			href: "/home1",
			img: home5,
			img2: banner2,
		},
		{
			title: "Mide tu impacto ambiental",
			subtitle: "12 indicadores claves",
			paragraph:
				"Herramienta sencilla para entender y comunicar tu impacto ambiental, desde el cambio climático hasta la agotamiento de recursos.",
			anchor: "Ver el proyecto",
			href: "/epd-reports",
			img: home2,
			img2: banner5,
		},
		{
			title: "Monitorea",
			subtitle: "Alertas en tiempo real",
			paragraph:
				"Configuralas, recibe notificaciones y crea planes de acción basados en datos cuantificables para una gestión sustentable.",
			anchor: "Ver el proyecto",
			href: "/home1",
			img: home6,
			img2: banner4,
		},
	];

	return (
		<Swiper
			ref={swiperRef}
			loop={true}
			speed={1000}
			parallax={true}
			spaceBetween={0}
			pagination={{
				clickable: true,
			}}
			grabCursor={true}
			modules={[Parallax, Pagination]}
			className="mySwiper cursor-pointer">
			{images.map((image, index) => (
				<SwiperSlide key={index}>
					<div className="home relative">
						<span className="swiper-fraction absolute text-6xl top-0 right-0 px-12 md:px-5 font-black text-white z-20">
							{(index + 1).toString().padStart(2, "0")}
						</span>
						<span className="swiper-pagination absolute m-auto" />
						<div className="home-swiper relative z-20">
							<article className="home-article relative w-full h-screen flex items-center justify-center md:justify-start md:pl-[6rem]">
								{/* Botones de navegación */}
								<aside className="absolute right-0 h-fit w-full bottom-0 sm:bottom-auto  m-auto flex justify-between z-[100]">
									<button
										className="swiper-button-prev"
										onClick={() =>
											swiperRef.current.swiper.slidePrev()
										}>
										<img
											src={arrowLeft.src}
											alt="arrow left"
											className="w-25 sm:block  opacity-75 px-1 text-transparent bg-clip-text hover:scale-110  active:scale-90 active:-translate-x-5 transition"
										/>
									</button>
									<button
										className="swiper-button-next"
										onClick={() =>
											swiperRef.current.swiper.slideNext()
										}>
										<img
											src={arrowRight.src}
											alt="arrow right"
											className="w-25 sm:block  opacity-75 px-1 text-transparent bg-clip-text hover:scale-105  active:scale-90 active:translate-x-5 transition"
										/>
									</button>
								</aside>
								<div className=" home-data absolute flex flex-col items-center md:items-start text-start z-10 gap-5 text-balance px-4 md:px-0 max-w-[40ch] lg:max-w-[60ch] md:top-1/2 md:transform md:-translate-y-1/2">
									<h1
										className="home-title bg-gradient-to-r from-white via-blue-500 to-blue-800 px-1 text-transparent bg-clip-text text-[3.75rem] md:text-[4vw] max-w-[15ch] leading-none tracking-tight font-black text-center md:text-left -my-4 drop-shadow-md py-4 "
										data-swiper-parallax="-400">
										{/* {image.title} */}
										<img src={logo.src} alt="logo" />
									</h1>
									<h3
										className="home-subtitle bg-gradient-to-r from-white  to-blue-800 p-1 text-transparent bg-clip-text font-black text-3xl md:text-4xl  sm:leading-10 text-center sm:text-start tracking-tight drop-shadow-md "
										data-swiper-parallax="-300">
										{image.subtitle}
									</h3>
									<hr />
									<p
										className="home-subtitle text-white font-bold text-xl md:text-2xl max-w-[40ch]  text-center md:text-start tracking-tight drop-shadow-md  "
										data-swiper-parallax="-200">
										{image.paragraph}
									</p>
								</div>
								<img
									slot="container-start"
									src={image.img.src}
									alt={`${image.img} image`}
									className="parallax-bg absolute top-0 left-0 w-full h-full object-cover object-center -z-10 brightness-[.85] blur-sm"
									data-swiper-parallax="0%"
								/>
								<div className="book-container w-full relative">
									<img
										id="img2"
										src={image.img2.src}
										alt={`${image.img2} image`}
										className="absolute md:block hidden  m-auto !-right-[25rem] object-right -z-10 p-4 w-[25vw] book"
									/>
								</div>
							</article>
						</div>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
}
