<template>
	<div class="container p-4 mx-auto space-y-16">
		<h2 class="text-slate-800 font-bold text-4xl w-full text-center">
			Projects
		</h2>
		<ContentList path="/" v-slot="{ list }">
			<NuxtLink
				v-for="article in list"
				:key="article._path"
				:to="article._path"
				class="block space-y-6 px-5 pt-4 md:px-16 rounded-3xl group overflow-clip hover:shadow-[0px_19px_49.4px_-3.75px_#00000010]"
				:style="`background: ${article.preview_bg_color};`"
			>
				<h3 class="font-bold text-2xl text-slate-800 mb-4">
					{{ article.title }}
				</h3>
				<div class="space-x-2 font-bold">
					<span
						v-for="tag in article.tags"
						:key="tag"
						class="p-2 rounded-xl"
						:style="`background: ${article.tag_color}`"
						>{{ tag }}</span
					>
				</div>
				<div class="flex justify-center pt-4 mb-80">
					<img
						class="h-40 md:h-96 translate-y-1/4 transition ease-in-out delay-90 group-hover:translate-y-10 group-hover:scale-110 duration-500"
						:src="`/images/covers/${article.thumbnail}`"
						alt=""
					/>
				</div>
			</NuxtLink>
		</ContentList>
	</div>
</template>
