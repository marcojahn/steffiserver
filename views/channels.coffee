doctype 5
html ->
  head ->
    title "Scrum"
  link rel: "stylesheet", type: "text/css", href: "./statics/styles/base.css"
  script type: "text/javascript", src: "./statics/scripts/base.js"
  script type: "text/javascript", src: "./statics/scripts/socket.io.min.js"
  body ->

    h1 'Channels'

    h2 'Join an existing channel'
    table ->
      for name of channels
        tr -> 
          td -> name
          td -> a href: '/channel/' + name, -> 'join'
            

    h2 'Create new channel'
    form action: '/channel', method: 'post', ->
      div class: 'field', ->
        label for: 'name', -> 'Name: '
        input id: 'name', name: 'name'
        button 'create'