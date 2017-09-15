class advanceEvaluatorController{
  constructor(Api,$http,$auth){
    'ngInject'
    this.Api = Api
    this.$http = $http
    this.$auth = $auth
    this.pointsEndpoint = Api +'/configuration/points'
    this.motivesEndpoint = Api +'/configuration/motives'
  }
  $onInit(){
    this.$http.get(this.pointsEndpoint+'?sumarized=true').then((results)=>{
      let _total = 0
      this.requisites = 0
      this.live = 0
      this.events = 0
      results.data.forEach(function(points) {
        _total += points.value
        if(points.id_motives === 1 || points.id_motives === 2 || points.id_motives === 4){
          this.requisites = points.value
        }
        if(points.id_motives === 3){
          this.live = points.value
        }
        if(points.id_motives === 5){
          this.events = points.value
        }
      }, this)
      this.total = _total
    })
    this.$http.get(this.motivesEndpoint).then((results)=>{
      this.motives = results.data.data
    })
    this.$http.get(this.pointsEndpoint+'?filter_field=value&filter_value=< 0&filter_field=id_user&filter_value='+this.$auth.id).then((results)=>{
      this.negatives = results.data.data
    })
  }
}

export default advanceEvaluatorController