import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faTooth,
	faMicroscope,
	faShieldAlt,
	faSmile,
	faHandsHelping,
	faCogs,
} from '@fortawesome/free-solid-svg-icons'

const PrinciplesSection = () => {
	return (
		<section className='bg-gray-50 py-12' id='principles'>
			<div className='container mx-auto px-6 lg:px-12'>
				<h2 className='text-3xl font-bold text-blue-600 mb-12 text-center'>
					Работаю по принципам
				</h2>

				<div className='relative grid grid-cols-1 md:grid-cols-3 gap-8 items-center'>
					{/* Левый блок текста */}
					<div className='space-y-8 md:space-y-10'>
						<div>
							<FontAwesomeIcon
								icon={faTooth}
								className='text-blue-600 text-3xl mb-2'
							/>
							<h3 className='text-xl font-semibold text-blue-600'>Качество</h3>
							<p className='text-gray-600'>
								Соблюдаю современные протоколы лечения.
							</p>
						</div>
						<div>
							<FontAwesomeIcon
								icon={faMicroscope}
								className='text-blue-600 text-3xl mb-2'
							/>
							<h3 className='text-xl font-semibold text-blue-600'>Точность</h3>
							<p className='text-gray-600'>
								Всё лечение провожу под увеличением микроскопа или бинокуляров.
							</p>
						</div>
						<div>
							<FontAwesomeIcon
								icon={faShieldAlt}
								className='text-blue-600 text-3xl mb-2'
							/>
							<h3 className='text-xl font-semibold text-blue-600'>
								Безопасность
							</h3>
							<p className='text-gray-600'>
								Все инструменты проходят обработку по стандарту антисептики.
							</p>
						</div>
					</div>

					{/* Центральное изображение */}
					<div className='flex justify-center items-center'>
						<div className='relative w-64 h-64 md:w-80 md:h-80 bg-blue-100 rounded-full flex justify-center items-center'>
							<FontAwesomeIcon
								icon={faTooth}
								className='text-blue-600 text-6xl'
							/>
						</div>
					</div>

					{/* Правый блок текста */}
					<div className='space-y-8 md:space-y-10 lg:text-right'>
						<div>
							<FontAwesomeIcon
								icon={faSmile}
								className='text-blue-600 text-3xl mb-2'
							/>
							<h3 className='text-xl font-semibold text-blue-600'>Комфорт</h3>
							<p className='text-gray-600'>
								Составляю несколько вариантов плана лечения, чтобы выбрать
								лучшее для вас.
							</p>
						</div>
						<div>
							<FontAwesomeIcon
								icon={faHandsHelping}
								className='text-blue-600 text-3xl mb-2'
							/>
							<h3 className='text-xl font-semibold text-blue-600'>
								Отношение к вам
							</h3>
							<p className='text-gray-600'>
								Всегда борюсь за то, чтобы сохранить зубы пациента.
							</p>
						</div>
						<div>
							<FontAwesomeIcon
								icon={faCogs}
								className='text-blue-600 text-3xl mb-2'
							/>
							<h3 className='text-xl font-semibold text-blue-600'>
								Комплексный подход
							</h3>
							<p className='text-gray-600'>
								Помогу найти специалиста для комплексного лечения.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default PrinciplesSection
