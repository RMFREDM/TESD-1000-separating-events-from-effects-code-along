export default function Home() {
	return (
		<div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
			<main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
				<div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
					<h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
						This page contains links to challenges.
					</h1>

					<ul>
						<PageLink
							href={"/fix-a-variable-that-doesn't-update"}
							labelText={"Challenge:"}
							linkText={"Fix a Variable that Doesn't Update"}
						/>
						<PageLink
							href={"/fix-a-freezing-counter"}
							labelText={"Challenge:"}
							linkText={"Fix a Freezing Counter"}
						/>
						<PageLink
							href={"/fix-a-non-adjustable-delay"}
							labelText={"Challenge:"}
							linkText={"Fix a Non-adjustable Delay"}
						/>
						<PageLink
							href={"/fix-a-delayed-notification"}
							labelText={"Challenge:"}
							linkText={"Fix a Delayed Notification"}
						/>
					</ul>
				</div>
			</main>
		</div>
	);
}

function PageLink({ href, labelText, linkText }) {
	return (
		<ul className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
			{labelText}{" "}
			<a
				href={href}
				className="font-medium text-zinc-950 dark:text-zinc-50"
			>
				{linkText}
			</a>{" "}
		</ul>
	);
}
