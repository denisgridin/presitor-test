<template>
  <div class="header">
    <NuxtLink v-for="(button, index) in buttons" :to="button.link" :key="index">
      <button>
        {{ button.text }}
      </button>
    </NuxtLink>
	  <button @click="login">Login</button>
	  <div>{{ favorites }}</div>
	  <input type="text" v-model="currentFilm">
	  <button @click="addFavorites">Добавить фильмы</button>
  </div>
</template>

<script lang='ts'>
import Vue, { PropOptions } from 'vue'
import { UserModule } from '~/store/user'

type HeaderButton = {
  text: string,
  link: string
}

export default Vue.extend({
	mounted () {
	},
	data: () => {
		return {
			currentFilm: '' as string
		}
	},
	computed: {
		favorites () {
			return UserModule.favorites
		}
	},
  props: {
    buttons: {
      required: true,
      type: Array
    } as PropOptions<Array<HeaderButton>>
  },
  methods: {
		async login () {
			try {
				const response = await this.$auth.loginWith('google')
				console.log(response)
			} catch (error) {
				console.log(error)
			}
		},
    onSignIn (googleUser: any): void {
      const profile = googleUser.getBasicProfile()
      console.log('ID: ' + profile.getId()) // Do not send to your backend! Use an ID token instead.
      console.log('Name: ' + profile.getName())
      console.log('Image URL: ' + profile.getImageUrl())
      console.log('Email: ' + profile.getEmail())
    },
	  addFavorites () {
    	if (this.currentFilm) {
		    UserModule.addUserFavoriteFilm(this.currentFilm)
		    this.currentFilm = ''
	    }
	  }
  }
})
</script>