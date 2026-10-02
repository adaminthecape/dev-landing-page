export function TooltipOnHover({
	children,
	text,
}: {
	children: React.ReactNode;
	text: string;
}) {
	return (
		<div className="relative group flex">
			<div className="absolute bottom-full mb-2 hidden group-hover:block bg-slate-800 text-white text-xs rounded py-1 px-2">
				{text}
			</div>
			{children}
		</div>
	);
}
