<template>
  <h1>{{ $route.name }}</h1>
</template>

<script lang='ts'>
import { LAYOUT } from '~/utils/constants'

export default {
	layout: LAYOUT.custom
}
</script>