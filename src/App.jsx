import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Home, About, Services, Contact, NotFound } from './pages'

const App = () => {
	return (
		<Router>
			<div className='min-h-screen flex flex-col'>
				<header className='bg-blue-500 text-white py-4'>
					<nav className='container mx-auto flex justify-between'>
						<h1 className='text-xl font-bold'>Стоматология Ахадова</h1>
						<ul className='flex space-x-4'>
							<li>
								<a href='/' className='hover:underline'>
									Главная
								</a>
							</li>
							<li>
								<a href='/about' className='hover:underline'>
									О докторе
								</a>
							</li>
							<li>
								<a href='/services' className='hover:underline'>
									Услуги
								</a>
							</li>
							<li>
								<a href='/contact' className='hover:underline'>
									Контакты
								</a>
							</li>
						</ul>
					</nav>
				</header>

				<main className='flex-grow'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/about' element={<About />} />
						<Route path='/services' element={<Services />} />
						<Route path='/contact' element={<Contact />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</main>

				<footer className='bg-gray-800 text-white py-4 text-center'>
					&copy; 2025 Ахадов Физули Акифович. Все права защищены.
				</footer>
			</div>
		</Router>
	)
}

export default App
