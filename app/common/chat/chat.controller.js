class chat{
  constructor(Api,$http,$auth){
    'ngInject'
    this.Api = Api,
    this.$http = $http
    this.$auth = $auth
    this.user = {id:1}
  }
  $onInit(){
    this.messages =[
      {
        from:{
          name:'Agente',
          id:1
        },
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis vel magna quis ullamcorper. Nulla rutrum dapibus augue, at malesuada sem faucibus ut. Praesent ultricies, magna vel convallis suscipit, libero quam ornare justo, eu feugiat arcu nisi vitae sapien. Mauris et pretium tortor. Integer sollicitudin eu dolor sit amet cursus. Quisque vel pretium sem, sed aliquet purus. Mauris auctor, arcu gravida finibus volutpat, odio nulla volutpat sapien, eu tristique mauris turpis tincidunt enim. Vivamus auctor, leo vitae tincidunt finibus, ante libero blandit libero, in rhoncus ante odio et diam. Nunc semper diam ac euismod semper. Integer posuere orci sed dolor rutrum pharetra. Vivamus massa ex, rhoncus sed arcu at, pretium eleifend augue. Nunc vehicula semper turpis, vitae vestibulum neque lobortis sed.',
        timestamp: new Date()
      },
      {
        from:{
          name:'Agente',
          id:1
        },
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis vel magna quis ullamcorper. Nulla rutrum dapibus augue, at malesuada sem faucibus ut. Praesent ultricies, magna vel convallis suscipit, libero quam ornare justo, eu feugiat arcu nisi vitae sapien. Mauris et pretium tortor. Integer sollicitudin eu dolor sit amet cursus. Quisque vel pretium sem, sed aliquet purus. Mauris auctor, arcu gravida finibus volutpat, odio nulla volutpat sapien, eu tristique mauris turpis tincidunt enim. Vivamus auctor, leo vitae tincidunt finibus, ante libero blandit libero, in rhoncus ante odio et diam. Nunc semper diam ac euismod semper. Integer posuere orci sed dolor rutrum pharetra. Vivamus massa ex, rhoncus sed arcu at, pretium eleifend augue. Nunc vehicula semper turpis, vitae vestibulum neque lobortis sed.',
        timestamp: new Date()
      },
      {
        from:{
          name:'Agente',
          id:1
        },
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis vel magna quis ullamcorper. Nulla rutrum dapibus augue, at malesuada sem faucibus ut. Praesent ultricies, magna vel convallis suscipit, libero quam ornare justo, eu feugiat arcu nisi vitae sapien. Mauris et pretium tortor. Integer sollicitudin eu dolor sit amet cursus. Quisque vel pretium sem, sed aliquet purus. Mauris auctor, arcu gravida finibus volutpat, odio nulla volutpat sapien, eu tristique mauris turpis tincidunt enim. Vivamus auctor, leo vitae tincidunt finibus, ante libero blandit libero, in rhoncus ante odio et diam. Nunc semper diam ac euismod semper. Integer posuere orci sed dolor rutrum pharetra. Vivamus massa ex, rhoncus sed arcu at, pretium eleifend augue. Nunc vehicula semper turpis, vitae vestibulum neque lobortis sed.',
        timestamp: new Date()
      },
      {
        from:{
          name:'Agente',
          id:1
        },
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis vel magna quis ullamcorper. Nulla rutrum dapibus augue, at malesuada sem faucibus ut. Praesent ultricies, magna vel convallis suscipit, libero quam ornare justo, eu feugiat arcu nisi vitae sapien. Mauris et pretium tortor. Integer sollicitudin eu dolor sit amet cursus. Quisque vel pretium sem, sed aliquet purus. Mauris auctor, arcu gravida finibus volutpat, odio nulla volutpat sapien, eu tristique mauris turpis tincidunt enim. Vivamus auctor, leo vitae tincidunt finibus, ante libero blandit libero, in rhoncus ante odio et diam. Nunc semper diam ac euismod semper. Integer posuere orci sed dolor rutrum pharetra. Vivamus massa ex, rhoncus sed arcu at, pretium eleifend augue. Nunc vehicula semper turpis, vitae vestibulum neque lobortis sed.',
        timestamp: new Date()
      },
      {
        from:{
          name:'Agente',
          id:2
        },
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis vel magna quis ullamcorper. Nulla rutrum dapibus augue, at malesuada sem faucibus ut. Praesent ultricies, magna vel convallis suscipit, libero quam ornare justo, eu feugiat arcu nisi vitae sapien. Mauris et pretium tortor. Integer sollicitudin eu dolor sit amet cursus. Quisque vel pretium sem, sed aliquet purus. Mauris auctor, arcu gravida finibus volutpat, odio nulla volutpat sapien, eu tristique mauris turpis tincidunt enim. Vivamus auctor, leo vitae tincidunt finibus, ante libero blandit libero, in rhoncus ante odio et diam. Nunc semper diam ac euismod semper. Integer posuere orci sed dolor rutrum pharetra. Vivamus massa ex, rhoncus sed arcu at, pretium eleifend augue. Nunc vehicula semper turpis, vitae vestibulum neque lobortis sed.',
        timestamp: new Date()
      },
      {
        from:{
          name:'Agente',
          id:2
        },
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis vel magna quis ullamcorper. Nulla rutrum dapibus augue, at malesuada sem faucibus ut. Praesent ultricies, magna vel convallis suscipit, libero quam ornare justo, eu feugiat arcu nisi vitae sapien. Mauris et pretium tortor. Integer sollicitudin eu dolor sit amet cursus. Quisque vel pretium sem, sed aliquet purus. Mauris auctor, arcu gravida finibus volutpat, odio nulla volutpat sapien, eu tristique mauris turpis tincidunt enim. Vivamus auctor, leo vitae tincidunt finibus, ante libero blandit libero, in rhoncus ante odio et diam. Nunc semper diam ac euismod semper. Integer posuere orci sed dolor rutrum pharetra. Vivamus massa ex, rhoncus sed arcu at, pretium eleifend augue. Nunc vehicula semper turpis, vitae vestibulum neque lobortis sed.',
        timestamp: new Date()
      },
      {
        from:{
          name:'Agente',
          id:2
        },
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis vel magna quis ullamcorper. Nulla rutrum dapibus augue, at malesuada sem faucibus ut. Praesent ultricies, magna vel convallis suscipit, libero quam ornare justo, eu feugiat arcu nisi vitae sapien. Mauris et pretium tortor. Integer sollicitudin eu dolor sit amet cursus. Quisque vel pretium sem, sed aliquet purus. Mauris auctor, arcu gravida finibus volutpat, odio nulla volutpat sapien, eu tristique mauris turpis tincidunt enim. Vivamus auctor, leo vitae tincidunt finibus, ante libero blandit libero, in rhoncus ante odio et diam. Nunc semper diam ac euismod semper. Integer posuere orci sed dolor rutrum pharetra. Vivamus massa ex, rhoncus sed arcu at, pretium eleifend augue. Nunc vehicula semper turpis, vitae vestibulum neque lobortis sed.',
        timestamp: new Date()
      },
      {
        from:{
          name:'Agente',
          id:1
        },
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis vel magna quis ullamcorper. Nulla rutrum dapibus augue, at malesuada sem faucibus ut. Praesent ultricies, magna vel convallis suscipit, libero quam ornare justo, eu feugiat arcu nisi vitae sapien. Mauris et pretium tortor. Integer sollicitudin eu dolor sit amet cursus. Quisque vel pretium sem, sed aliquet purus. Mauris auctor, arcu gravida finibus volutpat, odio nulla volutpat sapien, eu tristique mauris turpis tincidunt enim. Vivamus auctor, leo vitae tincidunt finibus, ante libero blandit libero, in rhoncus ante odio et diam. Nunc semper diam ac euismod semper. Integer posuere orci sed dolor rutrum pharetra. Vivamus massa ex, rhoncus sed arcu at, pretium eleifend augue. Nunc vehicula semper turpis, vitae vestibulum neque lobortis sed.',
        timestamp: new Date()
      },
      {
        from:{
          name:'Agente',
          id:2
        },
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis vel magna quis ullamcorper. Nulla rutrum dapibus augue, at malesuada sem faucibus ut. Praesent ultricies, magna vel convallis suscipit, libero quam ornare justo, eu feugiat arcu nisi vitae sapien. Mauris et pretium tortor. Integer sollicitudin eu dolor sit amet cursus. Quisque vel pretium sem, sed aliquet purus. Mauris auctor, arcu gravida finibus volutpat, odio nulla volutpat sapien, eu tristique mauris turpis tincidunt enim. Vivamus auctor, leo vitae tincidunt finibus, ante libero blandit libero, in rhoncus ante odio et diam. Nunc semper diam ac euismod semper. Integer posuere orci sed dolor rutrum pharetra. Vivamus massa ex, rhoncus sed arcu at, pretium eleifend augue. Nunc vehicula semper turpis, vitae vestibulum neque lobortis sed.',
        timestamp: new Date()
      },
      {
        from:{
          name:'Agente',
          id:2
        },
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis vel magna quis ullamcorper. Nulla rutrum dapibus augue, at malesuada sem faucibus ut. Praesent ultricies, magna vel convallis suscipit, libero quam ornare justo, eu feugiat arcu nisi vitae sapien. Mauris et pretium tortor. Integer sollicitudin eu dolor sit amet cursus. Quisque vel pretium sem, sed aliquet purus. Mauris auctor, arcu gravida finibus volutpat, odio nulla volutpat sapien, eu tristique mauris turpis tincidunt enim. Vivamus auctor, leo vitae tincidunt finibus, ante libero blandit libero, in rhoncus ante odio et diam. Nunc semper diam ac euismod semper. Integer posuere orci sed dolor rutrum pharetra. Vivamus massa ex, rhoncus sed arcu at, pretium eleifend augue. Nunc vehicula semper turpis, vitae vestibulum neque lobortis sed.',
        timestamp: new Date()
      }
    ]
  }
}

export default chat