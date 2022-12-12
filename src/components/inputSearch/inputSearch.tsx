type InputSearchProps = {
	label?: string
	name: string
	value: string
	placeholder?: string
	type?: 'text' | 'password' | 'email' | 'number'
	readOnly?: boolean
	Icon?: React.ReactNode
	srLabel?: boolean
	onChange?: React.ChangeEventHandler<HTMLInputElement>
}

export const InputSearch = ({
	type = 'text',
	name,
	label,
	value,
	srLabel,
	Icon,
	placeholder,
	readOnly = false,
	...props
}: InputSearchProps): React.ReactElement => {
	return (
		<div className='relative'>
			<label className='font-extrabold'>{label}</label>
			<input
				placeholder={placeholder}
				type={type}
				readOnly={readOnly}
				id={name}
				value={value}
				className={` w-full h-10 border-2 rounded-lg p-3 text-sm placeholder-dark_blue font-semibold lg:py-0.5 xl:py-1.5 xl:text-lg border-gray-400 outline-none 
                ${readOnly && 'cursor-not-allowed bg-gray-100'}
				${Icon ? 'pr-10 ' : ''}
                `}
				{...props}
			/>
			<span className='absolute inset-y-0 right-5 flex items-center pl-2 text-gray-400'>
				{Icon}
			</span>
		</div>
	)
}