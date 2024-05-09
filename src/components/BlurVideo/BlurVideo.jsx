import { useState } from "react";
import youtube from "../../img/youtube.png";
import close from "../../icons/x.svg";
import video from "../video/video-hero.mp4";

export function BlurVideo() {
	const [isOpen, setIsOpen] = useState(false);

	const openDialog = () => {
		setIsOpen(true);
		// stop scroll
		document.body.style.overflow = "hidden";
	};
	const closeDialog = () => {
		setIsOpen(false);
		// enable scroll
		document.body.style.overflow = "auto";
	};

	return (
		<article className="w-full h-full">
			<button onClick={openDialog} className="relative">
				<video
					className=" rounded-3xl  app-video cursor-crosshair"
					src={video}
					loop
					muted
					autoPlay></video>
				<img
					src={youtube.src}
					className="absolute w-12 youtube top-0 bottom-0 left-0 right-0 m-auto hover:scale-105 transition"
					alt="logo youtube"
				/>
			</button>
			{isOpen && (
				<dialog open className=" z-50 relative ">
					<iframe
						className="fixed -translate-x-[25%] w-full md:min-w-[850px] p-1 aspect-video rounded-3xl shadow-2xl  top-0 bottom-0 left-0"
						src="https://www.youtube.com/embed/fv2hsVDW-fU?si=pAw1x73-DRnvHlCO&autoplay=1"
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen></iframe>

					<button
						className=" fixed -top-12 w-12 mx-auto z-50"
						onClick={closeDialog}>
						<img
							src={close.src}
							alt="close button"
							className="close-button"
						/>
					</button>
				</dialog>
			)}
		</article>
	);
}
