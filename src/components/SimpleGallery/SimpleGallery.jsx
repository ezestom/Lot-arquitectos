import { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

export function SimpleGallery(props) {
	useEffect(() => {
		let lightbox = new PhotoSwipeLightbox({
			gallery: "#" + props.galleryID,
			children: "a",
			pswpModule: () => import("photoswipe"),
		});
		lightbox.init();

		return () => {
			lightbox.destroy();
			lightbox = null;
		};
	}, []);

	return (
		<div
			className="pswp-gallery w-full h-full grid grid-cols-2  gap-1 md:gap-4"
			id={props.galleryID}>
			{props.images.map((image, index) => (
				<a
					href={image.largeURL}
					data-pswp-width={image.width}
					data-pswp-height={image.height}
					data-cropped="true"
					key={props.galleryID + "-" + index}
					target="_blank"
					rel="noreferrer"
					className="object-cover aspect-square">
					<img
						src={image.thumbnailURL}
						alt=""
						className="rounded-3xl aspect-square w-full md:w-[250px] object-cover object-center hover:scale-105 transition-transform duration-300 ease-in-out"
					/>
				</a>
			))}
		</div>
	);
}
