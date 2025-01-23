const Footer = () => {
	const currentYear = new Date().getFullYear()

	return (
		<footer className='bg-blue-500 text-white py-6'>
			<div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
				{/* Логотип и информация */}
				<div className='text-center md:text-left mb-4 md:mb-0'>
					<h2 className='text-lg font-bold'>Ахадов Физули Акифович</h2>
					<p className='text-sm'>Врач стоматолог</p>
				</div>

				{/* Политика конфиденциальности */}
				<div className='text-center md:text-left mb-4 md:mb-0'>
					<a
						href='/privacy-policy'
						className='text-sm text-white hover:underline'
					>
						Политика конфиденциальности
					</a>
				</div>

				{/* Копирайт и разработка */}
				<div className='text-center md:text-right'>
					<p className='text-sm'>
						© Akhadov Fizuli Akifovich. Все права защищены. {currentYear}.
					</p>
					<p className='text-sm'>
						Разработка сайта -{' '}
						<a
							href='https://killswitchdev.netlify.app/'
							target='_blank'
							rel='noopener noreferrer'
							className='hover:underline'
						>
							Шин Дмитрий
						</a>
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
