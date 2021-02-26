import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators'
import store from '~/store/index'

export interface IFilm {
	title: string,
	duration: number
}

export interface IUserState {
	fullName: string,
	favorites: IFilm[],
	future: IFilm[]
}

@Module({ name: 'user', dynamic: true, store: store() })
class User extends VuexModule implements IUserState {
	public fullName: string = ''
	public favorites: IFilm[] = []
	public future: IFilm[] = []
	
	get totalFavorites (): IFilm[] {
		return this.favorites
	}
	
	@Mutation
	private SET_NAME (fullName: string) {
		this.fullName = fullName
	}
	
	@Mutation
	private SET_FAVORITES (favorites: IFilm[]) {
		this.favorites = favorites
	}
	
	@Mutation
	private SET_FUTURE (future: IFilm[]) {
		this.future = future
	}
	
	@Action
	public setUserFavorites (films: IFilm[]) {
		this.SET_FAVORITES(films)
	}
	
	@Action
	public addUserFavoriteFilm (film: IFilm) {
		this.SET_FAVORITES([ ...this.favorites, film ])
	}
}

export const UserModule = getModule(User)
