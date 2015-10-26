all: bundle.min.js
	simple_http_server
bundle.min.js: bundle.js
	uglify -s $^ -o $@
bundle.js:
	r.js -o build.js
clean:
	rm -f bundle.js
install:
	sudo npm install -g requirejs
	sudo npm install -g uglify
