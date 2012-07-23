h1 'Channels'

table
for c in channels
  tr td c.id td c.name
  
form action: '/channel', method: 'post', ->
  div class: 'field', ->
    label for: 'name', -> 'Name: '
    input id: 'name', name: 'name'
    button 'create new channel'