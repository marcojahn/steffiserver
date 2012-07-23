h1 'Channels'

h2 'Join an existing channel'
table ->
  for c of channels
    tr -> 
      td -> 
        c

h2 'Create new channel'
form action: '/channel', method: 'post', ->
  div class: 'field', ->
    label for: 'name', -> 'Name: '
    input id: 'name', name: 'name'
    button 'create'