import HanziWriter from 'hanzi-writer';

export default defineNuxtPlugin(() => {
	return {
		provide: {
			hanzi: HanziWriter
		}
	};
});
