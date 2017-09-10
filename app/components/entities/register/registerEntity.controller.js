class RegisterEntityController {
  constructor(toastr,Api,$http,$auth,$state) {
    'ngInject'
    this.toastr = toastr
    this.Api = Api
    this.$http = $http
    this.$auth = $auth
    this.$state = $state
    this.institutionEndpoint = Api +'/place/institution'
    this.insTypeEndpoint = Api + '/place/institutionType?limit=300'
    this.usersEndpoint = Api + '/configuration/institution_user'
    this.countriesEndpoint = Api + '/place/country?limit=300'
    this.regionsEndpoint = Api + '/place/region?limit=300&filter_field=id_country&filter_value='
    this.citiesEndpoint = Api + '/place/city?limit=300&filter_field=id_region&filter_value='
    this.docTypeEndpoint = Api + '/configuration/type_document?limit=300'
    this.registerEndpoint = Api + '/auth/register_entity'
    this.getInsTypes()
    this.getCountries()
    this.getDocTypes()
    this.registryError = false
    this.openConfirmation = false
    this.register = {
      institution:null
    }
  }

  $onInit() {
    
  }
  getInsTypes(){
    this.$http.get(this.insTypeEndpoint).then((result) => {
      this.institutionTypes = result.data.data
    })
  }
  getDocTypes(){
    this.$http.get(this.docTypeEndpoint).then((result) => {
      this.document_types = result.data.data
    })
  }
  getCountries() {
    this.$http.get(this.countriesEndpoint).then((result) => {
      this.countries = result.data.data
    })
  }
  getRegions() {
    this.$http.get(this.regionsEndpoint+this.register.id_country).then((result) => {
      this.regions = result.data.data
    })
  }
  getCities() {
    this.$http.get(this.citiesEndpoint+this.register.id_region).then((result) => {
      this.cities = result.data.data
    })
  }

  selectedInstitution(item){
    this.register.institution = item
    this.$http.get(this.usersEndpoint+
      '?filter_field=id_institution&filter_value='+item.id).then((results)=>{
        this.canRegister = results.data.total_results === 0
      })
  }
  next(){
    window.setTimeout((state)=>{
      state.go('entity')
    },100,this.$state)
  }
  sendRegister() {
    
    this.$http.post(this.registerEndpoint,this.register)
    .then((result)=>{
      this.registryError = false
      this.toastr.success('Datos enviados exitosamente.','Registrar Entidad')
      this.$auth.setToken(result.data.token)
      this.openConfirmation = true
    }).catch((result)=>{
      if(result.data.error.code === 201){
        this.registryError = true
        this.registryMessage = 'El usuario ya existe en la plataforma'
      }else{
        this.registryError = true
        this.registryMessage = 'Ha ocurrido un error'
      }
      
    })
    

  }
}

export default RegisterEntityController
