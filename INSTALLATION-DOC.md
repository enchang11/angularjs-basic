# Step 1: Set up the development Environment
- Install Angular CLI globally
		npm install -g @angular/cli

# Step 2: Create a new project
- Generate a new project and skeleton application by running the following commands:
		ng new my-app
	* *Patience please. It takes time to set up a new project, most of it spent installing npm packages.*

# Step 3: Serve the application
- Go to the project directory and launch the server.
		cd my-app
        ng server --open
    * `ng serve` command launches the server, watches your files and rebuild the app as you make changes to those files
    * using the `--open` (or just -o) option will automatically open your browser on http://localhost:4200

# Step 4: Edit your Angular Component
- Your app lives in the src folder. All Angular components, templates, styles, images, and anything else your app needs go here. Any files outside of this folder are meant to support building your app.