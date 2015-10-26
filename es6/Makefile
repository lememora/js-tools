default: bundle.min.js
	simple_http_server
bundle.min.js: bundle.js
	uglify -s $^ -o $@
bundle.js: main.js
	browserify -t babelify $^ -o $@
clean:
	rm -f bundle.js
	rm -f bundle.min.js
install:
	sudo npm install browserify -g
	npm install
