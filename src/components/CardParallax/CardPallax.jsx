import { useRef, useEffect } from "react";
import "./CardParallax.css";
import declaraciones from "../../img/declaraciones.webp";

const CardParallax = () => {
	const panelRef = useRef(null);
	const containerRef = useRef(null);

	useEffect(() => {
		const myPanel = panelRef.current;
		const subpanel = containerRef.current;

		let mouseX, mouseY;
		const transformAmount = 5;

		const transformPanel = (mouseEvent) => {
			mouseX = mouseEvent.pageX;
			mouseY = mouseEvent.pageY;

			const centerX = myPanel.offsetLeft + myPanel.clientWidth / 2;
			const centerY = myPanel.offsetTop + myPanel.clientHeight / 2;

			const percentX = (mouseX - centerX) / (myPanel.clientWidth / 2);
			const percentY = -((mouseY - centerY) / (myPanel.clientHeight / 2));

			subpanel.style.transform = `perspective(500px) rotateY(${
				percentX * transformAmount
			}deg) rotateX(${percentY * transformAmount}deg)`;
		};

		const handleMouseEnter = () => {
			setTimeout(() => {
				subpanel.style.transition = "";
			}, 100);
			subpanel.style.transition = "transform 0.2s";
		};

		const handleMouseLeave = () => {
			subpanel.style.transition = "transform 0.2s";
			setTimeout(() => {
				subpanel.style.transition = "";
			}, 100);

			subpanel.style.transform =
				"perspective(400px) rotateY(0deg) rotateX(0deg)";
		};

		myPanel.addEventListener("mousemove", transformPanel);
		myPanel.addEventListener("mouseenter", handleMouseEnter);
		myPanel.addEventListener("mouseleave", handleMouseLeave);

		return () => {
			myPanel.removeEventListener("mousemove", transformPanel);
			myPanel.removeEventListener("mouseenter", handleMouseEnter);
			myPanel.removeEventListener("mouseleave", handleMouseLeave);
		};
	}, []);

	return (
		<div className="main md:pt-0 pt-28">
			<div className="main-inner" id="panel" ref={panelRef}>
				<div
					className="main-box group"
					id="panel-container"
					ref={containerRef}>
					<div className="img group-hover:scale-105 transition-all group-hover:drop-shadow-md group-hover:translate-y-2">
						<img src={declaraciones.src} alt="Wizard-info" />
					</div>
					<div className="title">
						<h2 className="font-bold opacity-75 text-2xl tracking-tighter ">
							Nuestro software incluye Declaraciones Ambientales
							de Producto
						</h2>
					</div>
					<div className="text">
						<p>
							Muestra el impacto ambiental de un material en todo
							su ciclo de vida, desde la extracción hasta la
							manufactura. Esto te permite tomar decisiones más
							informadas, optimizar procesos y comunicar de manera
							transparente el desempeño ambiental de tus
							productos.
							<strong>
								{" "}
								<br />
								Con la declaración ambiental , no solo cumples
								con regulaciones, sino que también avanzas hacia
								una producción más sostenible y eficiente.
							</strong>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardParallax;
