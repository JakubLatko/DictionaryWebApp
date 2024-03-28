interface Props {
	title: string | undefined;
	message: string | undefined;
	resolution: string | undefined;
}

export default function FailComponent({ title, message, resolution }: Props) {
	return (
		<section className="flex flex-col gap-4 pt-12">
			<img
				src="../../public/sad-yellow-face.svg"
				className="max-h-[20vh] "
			/>
			<p className="text-xl text-center">{title}</p>
			<p>
				{message} {resolution}
			</p>
		</section>
	);
}
