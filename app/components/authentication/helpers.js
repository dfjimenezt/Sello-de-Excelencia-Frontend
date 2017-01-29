const resolveActiveAccount = ($q,$state,$stateParams,AuthService)=> {
  const deferred = $q.defer()
  const { email } = $stateParams
  if (email) {
    deferred.resolve(AuthService.activeAccount(email))
  } else {
    $state.go('landingPage')
    deferred.reject()
  }
  return deferred.promise
}

export {
  resolveActiveAccount
}