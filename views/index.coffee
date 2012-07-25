doctype 5
html ->
  head ->
    title "Scrum"
  link rel: "stylesheet", type: "text/css", href: "./statics/styles/base.css"
  script type: "text/javascript", src: "./statics/scripts/base.js"
  body ->
    h1 "Log In"
    form action: "/login", method: "post", ->
      div ".field", ->
        label for: "username", "Username: "
        input "#username", name: "username"
        button "login"