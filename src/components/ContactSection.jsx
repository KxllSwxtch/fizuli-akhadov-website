import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import {
	faVk,
	faTelegram,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons'

const ContactSection = () => {
	const stars = (full, half = false) => {
		const fullStars = Array(full)
			.fill(0)
			.map((_, i) => (
				<FontAwesomeIcon
					key={`full-${i}`}
					icon={faStar}
					className='text-blue-500'
				/>
			))
		const halfStar = half ? (
			<FontAwesomeIcon
				key='half'
				icon={faStarHalfAlt}
				className='text-blue-500'
			/>
		) : null

		return [...fullStars, halfStar]
	}

	return (
		<section className='bg-gray-50 py-12'>
			<div className='container mx-auto px-6 lg:px-12'>
				<h2 className='text-3xl font-bold text-blue-600 mb-8'>
					Как меня найти
				</h2>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
					{/* Адреса и рейтинги */}
					<div>
						<p className='text-lg font-semibold mb-4'>
							Я работаю в Москве по двум адресам:
						</p>
						<div className='mb-6'>
							<h3 className='font-bold text-blue-600'>
								Стоматология Денталия:
							</h3>
							<p>Куркино, Соколово-мещецкая дом 25</p>
							<div className='flex space-x-6 mt-2'>
								<div>
									<p className='font-semibold text-gray-700'>Оборудование</p>
									<div className='flex space-x-1'>{stars(5, true)}</div>
								</div>
								<div>
									<p className='font-semibold text-gray-700'>Комфорт</p>
									<div className='flex space-x-1'>{stars(5)}</div>
								</div>
								<div>
									<p className='font-semibold text-gray-700'>Цена</p>
									<div className='flex space-x-1'>{stars(4, true)}</div>
								</div>
							</div>
						</div>

						<div>
							<h3 className='font-bold text-blue-600'>
								Центр функциональной стоматологии:
							</h3>
							<p>Зеленоград, корпус 1557</p>
							<div className='flex space-x-6 mt-2'>
								<div>
									<p className='font-semibold text-gray-700'>Оборудование</p>
									<div className='flex space-x-1'>{stars(5)}</div>
								</div>
								<div>
									<p className='font-semibold text-gray-700'>Комфорт</p>
									<div className='flex space-x-1'>{stars(4)}</div>
								</div>
								<div>
									<p className='font-semibold text-gray-700'>Цена</p>
									<div className='flex space-x-1'>{stars(4, true)}</div>
								</div>
							</div>
						</div>
					</div>

					{/* Карта */}
					<div>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.202160012213!2d37.622504116292266!3d55.75582628055559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQ1JzIwLjkiTiAzN8KwMzcnMjUuMiJF!5e0!3m2!1sen!2sru!4v1614075823707!5m2!1sen!2sru'
							width='100%'
							height='300'
							style={{ border: 0 }}
							allowFullScreen=''
							loading='lazy'
						></iframe>
					</div>
				</div>

				{/* Контакты */}
				<div className='mt-8 text-center'>
					<p className='text-lg font-semibold'>
						Также вы можете найти меня в соцсетях:
					</p>
					<div className='flex justify-center space-x-6 mt-4'>
						<a
							href='#'
							target='_blank'
							rel='noopener noreferrer'
							className='text-blue-500'
						>
							<FontAwesomeIcon icon={faVk} size='2x' />
						</a>
						<a
							href='https://t.me/+77758247097'
							target='_blank'
							rel='noopener noreferrer'
							className='text-blue-500'
						>
							<FontAwesomeIcon icon={faTelegram} size='2x' />
						</a>
						<a
							href='https://www.instagram.com/dr.makhdi/'
							target='_blank'
							rel='noopener noreferrer'
							className='text-blue-500'
						>
							<FontAwesomeIcon icon={faInstagram} size='2x' />
						</a>
					</div>
					<p className='mt-4 text-gray-600'>
						E-mail:{' '}
						<a
							href='mailto:fizuli.akhadov@gmail.com'
							className='text-blue-500 hover:underline'
						>
							fizuli.akhadov@gmail.com
						</a>
					</p>
				</div>
			</div>
		</section>
	)
}

export default ContactSection
