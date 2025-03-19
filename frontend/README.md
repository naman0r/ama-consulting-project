# React (vite setup) redme

## what to do if you run into problems with the frontend?

- Make sure your terminal is in the frontend folder (cd frontend)
- run: npm install {this installs all the dependencies}
- run: npm run dev { in terminal, if it doesnt work it measn that there is something wrong with your code so go fix that}

## Architecture:

- Folders (important, you need to know what to import and where it is!)
  - Components
  - styles (all the .css files, you can add a new file for each page/component)
  - pages (full pages, etc: home, login, etc. )

## Adding new routes:

- go to Main.jsx. this is the entrypoint of our frontend. you can see all the routes (eg: /, /login)
- each route corresponds to it's own page

1. MAKE A PAGE IN Pages/ folder
2. Make styles (optional but we need it to make it look good)
3. Add to the Main.jsx file (add route, add import, add to router object. )
4. make sure the run runs! if not, either a error message will blare out, or if you see a blank screen:

- click INSPECT element (right click), go to console, and the error should be there. you can use chat to troubleshoot

## styles:

We are NOT using inline styling (ie, styles is not where the HTML code is, it is in its own file in the styles/ folder. you need to IMPORT the stylesheet when using in the .jsx page/component)
