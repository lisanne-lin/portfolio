<template>
		<h1 class="text-rose-300">home</h1>

	<div class="flex flex-row">
		<div id="x" ></div>
		<div id="x2"></div>
	</div>

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
