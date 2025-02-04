function App() {
	return (
		<main className='container h-screen grid place-items-center  mx-auto'>
			<form className='flex flex-col gap-5 items-center border border-slate-700 rounded-md w-full max-w-md px-8 py-10 '>
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
							className={`border  rounded-sm px-2 py-3 text-sm outline-none font-medium text-slate-600 `}
							placeholder='Juan Perez'
						/>
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
							className={`border  rounded-sm px-2 py-3 text-sm outline-none font-medium text-slate-600 `}
							placeholder='juan@gmail.com'
						/>
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
							className={`border  rounded-sm px-2 py-3 text-sm outline-none font-medium text-slate-600`}
							placeholder='*******'
						/>
					</div>
				</div>

				<div className='flex gap-3 items-center w-full'>
					<input
						type='checkbox'
						id='terms'
						className='accent-stone-800 cursor-pointer rounded-sm w-5 h-5'
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
