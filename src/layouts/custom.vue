<template>
  <div>
    <Header :buttons="buttons"></Header>
    <Nuxt />
  </div>
</template>

<script lang='ts'>
import { HEADER_BUTTONS } from "~/utils/constants";
export default {
  data: () => {
    return {
      buttons: HEADER_BUTTONS
    }
  },
  components: {
    Header: () => import('~/components/Header')
  },
  head () {
    return {
      script: [
        {
          src: process.env.GOOGLE_API_URL,
          async: true,
          defer: true
        }
      ],
      meta: [
        {
          name: process.env.GOOGLE_API_META_FIELD,
          content: `${process.env.GOOGLE_CLIENT_ID}`
        }
      ]
    }
  }
}
</script>