Initialize projects root directory:

    npm init -y

Install webpack:

    npm i -D webpack webpack-cli webpack-dev-server

Create Files:

    touch info.js createElem.js

Next we are going to bundle. 

    mkdir src
move the 3 files into it. Rename entry.js to index.js

bundle:

    npx webpack

bundle for dev:

    npx webpack --mode development

where wer run the npx webpack command determines the conternt. 

    delete the dist directory
    rename src.js back to index.js

run commands in the project rought for now. 

Constantly rebundleing is not practical. Webpack offers us a dev server.

    npx webpack serve --mode production

in root create 'public' directory.

    mkdir public
where webpack deveserver serves static content

    touch public/index.html
    add script tag to it
    touch public/style.css
    link to it in index.html

restart devserver

    npx webpack seve --mode development

Review. webpack commands must run where they have access to the src directory. The same directory commands are run in is also where the dist defaults to. 

2. Active Thinking: Reverse Engineering the Webpack Config File

      in project root:

        touch webpack.config

Change index.html back into entry and setup some basic webpack.configuration. 

    npx webpack --config ../webpack.config.js

3. Webpack Introduction (the Traditional Approach)

        mkdir wp-intro
        cd wp-intro
        npm init -y
        npm i -D webpack webpack-cli webpack-dev-server
        npm i
        mkdir src public
        touch src/entry.js
        touch src/createElem.js
        touch src/info.js
        touch webpack.config.js



4. Webpack Watch & WatchOptions

5. Webpack Dev Server
Webpack dev server watches backend files in the same way that it watches frontend files. 

6. Static Files
Webpack comes automatically with express. 

The location of the public dir is not fixed. Webpack looks for it from the current directory. Not ideal. We want the fix the public directory to the project root. so we add the static option. 

7. Deduplication

To optomize build for production, set the mode to production and remove anything possible defaulting.

webpack automatically deduplicates build files. 

8. Multiple Entry Points

Lets create a second entry point in src named "entryTwo.js

    in root:
        touch src/entryTwo.js

9. Tree Shaking

10. Side Effects - codes that are defined in the module but not exported, to be executed automatically 

11. ES6 Dynamic Module Crash Course
 had to globally install a http server instead of clicking on the icon for this to work.

12. Lazy Loading

13. splitChuncksPlugin

14. htmlWebpackPlugin - creates an html file and links the initial chunck

        npm i -D html-webpack-plugin

require in config file. Then add the plugins array

15. htmlWebpackPlugin: Multiple Pages

16. Webpack.ProvidePlugin

17. Webpack Asset Modules

18. Asset

19. Asset Modules Public Path
