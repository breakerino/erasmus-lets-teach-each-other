// Summary section
import SummarySection from '../sections/SummarySection.astro';
import * as SummarySectionData from '../app/data/section-summary.json'

// Hero section
import HeroSection from '../sections/HeroSection.astro';
import * as HeroSectionData from '../app/data/section-hero.json';

// Objectives section
import ObjectivesSection from '../sections/ObjectivesSection.astro';
import * as ObjectivesSectionData from '../app/data/section-objectives.json';

// Partners section
import PartnersSection from '../sections/PartnersSection.astro';
import * as PartnersSectionData from '../app/data/section-partners.json';

// Dictionary section
import DictionarySection from '../sections/DictionarySection.astro';
import * as DictionarySectionData from '../app/data/section-dictionary.json';

// ProjectWeeks section
import ProjectWeeksSection from '../sections/ProjectWeeksSection.astro';
import * as ProjectWeeksSectionData from '../app/data/section-project-weeks.json';

// ProjectWeeks section
import NationalActivitiesSection from '../sections/NationalActivitiesSection.astro';
import * as NationalActivitiesSectionData from '../app/data/section-national-activities.json';

export default [
	{
		id: 'hero',
		component: HeroSection,
		className: {
			wrapper: ['bg-gradient-to-b','from-blue-400','to-blue-600', 'py-20', 'lg:py-[8rem]']
		},
		data: HeroSectionData
	},
	{
		id: 'summary',
		component: SummarySection,
		heading: 'Summary',
		label: 'Summary',
		className: {
			wrapper: ['py-10', 'md:py-20', 'lg:py-[8rem]'],
			heading: ['before:bg-slate-200']
		},
		data: SummarySectionData
	},
	{
		id: 'objectives',
		component: ObjectivesSection,
		heading: 'Objectives',
		label: 'Objectives',
		headingPosition: 'center',
		className: {
			wrapper: ['py-10', 'md:py-20', 'lg:py-[6rem]', 'bg-blue-50', 'bg-opacity-30'],
			heading: ['before:bg-blue-800', 'before:bg-opacity-10']
		},
		data: ObjectivesSectionData
	},
	{
		id: 'partners',
		component: PartnersSection,
		heading: 'Partners',
		label: 'Partners',
		className: {
			wrapper: ['py-10', 'md:py-20', 'lg:py-[8rem]'],
			heading: ['before:bg-slate-200']
		},
		data: PartnersSectionData
	},
	{
		id: 'project-weeks',
		component: ProjectWeeksSection,
		heading: 'Project weeks',
		label: 'Project weeks',
		headingPosition: 'center',
		className: {
			wrapper: ['py-10', 'md:py-20', 'lg:py-[6rem]', 'bg-blue-50', 'bg-opacity-30'],
			heading: ['before:bg-blue-800', 'before:bg-opacity-10 text-center']
		},
		data: ProjectWeeksSectionData
	},
	{
		id: 'national-activities',
		component: NationalActivitiesSection,
		heading: 'National activities',
		label: 'National activities',
		headingPosition: 'center',
		className: {
			wrapper: ['py-10', 'md:py-20', 'lg:py-[6rem]', 'bg-blue-50', 'bg-opacity-30'],
			heading: ['before:bg-blue-800', 'before:bg-opacity-10 text-center']
		},
		data: NationalActivitiesSectionData
	},
	{
		id: 'dictionary',
		label: 'Dictionary',
		component: DictionarySection,
		className: {
			wrapper: ['py-10', 'md:py-20', 'lg:py-[8rem]'],
			heading: ['before:bg-slate-200']
		},
		data: DictionarySectionData
	}
]