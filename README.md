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