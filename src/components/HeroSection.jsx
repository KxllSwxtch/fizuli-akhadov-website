import { useState } from 'react'

const HeroSection = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)

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
						Вылечу ваши зубы
						<br />
						Создаю улыбки мечты
					</p>
					<button
						onClick={() => setIsModalOpen(true)}
						className='mt-6 bg-blue-500 text-white py-2 px-6 rounded-lg text-lg hover:bg-blue-600'
					>
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

			{/* Модальное окно */}
			{isModalOpen && (
				<div className='fixed inset-0 bg-blue-100 flex items-center justify-center z-50'>
					<div className='bg-white rounded-lg p-8 w-11/12 md:w-1/3 shadow-lg'>
						<h2 className='text-xl font-bold text-gray-800 mb-4'>
							Запись на прием
						</h2>
						<form className='space-y-4'>
							<div>
								<label
									htmlFor='name'
									className='block text-sm font-medium text-gray-700'
								>
									Ваше имя *
								</label>
								<input
									type='text'
									id='name'
									className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
									placeholder='Введите ваше имя'
									required
								/>
							</div>
							<div>
								<label
									htmlFor='phone'
									className='block text-sm font-medium text-gray-700'
								>
									Ваш телефон *
								</label>
								<input
									type='tel'
									id='phone'
									className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
									placeholder='Введите ваш телефон'
									required
								/>
							</div>
							<div>
								<label
									htmlFor='message'
									className='block text-sm font-medium text-gray-700'
								>
									Что вас беспокоит?
								</label>
								<textarea
									id='message'
									rows='3'
									className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
									placeholder='Опишите вашу проблему'
								></textarea>
							</div>
							<button
								type='submit'
								className='w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200'
							>
								Отправить
							</button>
						</form>
						<button
							onClick={() => setIsModalOpen(false)}
							className='absolute top-4 right-4 text-gray-400 hover:text-gray-800'
						>
							✖
						</button>
					</div>
				</div>
			)}
		</div>
	)
}

export default HeroSection
