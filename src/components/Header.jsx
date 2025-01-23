import { useState } from 'react'

const Header = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	return (
		<header className='bg-white shadow-md'>
			<div className='container mx-auto flex justify-between items-center px-6'>
				{/* Логотип */}
				<div className='flex items-center space-x-2'>
					<img
						src='https://res.cloudinary.com/pomegranitedesign/image/upload/v1737621939/fizuli/logo.jpg'
						alt='Логотип'
						className='w-30'
					/>
				</div>

				{/* Центрированное меню */}
				<nav className='hidden md:flex space-x-6 flex-1 justify-center'>
					<a href='#about' className='text-gray-700 hover:text-blue-500'>
						Обо мне
					</a>
					<a href='#principles' className='text-gray-700 hover:text-blue-500'>
						Принципы моей работы
					</a>
					{/* <a href='#portfolio' className='text-gray-700 hover:text-blue-500'>
						Мои работы
					</a> */}
					{/* <a href='#contact' className='text-gray-700 hover:text-blue-500'>
						Контакты
					</a> */}
				</nav>

				{/* Ссылка справа */}
				<div className='hidden md:block'>
					{/* <a href='#certificates' className='text-gray-700 hover:text-blue-500'>
						Дипломы и сертификаты
					</a> */}
					<a href='#contact' className='text-gray-700 hover:text-blue-500'>
						Контакты
					</a>
				</div>

				{/* Кнопка для мобильного меню */}
				<button
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					className='md:hidden text-gray-700 hover:text-blue-500 focus:outline-none'
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth='2'
						stroke='currentColor'
						className='w-6 h-6'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M4 6h16M4 12h16M4 18h16'
						/>
					</svg>
				</button>
			</div>

			{/* Мобильное меню */}
			{isMobileMenuOpen && (
				<nav className='md:hidden bg-white shadow-md'>
					<div className='flex flex-col space-y-4 p-4'>
						<a
							href='#about'
							className='text-gray-700 hover:text-blue-500'
							onClick={() => setIsMobileMenuOpen(false)}
						>
							Обо мне
						</a>
						{/* <a
							href='#services'
							className='text-gray-700 hover:text-blue-500'
							onClick={() => setIsMobileMenuOpen(false)}
						>
							Услуги
						</a> */}
						{/* <a
							href='#portfolio'
							className='text-gray-700 hover:text-blue-500'
							onClick={() => setIsMobileMenuOpen(false)}
						>
							Мои работы
						</a> */}
						<a
							href='#contact'
							className='text-gray-700 hover:text-blue-500'
							onClick={() => setIsMobileMenuOpen(false)}
						>
							Контакты
						</a>
						{/* <a
							href='#certificates'
							className='text-gray-700 hover:text-blue-500'
							onClick={() => setIsMobileMenuOpen(false)}
						>
							Дипломы и сертификаты
						</a> */}
					</div>
				</nav>
			)}
		</header>
	)
}

export default Header
