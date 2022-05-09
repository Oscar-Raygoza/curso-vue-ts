import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations('loading', {
      setIsLoading: 'SET_LOADING'
    }),
    /**
     * Set is loading
     * @param params {Object || null} Error Object
     */
    setLoading(status: boolean) {
      this.setIsLoading(status)
    }
  }
}