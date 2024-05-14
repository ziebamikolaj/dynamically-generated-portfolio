![Workflow Status](https://github.com/ziebamikolaj/dynamically-generated-portfolio/actions/workflows/conventional_commits.yml/badge.svg)
![Workflow Status](https://github.com/ziebamikolaj/dynamically-generated-portfolio/actions/workflows/main-ci.yml/badge.svg)

# Mikołaj Zięba's Dynamic GitHub Portfolio

Welcome to the official repository for Mikołaj Zięba's dynamic GitHub portfolio. This project is designed to showcase my projects and skills by dynamically generating a portfolio website that scans my GitHub repositories and displays them as interactive cards based on each repo's metadata and README files. Built with React, TypeScript, and Vite, this portfolio highlights modern web development practices and tools.

## Features

- **Dynamic Repository Cards**: Automatically generates visual cards for each repository, pulling in details such as the repository name, description, language, and latest commit.
- **Real-Time Updates**: Updates content in real-time as new repositories are added or existing repositories are updated on GitHub.
- **Responsive Design**: Fully responsive web design that looks great on both desktop and mobile devices.
- **Interactive UI**: Interactive elements that enhance user engagement, such as modals for detailed repository information and animations.

## Technologies Used

- **Next.js**: A popular React framework for building fast, static, and dynamic web applications.
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Vite**: A modern frontend build tool that significantly improves the development experience.
- **GitHub API**: To fetch real-time data from my GitHub repositories.

## Setup and Installation

To get this portfolio running on your local machine, follow these steps:

1. **Clone the repository**

```bash
git clone https://github.com/ziebamikolaj/dynamically-generated-portfolio.git
cd dynamically-generated-portfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```

This will start the local server at `http://localhost:3000/`.

4. **Build for production**

```bash
npm run build
```

This command prepares the application for production by optimizing and bundling the files.
