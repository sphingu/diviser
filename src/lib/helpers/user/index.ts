import { prepareValidations } from '$lib/helpers'

import type { FieldType } from '$lib/types'
import type { IUser } from './types'

export const getFormFields = (userInfo: Partial<IUser> = {}): FieldType[] => [
	{
		id: 'name',
		label: 'Name',
		validations: prepareValidations(true, 5, 50),
		value: userInfo.name || ''
	},
	{
		id: 'email',
		label: 'Email',
		validations: prepareValidations(true, 5, 50, { email: true }),
		value: userInfo.email || ''
	}
]
