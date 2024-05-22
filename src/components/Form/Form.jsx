import { useState, useEffect } from "react";
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
			<button
				onClick={openDialog}
				className="mt-8 inline-block rounded-xl border-2 border-green-500 px-12 py-3 text-sm font-medium text-green-500 hover:bg-green-500 hover:text-white focus:outline-none focus:ring active:bg-green-500 transition">
				Enviar mensaje
			</button>
			{dialog && (
				<dialog
					open
					className="backdrop-blur bg-transparent h-full flex items-center justify-center fixed top-0">
					<section className="bg-white flex items-center justify-center    ">
						<div className="lg:grid lg:min-h-screen lg:grid-cols-12 w-full">
							<aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
								<button
									onClick={closeDialog}
									class="cursor-pointer flex absolute top-20 right-10  duration-1000 hover:scale-110 active:scale-100 items-center justify-center  p-2 rounded-full drop-shadow-md z-50 bg-white"
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
										action="#"
										className="mt-8 grid grid-cols-6 gap-6">
										<div className="col-span-6 sm:col-span-3">
											<label
												htmlFor="FirstName"
												className="block text-sm font-medium text-gray-700">
												Nombre
											</label>

											<input
												type="text"
												id="FirstName"
												name="first_name"
												className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
											/>
										</div>

										<div className="col-span-6 sm:col-span-3">
											<label
												htmlFor="LastName"
												className="block text-sm font-medium text-gray-700">
												Apellido
											</label>

											<input
												type="text"
												id="LastName"
												name="last_name"
												className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
											/>
										</div>

										<div className="col-span-6">
											<label
												htmlFor="Email"
												className="block text-sm font-medium text-gray-700">
												{" "}
												Email{" "}
											</label>

											<input
												type="email"
												id="Email"
												name="email"
												className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
											/>
										</div>

										<div className="col-span-6 sm:col-span-3">
											<label
												htmlFor="Password"
												className="block text-sm font-medium text-gray-700">
												{" "}
												Empresa
											</label>

											<input
												type="password"
												id="Password"
												name="password"
												className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
											/>
										</div>

										<div className="col-span-6 sm:col-span-3">
											<label
												htmlFor="PasswordConfirmation"
												className="block text-sm font-medium text-gray-700">
												Asunto
											</label>

											<input
												type="password"
												id="PasswordConfirmation"
												name="password_confirmation"
												className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
											/>
										</div>

										<div className="col-span-6">
											<label
												htmlFor="MarketingAccept"
												className="flex gap-4">
												<input
													type="checkbox"
													id="MarketingAccept"
													name="marketing_accept"
													className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
												/>

												<span className="text-sm text-gray-700">
													I want to receive emails
													about events, product
													updates and company
													announcements.
												</span>
											</label>
										</div>

										<div className="col-span-6">
											<p className="text-sm text-gray-500">
												By creating an account, you
												agree to our
												<a
													href="#"
													className="text-gray-700 underline">
													{" "}
													terms and conditions{" "}
												</a>
												and
												<a
													href="#"
													className="text-gray-700 underline">
													privacy policy
												</a>
												.
											</p>
										</div>

										<div className="col-span-6 sm:flex sm:items-center sm:gap-4">
											<button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
												Create an account
											</button>

											<p className="mt-4 text-sm text-gray-500 sm:mt-0">
												Already have an account?
												<a
													href="#"
													className="text-gray-700 underline">
													Log in
												</a>
												.
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
