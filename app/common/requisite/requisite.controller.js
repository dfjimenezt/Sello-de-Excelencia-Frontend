class requisiteController{
  constructor(Api,$http){
    'ngInject'
    this.Api = Api,
    this.$http = $http    
  }
  $onInit(){
  }
  save(){
    this.onSave({item:this.item})
  }
  clearMedia(){
    this.item.media = null
  }
}

export default requisiteController