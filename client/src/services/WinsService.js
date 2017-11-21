import Api from './Api'

export default {
  create (win) {
    return Api().post('/api/wins', win)
  },
  yourwins () {
    return Api().get('/api/yourwins')
  },
  index () {
    return Api().get('/api/wins')
  }
}
