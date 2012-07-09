@title = 'Log In'

h1 @title

form action: '/login', method: 'post', ->
  div class: 'field', ->
    label for: 'username', -> 'Username: '
    input id: 'username', name: 'username'
    button 'login'