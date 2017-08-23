class EvaluationController {
  constructor($state, $auth) {
    'ngInject'
    this.$state = $state
    this.$auth = $auth
    this.finished = false
  }
  $onInit() {
    this.user = this.$auth.getPayload()
    this.entity = { name: 'Entidad 1' }
    this.service = { name: 'Servicio 1',votes:250, rate:4.15 }
    this.questions = [
      {
        id:1,
        name: 'Pregunta de preguntas',
        rate: 0
      },
      {
        id:2,
        name: 'Pregunta de preguntas',
        rate: 0
      },
      {
        id:3,
        name: 'Pregunta de preguntas',
        rate: 0
      },
      {
        id:4,
        name: 'Pregunta de preguntas',
        rate: 0
      },
      {
        id:5,
        name: 'Pregunta de preguntas',
        rate: 0
      },
      {
        id:6,
        name: 'Pregunta de preguntas',
        rate: 0
      },
      {
        id:7,
        name: 'Pregunta de preguntas',
        rate: 0
      },
    ]
  }

}

export default EvaluationController