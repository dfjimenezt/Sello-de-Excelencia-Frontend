class requisiteController{
  constructor(Api,$http,$auth,$scope){
    'ngInject'
    this.Api = Api,
    this.$http = $http
    this.$auth = $auth
    this.$scope = $scope
    this.loading = false
    this.answerEndpoint = Api + '/question/user_answer'
  }
  $onInit(){
    console.log(this.item)
  }
  save(){
    this.loading = true
    var data = new FormData()
    var ctrl = this
    data.append('id_service',this.item.service)
    data.append('id_question',this.item.id)
    data.append('id_topic',this.item.id_topic)
    data.append('comment',this.item.comment)
    data.append('file',this.item.file)
    var request = new XMLHttpRequest()
    if(this.item.answer){
      data.append('id',this.item.answer)
      request.open('PUT', this.answerEndpoint)
    }else{
      request.open('POST', this.answerEndpoint)
    }
    request.setRequestHeader('Authorization', this.$auth.getToken())
    request.onload = function () {
      let response = JSON.parse(request.responseText)
      ctrl.loading = false
      ctrl.item.answer = response.id
      ctrl.onSave({item:ctrl.item})
      ctrl.$scope.$apply()
    }
    request.send(data)
  }
  clearMedia(){
    this.item.media = null
    if(this.item.disabled === true){
      this.item.disabled = false
    }
  }
}

export default requisiteController