class requisiteController{
  constructor(Api,$http,$auth,$scope){
    'ngInject'
    this.Api = Api,
    this.$http = $http
    this.$auth = $auth
    this.$scope = $scope
    this.loading = false
    this.answerEndpoint = Api + '/question/user_answer'
    this._legal = false
    this._help = false
  }
  $onInit(){
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
      data.append('id_status',1)
      request.open('PUT', this.answerEndpoint)
    }else{
      request.open('POST', this.answerEndpoint)
    }
    request.setRequestHeader('Authorization', this.$auth.getToken())
    request.onload = function () {
      let response = JSON.parse(request.responseText)
      ctrl.loading = false
      ctrl.item.error = false
      if(response.id){
        ctrl.item.answer = response.id
      }
      if(response.media){
        ctrl.item.media = response.media
        ctrl.item.media.name = ctrl.item.media.url.substr(ctrl.item.media.url.lastIndexOf('/')+1)
        ctrl.item.canDelete = true
      }
      ctrl.onSave({item:ctrl.item})
      ctrl.$scope.$apply()
    }
    request.send(data)
  }
  showHelp(){
    this._help = !this._help
    this._legal = false
  }
  showLegal(){
    this._legal = !this._legal
    this._help = false
  }
  clearMedia(){
    this.item.media = null
    this.item.file = null
    if(this.item.disabled === true){
      this.item.disabled = false
    }
  }
}

export default requisiteController