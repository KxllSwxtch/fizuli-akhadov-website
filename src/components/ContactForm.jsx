const ContactForm = () => {
	return (
		<section className='relative bg-blue-50 py-12'>
			<div className='container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between'>
				{/* Фон */}
				<div
					className='absolute inset-0 bg-cover bg-center opacity-20'
					style={{
						backgroundImage: `url('https://res.cloudinary.com/pomegranitedesign/image/upload/v1737600134/fizuli/bg.jpg')`, // Замените на реальный фон
					}}
				></div>

				{/* Форма */}
				<div className='relative bg-white shadow-lg rounded-lg p-8 max-w-md w-full z-10 m-auto'>
					<p className='text-blue-600 text-lg font-semibold mb-2'>
						80% заболеваний зубов при своевременном лечении можно обойтись до 5
						раз дешевле.
					</p>
					<h3 className='text-xl font-bold text-blue-600 mb-6'>
						Запишитесь на бесплатную консультацию уже сегодня!
					</h3>

					{/* Поля формы */}
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
							Записаться на прием
						</button>
					</form>

					<p className='mt-4 text-xs text-gray-500'>
						Заполняя данную форму, вы соглашаетесь с{' '}
						<a href='/privacy-policy' className='text-blue-500 hover:underline'>
							политикой конфиденциальности
						</a>
						.
					</p>
				</div>
			</div>
		</section>
	)
}

export default ContactForm
