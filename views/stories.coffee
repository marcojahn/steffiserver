doctype 5
html ->
  head ->
    title "Scrum"
  link rel: "stylesheet", type: "text/css", href: "./statics/styles/base.css"
  script type: "text/javascript", src: "./statics/scripts/base.js"
  script type: "text/javascript", src: "./statics/scripts/socket.io.min.js"
  body ->
  
    h1 'Stories'

    h2 'Pick a story'
    table ->
      for story in channel.stories
        tr ->
          td -> story.task
          td -> story.description
          td -> input id: 'points', name: 'points', size: 2
          td -> button 'submit'

    h2 'Create new story'
    form action: '/channel/' + channel.name + '/story', method: 'post', ->
      div class: 'field', ->
        label for: 'name', -> 'Task: '
        input id: 'task', name: 'task'
        label for: 'name', -> 'Description: '
        input id: 'description', name: 'description'
        button 'create'
