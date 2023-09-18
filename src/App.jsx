// App.jsx is the homepage of the React project, let's browse this program.

// Here are the basic settings of the project. We use the Tailwind style library and Chart.js in the project.
import "./css/style.css"; // Import Tailwind CSS
import "./charts/ChartjsConfig"; // Import Chart.js

// Dashboard is one of the pages on our website (currently the only one).
import Dashboard from "./pages/Dashboard"; // You can find this file (Dashboard) in /pages directory

function App() {
  return (
    <Dashboard />
    // To modify the content of our page, please go to ./pages/Dashboard to find the code for this page.
  );
}

export default App;
