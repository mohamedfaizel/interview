# Monitor Performance Using Lighthouse and WebPageTest

## Lighthouse

Lighthouse is an open-source, automated tool for improving the quality of web pages. It can be run in Chrome DevTools, from the command line, or as a Node module. It audits performance, accessibility, best practices, SEO, and more.

### Running Lighthouse in Chrome DevTools

1. **Open Chrome DevTools:**
   - Right-click on the page and select "Inspect," or press `Ctrl+Shift+I` (Windows/Linux) or `Cmd+Option+I` (Mac).

2. **Go to the Lighthouse tab:**
   - In DevTools, navigate to the "Lighthouse" tab.

3. **Generate a report:**
   - Click on "Generate report." Lighthouse will run a series of audits and generate a report for you.

### Running Lighthouse from the Command Line

1. **Install Lighthouse:**
   - You can install Lighthouse globally using npm:
     ```bash
     npm install -g lighthouse
     ```

2. **Run Lighthouse:**
   - Use the Lighthouse command followed by the URL you want to audit:
     ```bash
     lighthouse https://www.example.com
     ```

3. **View the report:**
   - Lighthouse will generate an HTML report that you can open in your browser.

### Integrating Lighthouse with CI/CD

1. **Install Lighthouse CI:**
   - Lighthouse CI can be used to integrate Lighthouse into your CI/CD pipeline:
     ```bash
     npm install -g @lhci/cli
     ```

2. **Configure Lighthouse CI:**
   - Create a `lighthouserc.js` file to configure Lighthouse CI:
     ```javascript name=lighthouserc.js
     module.exports = {
       ci: {
         collect: {
           startServerCommand: 'npm start',
           url: ['http://localhost:3000'],
         },
         assert: {
           assertions: {
             'categories:performance': ['error', { minScore: 0.9 }],
           },
         },
         upload: {
           target: 'temporary-public-storage',
         },
       },
     };
     ```

3. **Run Lighthouse CI:**
   - Use the Lighthouse CI commands to collect and assert performance metrics:
     ```bash
     lhci autorun
     ```

## WebPageTest

WebPageTest is a tool that provides deep insights into the performance of web pages. It allows you to run tests from various locations around the world, on different browsers, and at different connection speeds.

### Running a Test on WebPageTest

1. **Go to WebPageTest:**
   - Navigate to [webpagetest.org](https://www.webpagetest.org).

2. **Enter the URL:**
   - Enter the URL of the page you want to test in the input field.

3. **Configure Test Settings:**
   - Select the location, browser, and connection speed you want to use for the test.

4. **Run the Test:**
   - Click on "Start Test." WebPageTest will run the test and provide a detailed report.

### Understanding WebPageTest Results

1. **Summary:**
   - The summary provides an overview of the test results, including performance grades, load time, and the number of requests.

2. **Waterfall Chart:**
   - The waterfall chart shows the loading timeline of each resource, helping you identify bottlenecks.

3. **Performance Metrics:**
   - Key metrics include First Contentful Paint (FCP), Speed Index, Largest Contentful Paint (LCP), Time to Interactive (TTI), and Total Blocking Time (TBT).

4. **Optimization Recommendations:**
   - WebPageTest provides suggestions for improving performance, such as optimizing images, leveraging browser caching, and minimizing JavaScript.

### Automating WebPageTest

1. **API Access:**
   - WebPageTest provides an API for automating tests. You can get an API key by signing up on the WebPageTest website.

2. **Run Tests via API:**
   - Use the API to run tests programmatically. Here’s an example using `curl`:
     ```bash
     curl -X GET "https://www.webpagetest.org/runtest.php?url=https://www.example.com&k=YOUR_API_KEY"
     ```

3. **Parse Results:**
   - You can parse the JSON results returned by the API to integrate performance monitoring into your workflow.

By using Lighthouse and WebPageTest, you can effectively monitor and optimize the performance of your web pages, leading to faster load times and a better user experience.