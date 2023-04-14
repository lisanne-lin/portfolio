<template>
	<div id="x"></div>
	<div id="x2"></div>
</template>

<script setup>
const { $hanzi } = useNuxtApp();

onMounted(() => {
	$hanzi
		.create('x', '慧', {
			width: 100,
			height: 100,
			padding: 5,
			strokeAnimationSpeed: 2, // 5x normal speed
			delayBetweenStrokes: 10, // milliseconds
			showOutline: false
		})
		.animateCharacter();
	$hanzi
		.create('x2', '琴', {
			width: 100,
			height: 100,
			padding: 5,
			strokeAnimationSpeed: 2, // 5x normal speed
			delayBetweenStrokes: 10, // milliseconds
			showOutline: false
		})
		.animateCharacter();
});
</script>
