import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import {
	faVk,
	faTelegram,
	faInstagram,
	faWhatsapp,
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
		<section className='bg-gray-50 py-12' id='contact'>
			<div className='container mx-auto px-6 lg:px-12'>
				<h2 className='text-3xl font-bold text-blue-600 mb-8'>
					Как меня найти
				</h2>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
					{/* Адреса и рейтинги */}
					<div>
						<p className='text-lg font-semibold mb-4'>
							Я работаю в г. Алматы по данному адресу:
						</p>
						<div className='mb-6'>
							<h3 className='font-bold text-blue-600'>
								Стоматология OnlyDent:
							</h3>
							<p>Г. Алматы, Самал-1, дом 32</p>
							<div className='flex flex-wrap space-x-6 mt-2'>
								<div>
									<p className='font-semibold text-gray-700'>Оборудование</p>
									<div className='flex space-x-1'>{stars(5, true)}</div>
								</div>
								<div>
									<p className='font-semibold text-gray-700'>Комфорт</p>
									<div className='flex space-x-1'>{stars(5)}</div>
								</div>
								<div>
									<p className='font-semibold text-gray-700 mt-2'>Цена</p>
									<div className='flex space-x-1'>{stars(4, true)}</div>
								</div>
							</div>
						</div>

						{/* <div>
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
						</div> */}
					</div>

					{/* Карта */}
					<div>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.0572376607256!2d76.95156387617519!3d43.22925957974698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836f8e1bd4fe19%3A0x830b4daa0c277a1d!2sSamal-2%20Dom%2032!5e0!3m2!1sen!2skr!4v1737622733684!5m2!1sen!2skr'
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
							href='https://vk.com/fizuli_ahadov'
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
							href='https://www.instagram.com/onlydent_kz'
							target='_blank'
							rel='noopener noreferrer'
							className='text-red-500'
						>
							<FontAwesomeIcon icon={faInstagram} size='2x' />
						</a>
						<a
							href='https://api.whatsapp.com/send/?phone=77758247097'
							target='_blank'
							rel='noopener noreferrer'
							className='text-green-500'
						>
							<FontAwesomeIcon icon={faWhatsapp} size='2x' />
						</a>
					</div>
					<p className='mt-4 text-gray-600'>
						E-mail:{' '}
						<a
							href='mailto:fizuli.akhadov@gmail.com'
							className='text-blue-500 hover:underline'
						>
							fizuli.ahadov@gmail.com
						</a>
					</p>
				</div>
			</div>
		</section>
	)
}

export default ContactSection
