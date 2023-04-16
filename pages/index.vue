<template>
	<div class="flex h-screen">
		<div class="m-auto">
			<div
				class="lg:flex lg:container mx-auto text-slate-800 justify-center space-x-24"
			>
				<div class="memoji grid justify-items-center">
					<HanziWriter />
					<img
						class="max-w-xs"
						src="@/assets/img/memoji.png"
						alt=""
					/>
				</div>
				<div class="max-w-4xl">
					<h1 class="font-bold text-slate-800 text-5xl leading-tight">
						Hi, I'm Lisanne Lin! <br />
						A Software Engineer student from The Netherlands.
					</h1>
					<div class="text-slate-700 text-about-me max-w">
						<p class="text-lg font-medium py-5">
							I like to explore different design concepts and
							experiment with code to create unique and engaging
							experiences for users.
						</p>
						<div class="text-slate-500 space-y-4 font-regular">
							<p>
								📚 Software Engineer @HvA // currently 2nd year
								BA
							</p>
							<p>🎓 Graduate Web Designer @GLU</p>
							<p>🌏 Speaks Dutch, English and Chinese</p>
							<p>
								🌸 Likes to read, has somewhat of a green thumb
							</p>
							<div
								class="links font-semibold text-slate-500 underline space-x-8 mt-40"
							>
								<span>
									<a
										class="hover:text-slate-800 ease-in duration-300"
										href="https://nl.linkedin.com/in/lisanne-lin-b0089614b"
										>LinkedIn</a
									>
								</span>
								<span>
									<a
										class="hover:text-slate-800 ease-in duration-300"
										href="https://nl.linkedin.com/in/lisanne-lin-b0089614b"
										>Resume</a
									>
								</span>
								<span>
									<a
										class="hover:text-slate-800 ease-in duration-300"
										href="https://github.com/lisanne-lin"
										>GitHub</a
									>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<Projects />
</template>
