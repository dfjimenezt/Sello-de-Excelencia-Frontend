class requisiteController{
  constructor(Api,$http){
    'ngInject'
    this.Api = Api,
    this.$http = $http
    this.loading = false
  }
  $onInit(){
  }
  save(){
    this.onSave({item:this.item})
  }
  clearMedia(){
    this.item.media = null
    if(this.item.disabled === true){
      this.item.disabled = false
    }
  }
}

export default requisiteController