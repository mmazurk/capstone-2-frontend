
# My AI Photo Library: Frontend

## Purpose

The AI Photo Library project provides a user-friendly interface that allows users to create AI-generated images and practice prompt engineering skills. This project is prototype and will be further iterated upon in October 2023.

The current "MLP" frontend is built with React and allows users to:
- Log in and out of their account
- View examples of prompts from DALL-E2
- Save and manage AI prompts

To deliver these features, a React app was created using **Create React App** and it **OpenAI's DALL-E2 API** was used to to create images for the user. A separate API was created  for storage of user and prompt information.

## Quick Start

`npm start`

## Technology Stack

The prototype was built using **React** and **Bootstrap**. The component hierarchy is as follows:

```txt

	UserContext.Provider
	BrowserRouter
	Navigation			
        Navlinks (see code)
	Routes
		HomePage (uses useNavigate hook)
		UserLibrary
			UserPrompt
		SearchPage
			LoadingIcon
			SearchExamples
			SearchForm
				Alert
			SearchPhotoResult
		LoginForm
			FormItem
			Alert
		Logout
		SignUpForm
			FormItem
			Alert
		ProfileForm
			SignUpForm
			FormItem
			Alert
```

## User Flows

Currently the site allows users to 

- Create a new profile
- Log into the app
- Modify profile information
- Create prompts and view results
- Save generated photos a device
- Save prompts to a library
- Visit the library to remove prompts

## Style

This application was styled using **Bootstrap**, because one of the goals of the project was to make the interface simple, clean, and easy for users to quickly use.

## Testing

Run all tests using
`npm test`

## Next Steps

For future iterations, users will be allowed to save their generated photos and show off both their prompts and resulting photos to friends. I have some placeholder text on the "user-library" page to illustrate this, but this is not functional yet.

Other iterations include the following:

- allow users to re-run prompts
- allow users to save and retrieve actual image files
- allow users to modify their library page (currently static)
- provide users with a rotating list of prompt suggestions 
- allow the user to recover and change password

> **Note** The application will be deployed on Render and will be accessible in October 2023. Future iterations will also include the following and will:

