## Bronchure-Grid

A brochure is a printed or digital promotional document that provides information about a product, service, organization, or event. It is commonly used as a marketing tool to communicate key details and features in a visually appealing and concise manner. Brochures are typically designed to be distributed to potential customers or clients and serve as a means to showcase offerings, generate interest, and persuade the target audience.

This web application show brochures of a particular product in a specific city. For now, the city and product can only be searched via the url `/{city}/{product}`

##### Deployed Links

- client (frontend): https://brochure-web.netlify.app/
- API endpoint: https://api-client-bonial.herokuapp.com/
- Content Management System: https://cms-bonial.herokuapp.com/admin

**See Admin Login Details Below For Content Management System**

```
email: blessingmakaraba@gmail.com
password: BonialTest24,
```

### Implementation Details

### Project Structure

Overall, the project is designed with scalability, maintainability, and extensibility in mind. One architectural approach employed is the use of a monorepo structure.

A monorepo architecture involves organizing the project's codebase into a single repository that contains multiple related modules or components. This approach offers several benefits like
Code sharing and reusability, Ease of maintenance, Streamlined collaboration, Simplified dependency management, Scalability and extensibility.

In summary, the project's adoption of a monorepo architecture ensures efficient code sharing, simplifies maintenance and collaboration, facilitates dependency management, and provides a scalable and extensible foundation for future development.

It comprises of three components located in the apps folder namely **api**, **client (frontend)**, and **cms**.

#### Technical Details

The API component, built with `Express.js`, exposes an endpoint `/city-product-grid` that consumes the CMS endpoints `/api/products` and `/api/cities`. The API checks if a specific product and city exist before responding to the client with the brochure data. Currently, the brochure data is mocked and located in the `apps/api/src/brochure.json` file.

The CMS component is built with `Strapi` and hosts two tables, namely `products` and `cities`, which are content types. It exposes the endpoints `/api/products` and `/api/cities` for the API component to consume with response that follows the JSON API specifications. Additionally, the CMS component provides a graphical amdin interface at `/admin`, which is used to manage the content of these two tables. Through the CMS interface, the content can be edited, and the changes will be reflected in the frontend (client) application.

The client component is built with `Next.js` and displays a view of the brochures related to a specific product and city. The URL pattern for accessing the brochures is `/{city}/{product}`. If the provided city or product is not found, a 404 page error is displayed to the user.

### Development

#### Tools Used

- **TypeScript**: TypeScript is the main programming language used in the project. It is a typed superset of JavaScript that adds static typing and additional features to the language, providing enhanced tooling and error detection during development.

- **Node.js**: Node.js is a JavaScript runtime environment that allows the execution of JavaScript code on the server-side. It provides a rich set of libraries and frameworks for building server-side applications.

- **Express.js**: Express.js is a popular web framework for Node.js. It provides a minimalistic and flexible approach to building web applications and APIs. With Express.js, developers can easily define routes, handle HTTP requests, and manage middleware for building robust APIs.

- **Next.js**: Next.js is a React.js framework that focuses on server-side rendering and performance optimization. It provides a structured approach to building web pages and applications with features like code splitting, automatic routing, and server rendering, which helps in improving SEO and page load times.

- **Strapi**: Strapi is a JavaScript/TypeScript CMS (Content Management System) framework. It allows developers to create and manage content types, define APIs, and generate admin interfaces for content management. Strapi integrates with databases and provides a flexible and customizable way to build and expose data models as API services.

- **PostgreSQL**: PostgreSQL is a powerful and open-source relational database management system. It is widely used for storing structured data in various applications. In the project, PostgreSQL is utilized as the database for storing data, providing reliability, scalability, and SQL querying capabilities.

### Running the project locally

- Setup postgresql database and replace the below database credentials in the `apps/cms/.env-example` with your corresponding database credentials

```
 DATABASE_HOST=127.0.0.1
 DATABASE_PORT=5432
 DATABASE_NAME=brochuregrid
 DATABASE_USERNAME=postgres
 DATABASE_PASSWORD=
```

- Run `yarn install` to install project dependencies.
- Run `yarn dev` to run the project, and wait for a few seconds until you see some Project Information and `http://localhost:1337/admin` in the console.
- Open `http://localhost:1337/admin` to manage the CMS content.
- Complete the form to create the first administrator user of this Strapi application.
- In order to make the API endpoints exposed by our CMS accessible, please go to Settings > Roles > Public in the Strapi dashboard and enabled the content-types(product, cities) method. You can use this [link](https://docs.strapi.io/dev-docs/quick-start#step-3-set-roles--permissions) to see context and more details on how to set it up. Kindly be informed that this step is very important as without this our API component won't be able to access `CMS` endpoints.
- Once you have completed the previous steps, open `http://localhost:3000` to view the frontend application.

### Improvement Points

#### Product Experience

The current web application displays brochures for a specific product in a particular city. However, to enhance user experience and make it more user-friendly, it would be beneficial to implement a search option within the brochure display page. This search functionality would allow users to search for brochures across various cities and products without having to manually edit the page URL.

By adding a search option, users can enter their desired city and product keywords into a search bar or form. The application would then dynamically update the displayed brochures based on the search criteria entered by the user. This way, users can easily find relevant brochures without the need to navigate through different URLs manually.

Additionally, to improve the efficiency and accuracy of brochure data, it would be advisable to implement a mini brochure data API. This API would serve as a reliable source of brochure information, eliminating the need for mock data. The mini brochure data API would provide endpoints for retrieving brochure details based on search parameters such as city and product. This would ensure that the application always fetches up-to-date and accurate brochure information for display.

By implementing these enhancements, the web application would offer a more intuitive and user-friendly experience, allowing users to easily search for brochures across different cities and products while ensuring the data is reliable and up-to-date.

#### Development Experience

- Dockerize the application.
- Write integration/end-to-end tests.
