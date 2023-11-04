<template>
	<div class="flex lg:h-screen">
		<div class="m-auto">
			<div
				class="container pt-16 p-4 mx-auto text-slate-800 justify-center md:space-x-24 lg:flex"
			>
				<div class="memoji grid justify-items-center relative">
					<HanziWriter />
					<img
						class="max-w-[250px] md:max-w-xs mb-8"
						src="@/assets/img/memoji.png"
						alt=""
					/>
				</div>
				<div class="max-w-4xl space-y-4">
					<h1
						class="font-bold text-slate-800 text-2xl lg:text-5xl md:text-4xl leading-tight"
					>
						Hi, I'm Lisanne Lin! <br />
						A Software Engineer student from The Netherlands.
					</h1>
					<div class="text-slate-700 text-about-me max-w">
						<p class="tmd:text-lg font-medium py-5">
							I like to explore different design concepts and
							experiment with code to create unique and engaging
							experiences for users.
						</p>
						<div class="text-slate-500 space-y-4 font-regular">
							<p>
								📚 Software Engineer
								<a
									class="text-violet-400 hover:text-violet-600 transition duration-150 ease-in-out"
									href="https://www.hva.nl/"
									>@HvA</a
								>
								// 3rd year
							</p>
							<p>
								💻 Software Engineer Intern
								<a
									class="text-violet-400 hover:text-violet-600 transition duration-150 ease-in-out"
									href="https://www.accenture.com/nl-en"
									>@Accenture</a>
                // 2023 - present
							</p>
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
										href="documents/cv_english_lisanne-lin.pdf"
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
