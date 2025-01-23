const AboutSection = () => {
	return (
		<section className='bg-gray-50 py-12' id='about'>
			<div className='container mx-auto px-6 lg:px-12'>
				<h2 className='text-3xl font-bold text-blue-600 mb-8 text-center'>
					Немного обо мне
				</h2>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					{/* Левый блок - Направление деятельности */}
					<div className='bg-white shadow-md rounded-lg p-6 border border-blue-200'>
						<h3 className='text-xl font-semibold text-blue-600 mb-4'>
							Основное направление деятельности
						</h3>
						<ul className='text-gray-700 space-y-2'>
							<li>
								— Лечение кариеса и его осложнений (пульпитов, периодонтитов)
							</li>
						</ul>
					</div>

					{/* Правый блок - Образование */}
					<div className='bg-white shadow-md rounded-lg p-6 border border-blue-200'>
						<h3 className='text-xl font-semibold text-blue-600 mb-4'>
							Образование
						</h3>
						<ul className='text-gray-700 space-y-2'>
							<li>УНИВЕРСИТЕТ</li>
							{/* <li>
								Клиническая ординатура в Центральной Государственной Медицинской
								Академии Управления Делами Президента
							</li> */}
						</ul>
					</div>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'>
					{/* Левый блок - Фото */}
					<div className='flex justify-center items-center'>
						<img
							src='https://res.cloudinary.com/pomegranitedesign/image/upload/v1737597176/fizuli/photo.jpg'
							alt='Доктор'
							className='rounded-lg shadow-lg'
						/>
					</div>

					{/* Правый блок - Повышение квалификации */}
					<div className='bg-white shadow-md rounded-lg p-6 border border-blue-200'>
						<h3 className='text-xl font-semibold text-blue-600 mb-4'>
							Постоянно повышаю свою квалификацию, участвую в различных
							конференциях и семинарах
						</h3>
						<ul className='text-gray-700 space-y-2'>
							ИНФА ПО ПОВЫШЕНИЮ КВАЛИФИКАЦИИ
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutSection
