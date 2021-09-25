export * from './validation'

export const sleep = (time: number): Promise<void> =>
	new Promise((resolve) => setTimeout(resolve, time * 1000))

export const getMonthName = (month: number): string => {
	if (month > 12 || month < 1) {
		throw new Error('Please provide valid month value')
	}
	return new Date(2020, month, 1).toLocaleString('default', { month: 'long' })
}
