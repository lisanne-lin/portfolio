<template>
	<div class="flex flex-row z-40">
		<div id="char1"></div>
		<div id="char2"></div>
	</div>
</template>

<script setup lang="ts">
import HanziWriter from "hanzi-writer";

const { $hanzi } = useNuxtApp();

function writeCharacter(divId: string, character: string): HanziWriter {
	return $hanzi.create(divId, character, {
		width: 80,
		height: 80,
		strokeAnimationSpeed: 4,
		delayBetweenStrokes: 10,
		padding: 5,
		showCharacter: false,
		showOutline: false,
		strokeColor: "#FDA4AF",
	});
}

function chainAnimation(char1: HanziWriter, char2: HanziWriter) {
	const delayBetweenAnimations = 100; // milliseconds
	char1.hideCharacter();
	char2.hideCharacter();

	char1.animateCharacter({
		onComplete: function () {
			setTimeout(function () {
				char2.animateCharacter();
			}, delayBetweenAnimations);
		},
	});
}

onMounted(() => {
	const char1 = writeCharacter("char1", "慧");
	const char2 = writeCharacter("char2", "琴");

	chainAnimation(char1, char2);
});
</script>
