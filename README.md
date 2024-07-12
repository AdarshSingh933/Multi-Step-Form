# Multi-Step Form with React and Redux

## Setup Instructions

1. Clone the repository:

git clone https://github.com/AdarshSingh933/Multi-Step-Form.git

2. Navigate to the project directory:
cd multi-step-form

3. Install the dependencies:
npm install

4. Start the development server:
npm start

## Usage

- Once the development server is running, open your browser and go to http://localhost:3000 to see the form in action.
- Follow the on-screen instructions to navigate through the form steps.
- Fill in all required fields and submit the form to see the validation in action.
- After submission, the form data is persisted locally, so refreshing the page will retain your inputs.

## Testing
To run tests using Jest:
npm test

## Project Structure
- `src/pages`: Contains Layout page.
- `src/components`: Contains the different form step components and navigation component.
- `src/redux`: Contains Redux actions, reducers, and store configuration.
- `src/utils`: Contains utility functions for validation and local storage operations.
- `src/App.js`: Main application component managing the state and form navigation.
- `src/index.js`: Entry point of the React application.
- `public/index.html`: HTML template.

## Dependencies
- React
- Redux
- React-Redux
- Jest (for testing)
- Babel (for ES6+ support)

## Notes

- This project uses React-Redux for state management.
- Form data is persisted to local storage to retain user input between steps.
- Basic client-side validation is implemented for required fields and email/phone formats.
- The form is styled using basic CSS for simplicity.

## Assumptions

- All fields are required except Address Line 2.
- Phone number should be 10 digits.
- Zip Code should be 5 digits.

## Additional Features

- Local storage persistence.
- Basic responsive design for different screen sizes.

