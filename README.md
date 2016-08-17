# Altair Admin Dashboard (Angular & Material)

##To Get Started
$ bower install
$ npm install

##Gulp Tasks
*gulp common_js
minify/concatenate common JavaScript (jquery, modernizr, selectize.js, icheck etc)
*gulp uikit_js
minify/concatenate custom UIkit JavaScript build
*gulp uikit_htmleditor_js
minify/concatenate UIkit HtmlEditor + dependencies (codemirror and marked)
*gulp kendoui_js
minify/concatenate KendoUI Components
*gulp page_specific_js
minify common and page specific JavaScript
*gulp less_main
Compile and minify main CSS
*gulp less_error_page
Compile and minify error page CSS
*gulp less_login_page
Compile and minify login page CSS
*gulp json_minify
Minify JSON files
*gulp browser-sync
Automatically update/reload all browsers on file change. Read more about Browsersync - http://www.browsersync.io/
*gulp all_js
Process all JavaScript tasks
*gulp all_less
Process all Less to CSS tasks
*gulp default
Process all JavaScript, Less to CSS tasks and minify JSON
*gulp release(-*)
Build /release folder


