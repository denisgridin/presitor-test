// import { HeaderButton } from '~/types/HeaderButton'
type HeaderButton = {
	text: string,
	link: string
}

export const LAYOUT = {
	custom: 'custom'
}

export const HEADER_BUTTONS: Array<HeaderButton> = [
	{
		text: 'Главная',
		link: '/'
	},
	{
		text: 'Вложенная 1',
		link: '/first'
	},
	{
		text: 'Вложенная 2',
		link: '/second'
	},
	{
		text: 'pages/1',
		link: '/pages/1'
	},
	{
		text: 'pages/2',
		link: '/pages/2'
	}
]