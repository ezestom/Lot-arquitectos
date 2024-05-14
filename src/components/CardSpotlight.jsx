import { useRef, useState } from "react";
import close from "../icons/x.svg";

const CardSpotlight = ({ header, main, number, img }) => {
	const divRef = useRef(null);
	const [isFocused, setIsFocused] = useState(false);
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [opacity, setOpacity] = useState(0);
	const [dialogOpen, setDialogOpen] = useState(false);

	const handleMouseMove = (e) => {
		if (!divRef.current || isFocused) return;

		const div = divRef.current;
		const rect = div.getBoundingClientRect();

		setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
	};

	const handleFocus = () => {
		setIsFocused(true);
		setOpacity(1);
	};

	const handleBlur = () => {
		setIsFocused(false);
		setOpacity(0);
	};

	const handleMouseEnter = () => {
		setOpacity(1);
	};

	const handleMouseLeave = () => {
		setOpacity(0);
	};

	const toggleDialog = () => {
		setDialogOpen(!dialogOpen); // Invierte el estado de dialogOpen
		// document.body.style.overflow = dialogOpen ? "auto" : "hidden";
	};

	return (
		<button
			onClick={toggleDialog}
			className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[3rem] bg-white min-h-[375px] focus:outline-none ">
			<p className="text-xl md:text-[10vw] opacity-15 font-bold text-white bg-black/50 rounded-full  size-60 flex items-center justify-center mx-auto">
				{number}
			</p>
			<div
				ref={divRef}
				onMouseMove={handleMouseMove}
				onFocus={handleFocus}
				onBlur={handleBlur}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				className="absolute inset-0">
				<div
					className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
					style={{
						opacity,
						background: `radial-gradient(150px circle at ${position.x}px ${position.y}px, #d2e0d7 , transparent 50%)`,
					}}
				/>
				<article className="h-full w-full flex flex-col justify-between py-12">
					<header className="text-2xl m-auto md:text-4xl font-bold text-black">
						{header}
					</header>
				</article>
			</div>
			{dialogOpen && (
				<dialog
					open
					className="backdrop-blur-[.15rem] bg-transparent flex rounded-[3rem] h-full ">
					<aside className="bg-white text-black rounded-[3rem] h-full px-10 flex flex-col justify-between p-5 ">
						<button onClick={toggleDialog} className=" mx-auto ">
							<img
								src={close.src}
								alt="close button"
								className="max-w-10 opacity-25"
							/>
						</button>
						<header className=" text-xl md:text-xl font-bold text-white bg-black/50 rounded-xl py-2 px-4 ">
							{header}
						</header>
						<main className="text-xl font-semibold md:text-[1vw] py-10 flex-1  ">
							{main}
						</main>
					</aside>
				</dialog>
			)}
		</button>
	);
};

export default CardSpotlight;
