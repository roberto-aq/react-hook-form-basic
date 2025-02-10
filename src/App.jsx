import { useForm } from 'react-hook-form';

function App() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const onSubmit = handleSubmit(data => {
		console.log(data);
		reset();
		alert('Formulario enviado con éxito');
	});

	return (
		<main className='container h-screen grid place-items-center  mx-auto'>
			<form
				className='flex flex-col gap-5 items-center border border-slate-700 rounded-md w-full max-w-md px-8 py-10 '
				onSubmit={onSubmit}
			>
				<div className='space-y-4'>
					<h1 className='text-2xl font-bold text-center'>
						Únete a la Comunidad
					</h1>
					<p className='text-slate-500'>
						Regístrate para unirte a nuestra comunidad y recibir las
						últimas noticias y actualizaciones.
					</p>
				</div>

				<div className='space-y-3 w-full'>
					<div className='flex flex-col gap-2'>
						<label
							htmlFor='name'
							className='text-sm text-slate-700 font-semibold'
						>
							Nombre Completo:
						</label>
						<input
							type='text'
							id='name'
							className={`border  rounded-sm px-2 py-3 text-sm outline-none font-medium text-slate-600   ${
								errors.name ? 'border-red-500' : 'border-slate-500'
							}`}
							placeholder='Juan Perez'
							{...register('name', {
								required: 'El nombre completo es requerido',
							})}
						/>
						{errors.name && (
							<p className='text-red-500 font-medium text-sm w-full'>
								{errors.name.message}
							</p>
						)}
					</div>

					<div className='flex flex-col gap-2 w-full'>
						<label
							htmlFor='email'
							className='text-sm text-slate-700 font-semibold'
						>
							Correo Electrónico:
						</label>
						<input
							type='email'
							id='email'
							className={`border  rounded-sm px-2 py-3 text-sm outline-none font-medium text-slate-600 ${
								errors.email ? 'border-red-500' : 'border-slate-500'
							}`}
							placeholder='juan@gmail.com'
							{...register('email', {
								required: 'El correo electrónico es requerido',
								pattern: {
									value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
									message: 'El correo no es válido',
								},
							})}
						/>
						{errors.email && (
							<p className='text-red-500 font-medium text-sm w-full'>
								{errors.email.message}
							</p>
						)}
					</div>

					<div className='flex flex-col gap-2 w-full'>
						<label
							htmlFor='password'
							className='text-sm text-slate-700 font-semibold'
						>
							Contraseña
						</label>
						<input
							type='password'
							id='password'
							className={`border  rounded-sm px-2 py-3 text-sm outline-none font-medium text-slate-600 ${
								errors.password
									? 'border-red-500'
									: 'border-slate-500'
							}`}
							placeholder='*******'
							{...register('password', {
								required: 'La contraseña es requerida',
							})}
						/>
						{errors.password && (
							<p className='text-red-500 font-medium text-sm w-full'>
								{errors.password.message}
							</p>
						)}
					</div>
				</div>

				<div className='flex gap-3 items-center w-full'>
					<input
						type='checkbox'
						id='terms'
						className='accent-stone-800 cursor-pointer rounded-sm w-5 h-5'
						{...register('terms', {
							required: 'Debes aceptar los términos y condiciones',
						})}
					/>
					<label
						htmlFor='terms'
						className='text-sm text-slate-700 font-semibold cursor-pointer leading-5'
					>
						He leído y acepto los{' '}
						<a
							href='#'
							className='text-blue-700 underline capitalize'
						>
							Términos & condiciones
						</a>{' '}
						y la
						<a href='#' className='text-blue-700 underline'>
							{' '}
							política de privacidad.
						</a>
					</label>
				</div>

				{errors.terms && (
					<p className='text-red-500 font-medium text-sm w-full'>
						{errors.terms.message}
					</p>
				)}

				<div className='flex flex-col gap-3 w-full'>
					<button
						type='submit'
						className='bg-stone-800 text-white py-3 rounded-md font-medium cursor-pointer'
					>
						Continuar
					</button>
					<button
						type='button'
						className='underline font-medium cursor-pointer'
					>
						Cancelar
					</button>
				</div>
			</form>
		</main>
	);
}

export default App;
