default: bundle.min.js
	node bundle.min.js
bundle.min.js: bundle.js
	uglify -s $^ -o $@
bundle.js: app.js
	webpack $^ $@
clean:
	rm -f bundle.js
	rm -f bundle.min.js
install:
	sudo npm install -g webpack
	sudo npm install -g uglify
