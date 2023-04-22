// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	css: ["~/assets/css/main.css"],
	modules: ["@nuxt/content"],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	app: {
		head: {
			title: "Lisanne Lin | Portfolio",
			meta: [
				{ charset: "utf-8" },
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1",
				},
				{
					hid: "og:image",
					name: "og:image",
					content: "/assets/image/og-image.png",
				},
				{
					hid: "og:description",
					name: "og:description",
					content:
						"Hi! My name is Lisanne Lin and welcome to my portfolio!",
				},
			],
			link: [{ rel: "icon", type: "image/png", href: "/favicon.ico" }],
		},
	},
});
