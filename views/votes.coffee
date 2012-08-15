doctype 5
html ->
  head ->
    title "Scrum"
  link rel: "stylesheet", type: "text/css", href: "/statics/styles/base.css"
  script type: "text/javascript", src: "/statics/scripts/base.js"
  script type: "text/javascript", src: "/statics/scripts/socket.io.min.js"
  script type: "text/javascript", src: "/statics/scripts/snack-sizzle.js"
  body ->

    h1 'Votes'
	
	  for name, points of votes
	    table ->
	      tr ->
            td -> name
            td -> points