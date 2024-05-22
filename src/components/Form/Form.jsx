import { useState, useEffect } from "react";
import { toast, Toaster } from "sonner";
import close from "../../icons/x.svg";

export function Form() {
	const [dialog, setDialog] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (isMessageSuccess()) {
			toast("¡Formulario enviado con éxito! Gracias por su confianza.", {
				type: "success",
			});
			closeDialog();
		}
	}, []);

	const openDialog = () => {
		setDialog(true);
		document.body.style.overflow = "hidden";
	};

	const closeDialog = () => {
		setDialog(false);
		document.body.style.overflow = "auto";
	};

	const isMessageSuccess = () => {
		return window.location.search.includes("success=true");
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const form = event.target;
		const formData = new FormData(form);

		setIsLoading(true);

		try {
			const response = await fetch(form.action, {
				method: form.method,
				body: formData,
			});

			if (response.ok) {
				toast(
					"¡Formulario enviado con éxito! Gracias por su confianza.",
					{
						type: "success",
					}
				);
				closeDialog();
			} else {
				throw new Error("Error al enviar el formulario");
			}
		} catch (error) {
			toast.error(
				"Hubo un problema al enviar el formulario, por favor inténtelo de nuevo."
			);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<>
			<Toaster />
			<button
				onClick={openDialog}
				className="group relative mx-auto mt-5 block py-4 lg:py-8 px-6 lg:px-16 bg-white overflow-hidden transform transition hover:scale-[1.01] h-full will-change-transform rounded-3xl hover:cursor-pointer">
				<div class="absolute top-0 bottom-0 right-0 w-[max(30em,50%)] opacity-80 -z-10">
					<svg
						class="absolute inset-0 w-full h-full"
						viewBox="0 0 1 1"
						preserveAspectRatio="none">
						<defs>
							<linearGradient
								id="copilot-workspace"
								x1="0"
								y1="1"
								x2="1"
								y2="0">
								<stop offset="0" stop-color="#d2e0d7"></stop>
								<stop offset="1" stop-color="#d2e0d7"></stop>
							</linearGradient>
						</defs>
						<path
							d="M0 1 Q 0.8 0.8 1 0 L 1 1 Z"
							fill="url(#copilot-workspace)"></path>
					</svg>
					<div class="absolute inset-0 bg-white transition duration-300 group-hover:translate-x-[120%] will-change-transform"></div>
				</div>

				<span className="z-50"> Enviar mensaje</span>
			</button>
			{dialog && (
				<dialog
					open
					className="backdrop-blur  flex items-center justify-center fixed top-0 bg-black/20 w-full h-full ">
					<section className="bg-white flex items-center justify-center ">
						<div className="lg:grid h-full min-h-full lg:min-h-screen lg:grid-cols-12 w-full px-4 md:px-0">
							<aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
								<button
									onClick={closeDialog}
									class="cursor-pointer flex absolute top-20 right-1 md:right-10  duration-1000 hover:scale-110 active:scale-100 items-center justify-center  p-2 rounded-full drop-shadow-md z-50 bg-white"
									title="Go Back">
									<img src={close.src} alt="" />
								</button>
								<img
									alt=""
									src="https://belartestudio.com/cdn/shop/collections/EarthyArtistic-ArtStrokes-BAS02514010-Black-3.jpg?v=1699362913"
									className="absolute inset-0 h-full w-full object-cover hidden lg:block"
								/>
							</aside>

							<main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
								<div className="max-w-xl lg:max-w-3xl">
									<h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
										Gracias por tu interés 🏗️
									</h1>

									<p className="mt-4 leading-relaxed text-gray-500">
										Para poder atenderte mejor, por favor
										llena el siguiente formulario.
									</p>

									<form
										onSubmit={handleSubmit}
										method="POST"
										action="https://formsubmit.co/ezequielstom@gmail.com"
										className="mt-8 grid grid-cols-6 gap-6">
										{/* <input
											type="hidden"
											name="_subject"
											value="🏗️ LOT | 📩 Nuevo Mensaje!"
										/>
										<input
											type="hidden"
											name="_autoresponse"
											value={toast_message}></input>
										<input
											type="hidden"
											name="_next"
											value="https://ezestom.github.io/portfolio/"
										/>
										<input
											type="hidden"
											name="_captcha"
											value="false"
										/> */}
										<div className="col-span-6 sm:col-span-3">
											<label className="block text-sm font-medium text-gray-700">
												Nombre
												<input
													type="text"
													name="name"
													id="name"
													placeholder="John"
													required
													className="py-1 px-2 mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
												/>
											</label>
										</div>

										<div className="col-span-6 sm:col-span-3">
											<label className="block text-sm font-medium text-gray-700">
												Apellido
												<input
													type="text"
													name="lastName"
													id="lastName"
													placeholder="Doe"
													required
													className="py-1 px-2 mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
												/>
											</label>
										</div>

										<div className="col-span-6">
											<label className="block text-sm font-medium text-gray-700">
												Email
												<input
													type="email"
													name="email"
													id="email"
													required
													placeholder="ejemplo@lotarquitectos.com"
													className="py-1 px-2 mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
												/>
											</label>
										</div>

										<div className="col-span-6 sm:col-span-3">
											<label className="block text-sm font-medium text-gray-700">
												{" "}
												Empresa
												<input
													type="text"
													name="company"
													id="comppany"
													placeholder="LOT Arquitectos S.A."
													required
													className="py-1 px-2 mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
												/>
											</label>
										</div>

										<div className="col-span-6 sm:col-span-3">
											<label className="block text-sm font-medium text-gray-700">
												Asunto
												<input
													name="case"
													id="case"
													required
													placeholder="Consulta de proyecto"
													className="py-1 px-2 mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
												/>
											</label>
										</div>

										<div className="col-span-6">
											<fieldset>
												<legend className="block text-sm font-medium text-gray-700">
													Mensaje
												</legend>

												<div className="mt-1 bg-white rounded-md shadow-sm">
													<textarea
														name="message"
														id="message"
														required
														className="w-full border-gray-200 rounded-md bg-white text-sm text-gray-700 shadow-sm p-2 max-h-[100px]"
														placeholder="Escribe aquí tu mensaje"></textarea>
												</div>
											</fieldset>
										</div>

										<div className="col-span-6 sm:flex sm:items-center sm:gap-4">
											<button className="inline-block shrink-0 rounded-md border border-[#d2e0d7] bg-[#d2e0d7] px-12 py-3 text-sm font-medium text-black transition hover:bg-transparent  focus:outline-none focus:ring active:text-green-600">
												Enviar mi consulta
											</button>

											<p className="mt-4 text-sm text-gray-500 sm:mt-0">
												A la brevedad nos pondremos en
												contacto.
											</p>
										</div>
									</form>
								</div>
							</main>
						</div>
					</section>
				</dialog>
			)}
		</>
	);
}
