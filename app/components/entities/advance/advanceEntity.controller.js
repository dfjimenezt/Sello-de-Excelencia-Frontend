class advanceEntityController{
  constructor(Api,$http,$auth){
    'ngInject'
    this.Api = Api
    this.$http = $http
    this.$auth = $auth
    this.pointsEndpoint = Api +'/configuration/points'
    this.motivesEndpoint = Api +'/configuration/motives?limit=5000'
    this.motivenamesEndpoint = Api +'/configuration/motivename'
  }
  $onInit(){
    this.$http.get(this.motivenamesEndpoint).then((results)=>{
      this.names = results.data.data
      return this.$http.get(this.motivesEndpoint)
    }).then((results)=>{
      this.motives = results.data.data
      this.motives.forEach((motive)=>{
        this.names.forEach((name)=>{
          if(motive.name == name.id){
            motive.name = name
          }
        })
      })
      return this.$http.get(this.pointsEndpoint+'?sumarized=true')  
    }).then((results)=>{
      let _total = 0
      this.requisites = 0
      this.live = 0
      this.events = 0
      results.data.forEach(function(points) {
        _total += points.value
        this.motives.forEach((motive)=>{
          if(motive.id === points.id_motives){
            
            if(motive.name.name === 'Participar en Aprende y Enseña'){
              this.live = points.value
            }else
            if(points.id_motives === 'Eventos Especiales'){
              this.events = points.value
            }else if(points.value > 0){
              this.requisites = points.value
            }
          }
        })
        
      }, this)
      this.total = _total
      return this.$http.get(this.pointsEndpoint+'?filter_field=value&filter_value=< 0&filter_field=id_institution&filter_value='+this.$auth.getPayload().institutions[0].id)
    })
    .then((results)=>{
      this.negatives = results.data.data
    })
  }
}

export default advanceEntityController