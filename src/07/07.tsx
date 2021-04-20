import {FC, useState} from "react";

export type ManType = {
		name: string
		age: number
		lessons: Array<{ title: string }>
		address: {
				street: {
						name: string
				}
		}
}

type PropsType = {
		title: string
		man: ManType
		food: Array<string>
		car: {model: string}
}

export const ManComponent: FC<PropsType> = ({title, man, ...props}) => {

		const [message, setMessage] = useState<string>('hello')

		return (
				<div>
						<h1>{title}</h1>
						<hr/>
						<div>
								{props.car.model}
						</div>
						<div>
								{man.name}
						</div>
				</div>
		)
}