class AuthService {
  constructor(Api,$http) {
    'ngInject'
    this.API = Api
    this.$http = $http
  }

  signUp(user) {
    const url = `${this.API}/auth/register`
    return this.$http.post(url,user)
      .then(({data}) => data)
      .catch(({data}) => data)
  }
}

export default AuthService