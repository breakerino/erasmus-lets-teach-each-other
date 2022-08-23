export const SITE_NAME = 'Erasmus+ K2 | Let\'s teach each other';

export { default as SITE_LOGO } from '/images/site-logo.svg';

export const NAVIGATION_ITEMS = [
	{
		id: 'summary',
		label: 'Summary'
	},
	{
		id: 'objectives',
		label: 'Objectives'
	},
	{
		id: 'partners',
		label: 'Partners'
	},
	{
		id: 'national-activites',
		label: 'National activites'
	},
	{
		id: 'project-weeks',
		label: 'Project weeks'
	},
	{
		id: 'dictionary',
		label: 'Dictionary'
	}
];

export const SITE_SECTIONS = {
	hero: {

	},
	summary: {
		id: 'summary',
		heading: 'Summary',
		columns: [
			[
				'Today, we live in the digital era when the social and cultural values are often forgotten. Students miss the general knowledge in the field of culture, history, and society. Since students spend a lot of their free time playing with computers, tablets, smartphones or social networks, it is understandable that they prefer teaching and learning based on up to date ICTs.',
				'Due to this fact, we have decided to take full advantage of using new technologies and making students change their attitude towards history, traditions, cultural wealth and inspire them to be proud of their countries, to the solidarity and friendliness to others. The knowledge and skills acquired through project activities are supposed to be predominantly in the field of European cultural heritage, information technology and communication in English language.',
				'The number of direct participants supported by the grant is approximately 50 teachers and 200 students. All project activities will be focused on informal education in the field of history, culture, traditions, digital literacy and language competences.They will be held throughout mutual meetings, on workshops, discussions with experts and excursions to the cultural facilities.'
			],
			[
				'Moreover, teachers will take part in the special interactive education aimed at the development of their pedagogical and social skills.',
				'Each meeting will be held in another partner country and will be remarkable and innovative by using a different type of digital technology or its application. New innovative methods will be applied through workshops, excursions, professional seminars, lectures and discussion. During short learning activities the students from host school will play the role of mentors to make learning less formal, spontaneous and effective.',
				'The tangible project results will be methodological materials, the web-page of project, on-line dictionary of cultural and social terms, photos, a short film mapping the project implementation, a photo-book about project, on-line test and a digitized game about European cultural heritage, promotional materials and small traditional handmade objects.'
			]
		]
	},
	objectives: {
		id: 'objectives',
		heading: 'Objectives',
		items: [
			{ icon: '', text: 'Enhance the teacher\'s role in society by exchanging best practices and broaden professional, linguistic, social and personal competences of all project participants (students and teachers)' },
			{ icon: '', text: 'Promote the learning of different subjects through creative and innovative teaching practice' },
			{ icon: '', text: 'Contribute to the improvement of the application of modern ICT and widen general knowledge to all target groups' },
			{ icon: '', text: 'Change the attitude to the common European heritage' },
			{ icon: '', text: 'Enhance communication skills - both in mother tongue and in foreign language' },
			{ icon: '', text: 'Enhance digital integration in learning and youth work at various levels' },
		]
	},
	partners: {
		id: 'partners',
		heading: 'Partners',
		items: [
			{
				name: 'Maltepe Fen Lisesi Istanbul Turkey',
				description: 'Maltepe Fen Lisesi is a general secondary school located in the Anatolian side of İstanbul.The school has 24 classes, a conference hall with seating of 100 people, a music room, an art room, physics, chemistry and biology labs, a school library and a sports centre at international standards. The school provides qualitative general education which contains fundamentals for university. The school has a close relations with the universites in İstanbul. While running the project acitivities, cooperation with the universites will be an advantage of our organizastion and location.',
				country: 'gr',
				id: 'glnim'
			},
			{
				name: 'Střední škola elektrotechnická a energetická Sokolnice, příspěvková organizace The Czech Republic',
				description: 'SŠEE Sokolnice is the only school in the South Moravian Region that educates pupils and adults as well in the field of energy. It has 355 pupils in full-time study and 66 emploees. The school provides the apprenticeship certificates for pupils in professions focused on electrical engineering and information technology. The school has a strong connection to energy companies and businesses in the region. It has a rich experience in various projects, it has been participating in many international projects Erasmus+ and has many partners in various countries in Europe.',
				country: 'cz',
				id: 'ssee'
			},
			{
				name: 'Stredná odborná škola, Lipová 8, Handlová Slovakia',
				description: 'Secondary vocational school provides education in technical and economic fields to almost 500 students. The greatest success is achieved by our students in national and international networking academy games competitions every year. The school has been participating in many international projects Erasmus+ and has many partners in various countries in Europe.',
				country: 'sk',
				id: 'sosha'
			},
			{
				name: '2o GENIKO LYKEIO NEAS IONIAS MAGNISIAS Volos Greece',
				description: 'The 2nd upper secondary school of Nea Ionia-Volos is located in the Nea Ionia suburb of the town of Volos in central Greece.Our school is a general secondary school with 32 staff and more than 300 students - medium sized for Greek standards. Age range of our students is from 14-15 to 18 years. An Erasmus+ project is a good opportunity for them to improve their communicative and personal skills so we are the part of many various projects.',
				country: 'tr',
				id: 'mfl'
			}
		]
	}
}