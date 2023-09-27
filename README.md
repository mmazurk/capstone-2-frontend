
# My AI Photo Library: Frontend

## Purpose

The AI Photo Library project offers a user-friendly interface, enabling users to craft AI-generated images and hone their prompt engineering skills. Please note, this project is a prototype and will undergo further iterations in October 2023.

Using the current "MLP" frontend developed with React, users can:
- Log in and out of their account
- View prompt examples from DALL-E2.
- Save and manage AI prompts

To deliver these features, a React app was created using **Create React App** and **OpenAI's DALL-E2 API** was uswas integrated to generate images for the user. In addition, a distinct API was set up to store user data and prompt information.

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

- Register a new profile.
- Log into the app.
- Update profile information.
- Design prompts and observe results.
- Save the generated photos to a device.
- Archive prompts in a library.
- Access the library to delete prompts.

## Style

This application was styled using **Bootstrap**, because one of the goals of the project was to make the interface simple, clean, and easy for users to quickly use.

## Testing

Run all tests using
`npm test`

## Next Steps

For future iterations, users will be allowed to save their generated photos and show off both their prompts and resulting photos to friends. I have some placeholder text on the "user-library" page to illustrate this, but this feature is not yet functional.

Additional enhancements will include the ability to:

- Re-run prompts.
- Save and fetch actual image files.
- Modify the library page (which is currently static).
- Offer users a revolving list of prompt suggestions.
- Allow users to reset and update their password.

> **Note** The application will be deployed on Render and will be accessible in October 2023. Future iterations will also include the following and will:

