# Ticketing App - Microservices with Node JS and React

- The Ticketing Application is a web-based platform designed for users to seamlessly book tickets for various shows and events.
  ![list of ticket completed  cancelled](https://github.com/mz-jennytech/ticketing/assets/56915109/1ce28277-05d4-43fb-9dcb-78d28b1c8e21)
  > List of Ticket paid and cancelled, below is a brief overview of the key functionalities:

## Features:bulb:

## User Authentication

- **Sign Up:** New users can create an account by providing the necessary information.
- **Sign In:** Existing users can log in securely to access their accounts.
- **Sign Out:** Users can log out of their accounts to securely end their session.

## Ticket Booking Process

1. **Homepage Access:** Upon successful authentication, users are directed to the homepage.
   ![SignUp for new user](https://github.com/mz-jennytech/tetris-fun-game/assets/56915109/32e29bcc-98e9-42ff-b6da-a36c75cb722a)

   - Postman test
     ![signup](https://github.com/mz-jennytech/tetris-fun-game/assets/56915109/8e743236-4550-4581-b6ca-55309053766e)

2. **Ticket Creation:** Users can create tickets by providing the name and price, with real-time decimal conversion for the price field.
   ![Ticket Created](https://github.com/mz-jennytech/tetris-fun-game/assets/56915109/812923ba-0cfb-417a-93b0-4fcc4a997d79)

   - Postman test
     ![Tickets](https://github.com/mz-jennytech/tetris-fun-game/assets/56915109/5b036c38-c732-4432-9ec8-c605acbb4a24)

3. **Purchase and Expiry:** Once a ticket is created, a JWT token is generated, and a countdown timer begins. Users have a limited time to complete the purchase before the token expires.
   ![purchase](https://github.com/mz-jennytech/tetris-fun-game/assets/56915109/4a08316e-63a3-47a4-9be1-87cebd1a66d7)

   > Purchase Ticket

   ![expiration timer](https://github.com/mz-jennytech/tetris-fun-game/assets/56915109/6f3ee813-abac-436f-bb74-f5ee7ec013d0)

   > Expiration Timer

   -Postman test
   ![payment order cancelled](https://github.com/mz-jennytech/tetris-fun-game/assets/56915109/59211add-b0c6-4e2e-bcf9-077dd1806e6d)

4. **Payment Integration:** Clicking on the purchase button redirects users to the payment page, where they can securely input their card details using Stripe.js.
   ![payment service](https://github.com/mz-jennytech/tetris-fun-game/assets/56915109/24b1765c-2fff-4c20-9855-d00ecbad311a)

   - Postman test
     ![Payments successful](https://github.com/mz-jennytech/tetris-fun-game/assets/56915109/665a921b-40bd-4fe4-97a6-039db47001aa)

5. **Ticket Status:** After successful payment, users can view a list of both paid and canceled tickets.
   ![created](https://github.com/mz-jennytech/tetris-fun-game/assets/56915109/cee5875a-dc3b-4c1d-a8fc-b85d566c6db3)

   ![list of ticket completed  cancelled](https://github.com/mz-jennytech/tetris-fun-game/assets/56915109/afbd8a29-0923-4abe-8f35-a871091edb8e)

## Additional Features

- **Reservations:** Attempting to purchase a ticket that has already been reserved will prompt a notification.
  ![ticket reserved](https://github.com/mz-jennytech/tetris-fun-game/assets/56915109/5befc993-0543-42d1-8b23-2b8203b2cf74)

- **Database Record:** Details of successful ticket purchasers are recorded in the application's database.

## Usage

1. **Sign Up/Sign In:** Begin by signing up or logging in to access the ticketing features.
2. **Create Ticket:** Navigate to the "Create Ticket" page to input ticket details.
3. **Purchase:** Click the purchase button and complete payment within the specified time.
4. **View Tickets:** Explore the list of purchased and canceled tickets.

## Architecture Overview

1. **Frontend:**

- React: The frontend of the application is built using React, a popular JavaScript library for building user interfaces.
- Next.js: Next.js is used in conjunction with React for server-side rendering and improved performance.

2. **Backend Microservices:**
   Each service on the backend is created using Node.js and Express.js, a lightweight web application framework for Node.js.
   The microservices architecture allows for the development of independent, scalable components.
3. **Data Storage:**

- MongoDB: Data for some of the services is stored in MongoDB, a NoSQL database known for its flexibility and scalability.
  Redis: Redis is used for caching and data storage, offering high-performance, in-memory data storage.

4. **Containerization and Orchestration:**

- Docker: The entire application is containerized using Docker, making it easy to package and deploy services consistently.
  Kubernetes: Kubernetes is used for container orchestration, automating deployment, scaling, and management of containers in a cluster.

5. **Programming Language:**
   TypeScript: Almost all of the code in the project is written in TypeScript, a statically typed superset of JavaScript. TypeScript adds static type checking and tooling support to JavaScript.
6. **Cloud Platform: Google Cloud**
   Google Cloud Platform (GCP) serves as the foundation for this ticketing application, providing a robust infrastructure for deploying, managing, and scaling services. The following GCP services are utilized:

**Kubernetes Engine (GKE):**
Kubernetes is employed for container orchestration, automating the deployment, scaling, and management of containers within a cluster. GKE, as a managed Kubernetes service, streamlines the operational aspects of containerized applications.

**Continuous Integration & Continuous Deployment (CI/CD):**
GitHub Actions is leveraged for CI/CD processes. This integration automates testing and deployment workflows, ensuring a seamless and efficient development lifecycle.

## Technologies & Tools:computer:

![React-61DAFB](https://github.com/mz-jennytech/tetris-fun-game/assets/56915109/8072a019-857d-480a-9924-70262fec0d08)
![Next](https://github.com/mz-jennytech/tetris-fun-game/assets/56915109/296af621-46ae-41c6-abd6-12e1fe26e98e)
![Node](https://github.com/mz-jennytech/tetris-fun-game/assets/56915109/cff583c7-ab4d-4863-bcb6-588dbc4e5266)
![Express](https://github.com/mz-jennytech/tetris-fun-game/assets/56915109/43a847f4-b367-4d10-8e9d-88800812655b)
![Jest-C21325](https://github.com/mz-jennytech/tetris-fun-game/assets/56915109/fbe329e1-4142-45c3-9bd1-969d92ca5105)
![Bull](https://github.com/mz-jennytech/tetris-fun-game/assets/56915109/918fbc55-a20b-467c-856b-bcc12d18dc7b)
![HTML5](https://img.shields.io/badge/≡-HTML5-E34F26?&style=flat-square&logo=html5&labelColor=282828)
![Postman-FF6C37](https://github.com/mz-jennytech/tetris-fun-game/assets/56915109/77d58cbf-64c4-4fb9-b696-490e7ba967ec)
![Stripe](https://github.com/mz-jennytech/tetris-fun-game/assets/56915109/a5064eeb-1593-4f41-b580-aa8e561ad36a)
![Redis-DC382D](https://github.com/mz-jennytech/tetris-fun-game/assets/56915109/db87b878-3717-47e9-9532-d1d6b725faae)
![Docker-2496ED](https://github.com/mz-jennytech/ticketing/assets/56915109/bdf3f910-7b94-4bc7-9bbb-ada7377eaa58)
![Kubernetes-326CE5](https://github.com/mz-jennytech/ticketing/assets/56915109/7949d7a8-1f93-4d79-925c-f48d6be89c21)
![TypeScript-3178C6](https://github.com/mz-jennytech/ticketing/assets/56915109/6be55fd6-c514-4c55-aef4-3860cb7030c5)
![Ubuntu](https://img.shields.io/badge/≡-Ubuntu-E95420?&style=flat-square&logo=Ubuntu&labelColor=282828)
![JavaScript](https://img.shields.io/badge/≡-JavaScript-F7DF1E?logo=javascript&style=flat-square&labelColor=282828)
![CSS3](https://img.shields.io/badge/≡-CSS3-1572B6?logo=CSS3&style=flat-square&logoColor=1572B6&labelColor=282828)
![Bootstrap](https://img.shields.io/badge/≡-Bootstrap-7952B3?logo=Bootstrap&style=flat-square&labelColor=282828)
![GitHub](https://img.shields.io/badge/≡-GitHub-181717?logo=GitHub&style=flat-square&labelColor=282828)
![JSON](https://img.shields.io/badge/≡-JSON-000000?logo=JSON&style=flat-square&labelColor=282828)
![NPM](https://img.shields.io/badge/≡-NPM-CB3837?&style=flat-square&logo=npm&logoColor=CB3837&labelColor=282828)
![Git](https://img.shields.io/badge/≡-Git-F05032?logo=git&style=flat-square&labelColor=282828)
![Vim](https://img.shields.io/badge/≡-Vim-019733?logo=Vim&style=flat-square&logoColor=019733&labelColor=282828)
![VS_Code](https://img.shields.io/badge/≡-VS_Code-007ACC?logo=visual-studio-code&style=flat-square&logoColor=007ACC&labelColor=282828)

---

### Project Structure on google slideshow

[Google Slideshow](https://docs.google.com/presentation/d/1OtF0c86TbpiivYM_EDB6rkXope6DKqB_pBLd_TSsh-4/edit?usp=sharing)

## Getting Started

- Clone the repository: **git clone git@github.com:mz-jennytech/ticketing.git**
- Install dependencies: **npm install**
- Configure environment variables for authentication and payment integration.
- Install Google Cloud SDK (gcloud)
- Run Skaffold to ensure the pods are all running
- Connect gcloud to your GitHub repository for automated deployment
- Run the application: npm start
- Access the application at http://localhost:3000
  Feel free to explore, contribute, and make the ticketing experience even better!

## Author

- **Jennifer Udensi** (@mz-jennytech) - [<img src="https://img.shields.io/badge/Portfolio-20d6fe.svg?&style=plastic"/>](https://jenniferudensiportfolio.netlify.app/)
  [<img src="https://img.shields.io/badge/Twitter-1DA1F2.svg?&style=plastic&logo=twitter&logoColor=white"/>](https://twitter.com/mz_jennytech)
  [<img src="https://img.shields.io/badge/Linkedin-0A66C2.svg?&style=plastic&logo=linkedin&logoColor=white"/>](https://www.linkedin.com/in/jennifer-udensi/)
  [<img src="https://img.shields.io/badge/GitHub-181717.svg?&style=plastic&logo=github&logoColor=white"/>](https://github.com/mz-jennytech)
