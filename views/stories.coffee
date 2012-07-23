h1 'Stories'

h2 'Pick a story'
table ->
  for story in channel.stories
    tr ->
      td -> story.task
      td -> story.description

h2 'Create new story'
form action: '/channel/' + channel.name + '/story', method: 'post', ->
  div class: 'field', ->
    label for: 'name', -> 'Task: '
    input id: 'task', name: 'task'
    label for: 'name', -> 'Description: '
    input id: 'description', name: 'description'
    button 'create'