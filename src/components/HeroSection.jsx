const HeroSection = () => {
	return (
		<div className='relative bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 min-h-screen flex items-center'>
			<div className='container mx-auto flex flex-col-reverse md:flex-row items-center px-6 md:px-12 lg:px-24'>
				{/* Текстовая часть */}
				<div className='text-center md:text-left'>
					<p className='text-sm text-gray-700'>
						Врач стоматолог-терапевт, ортопед
					</p>
					<h1 className='text-4xl md:text-5xl font-bold text-gray-800 mt-2'>
						Ахадов Физули Акифович
					</h1>
					<p className='mt-4 text-lg text-gray-600'>
						Лечу зубки
						<br />
						Создаю улыбки мечты
					</p>
					<button className='mt-6 bg-blue-500 text-white py-2 px-6 rounded-lg text-lg hover:bg-blue-600'>
						Записаться на прием
					</button>
				</div>

				{/* Фото */}
				<div className='mb-6 md:mb-0 md:ml-12'>
					<img
						src='https://via.placeholder.com/300x400'
						alt='Доктор Ахадов'
						className='rounded-lg shadow-lg'
					/>
				</div>
			</div>
		</div>
	)
}

export default HeroSection
