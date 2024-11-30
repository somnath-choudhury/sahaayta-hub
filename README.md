# Sahayta Hub

Sahayta Hub is a social networking platform designed to connect students and residents of Kharar, Punjab. It aims to enhance community engagement by providing a centralized hub for local events, accommodation listings, and essential services like plumbing and electrical assistance. Students can share their contact information for newcomers, facilitating easier transitions. By integrating these features, Sahayta Hub seeks to improve the quality of life and foster a supportive community for both students and local residents.

## Table of Contents

  1. Features
  2. Installation
  3. Usage
  4. Contact

## Features

* User Profiles: Create and manage personalized user profiles.
* Community Groups: Join or create groups based on interests or local communities.
* Events and Projects: Organize and join events along with sharing and discussion of projects.
* Resource and Idea Sharing: Share resources, articles, and ideas with the community.
* Discussions: Engage in discussions and forums to share ideas and get support.


## Installation
Follow these steps to set up the Sahayta Hub on your local machine.

### Prerequisites
* Node.js (v14.x or later)
* npm (v6.x or later)
* Git

### Clone the repository

```
git clone https://github.com/somnath-choudhury/sahaayta-hub.git
cd sahaayta-hub
```

### Install Dependencies

```
npm install
```

### Environment Variables

Create a .env file in the root directory and add the following variables:

```
VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
VITE_APPWRITE_URL='https://cloud.appwrite.io/v1'
VITE_APPWRITE_STORAGE_ID=your_appwrite_storage_id
VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
VITE_APPWRITE_USER_COLLECTION_ID=your_appwrite_user_collection_id
VITE_APPWRITE_SAVES_COLLECTION_ID=your_appwrite_saves_colection_id
VITE_APPWRITE_POST_COLLECTION_ID=your_appwrite_post_collection_id
```

### Start the Application

```
npm run dev
```

Open your browser and navigate to http://localhost:5173

## Usage

Once the application is running, you can:

* Register/Login: Create an account or log in using your credentials.
* Explore Communities: Browse and join various community groups.
* Create and Post Content: Post articles, share projects, and start discussions.
* Connect with Members: Send messages and connect with other community members.


## Contact
For questions, support aur contribution, please reach out to me:

* Email: [choudhurysomnath2000@gmail.com](mailto:choudhurysomnath2000@gmail.com)

* LinkedIn: [Somnath Choudhury](https://linkedin.com/in/somnath-choudhury-719a30230)

* GitHub: [Check out my other repos](https://github.com/somnath-choudhury)
