require 'sinatra'
require 'shotgun'
require 'socket'


#############################################################

# This app is loaded by cd'ing to the directory in terminal,
# and then typing in "ruby app.rb". That terminal window will show the webserver status and who is accessing the routes. 
# By default, sinatra is loaded on port 4567. If you want to run it on port 80 then remove the # sign in front of "set :port, 80"
# If you want to bind it to spencer.macpractice.lan, then remove the # sign from "set :bind, spencer.macpractice.lan"

# set :port, 80
# set :bind, ""

get '/index' do  #<--- This is a route. A route makes it easy to redirect users to content based on what url they pick. You can also have variables in routes.
	puts request.ip.to_s
	erb :index   #<--- This is a block of code in the route. In this case we are sending the person who accessed the URL www.somepage.com/index to the index.erb file. 

end

not_found do  #<--- if somone access's a route that doesn't exist (error 404), then the following code will be executed

	redirect '/index' #<--- can redirect using "redirect" '/routename'

end

#NOTE: When you make changes to your app.rb file, you must stop and start your sinatra server.

