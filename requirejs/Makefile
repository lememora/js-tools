default: main-built.min.js
	simple_http_server
main-built.min.js: main-built.js
	uglify -s $^ -o $@
main-built.js:
	r.js -o build.js
clean:
	rm -f main-built.js
install:
	sudo npm install -g requirejs
	sudo npm install -g uglify
