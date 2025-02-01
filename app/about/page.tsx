export default function About() {
    return (
      <main className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 p-4">
        <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-300 mb-6">About</h2>
        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">Summary of Changes</h3>
          <ul className="list-disc pl-6 text-gray-800 dark:text-gray-100">
            <li><strong>Implemented Server-Side Rendering (SSR):</strong></li>
            <li>Set up server-side data fetching to retrieve necessary information before rendering the page</li>
            <li>Created two files(location/search/route, weather/route) to manage the data fetching process and integrate it with the SSR flow</li>
            <li><strong>Variant:</strong></li>
            <li>Split the variant into two distinct components for better maintainability and code separation</li>
            <li>Redesigned Variant A according to the provided image, with a mobile-friendly adjustment for better responsiveness</li>
            <li><strong>Page Navigation and new About page:</strong></li>
            <li>Implemented smooth navigation between pages, enhancing the app's user flow</li>
            <li>Added an About page that summarizes the changes and new features implemented in the app</li>
            <li>Ensured that the header layout remains consistent across all pages for a unified user experience</li>
            <li><strong>Search History:</strong></li>
            <li>Improved the search history feature to ensure unique entries, preventing duplicates</li>
            <li><strong>Local Storage Implementation:</strong></li>
            <li>Used local storage to persist the selected variant between sessions, improving the overall user experience</li>
            <li><strong>Redux Integration:</strong></li>
            <li>Integrated Redux for managing global state, ensuring better state management for more complex interactions</li>
            <li><strong>Assumptions</strong></li>
            <li>I assumed the input is valid, and did not change how an error is displayed.</li>
          </ul>
        </section>
      </main>
    );
  }
  