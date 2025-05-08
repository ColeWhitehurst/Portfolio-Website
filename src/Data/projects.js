export const projects = [
    {
      id: "gba-emulator",
      title: "GBA Emulator",
      description: "A full-featured GameBoy Advance emulator written by refactoring the codebase using ES6 standards from a previously built ES5 project.",
      description2: "An in-browser GameBoy Advance emulator rebuilt with modern ES6+ syntax and modular architecture. Features include accurate video rendering using the Canvas API, audio emulation via the Web Audio API, and performance improvements from class-based refactoring. This emulator lays the groundwork for future ROM loader enhancements and user account integration.",
      tech: ["JavaScript", "Canvas", "Web Audio API"],
      image: "/GBA.png",
      github: "https://github.com/ColeWhitehurst/GBA-Emulator",
    },
    {
      id: "transfer-market",
      title: "Transfer Market Simulator",
      description: "A simulation of what its like to be the manager of a top European team transferring players in and out to build your ultimate team.",
      description2: "A frontend-focused app that mimics the football transfer market experience. It uses data from TheSportsDB and API-Football to simulate scouting, bidding, and team-building for top European clubs. This project explores asynchronous API integration, player stat visualization, and conditional rendering based on transfer logic.",
      tech: ["React", "Postgresql", "Restful API"],
      image: "/transfer.png",
      github: "https://github.com/ColeWhitehurst/Transfer-Market",
    },
    {
      id: "task-manager",
      title: "Task Manager",
      description: "A task manager created by utilizing controllers and services in the backend and implementing RTK Query client-side.",
      description2: "A fullstack task management app built with a service-controller backend pattern and a React frontend powered by RTK Query. Features include project and task CRUD operations, user authentication, and responsive UI design. Built to showcase scalable code structure and state management best practices.",
      tech: ["RTK Query", "GraphQL", "Controllers"],
      image: "/task.png",
      github: "https://github.com/ColeWhitehurst/Task-Manager",
    },
    {
      id: "foundra",
      title: "Foundra",
      description: "Foundra helps hiring teams find the candidate they’ve spent too much time searching for.",
      description2: "An applicant-forward hiring platform that empowers candidates to stand out with video applications. Built with real-time messaging via WebSockets, resume and video uploads using AWS S3, and a role-based dashboard experience for candidates, hiring managers, and admins. Prioritizes modern UX and seamless interaction between users.",
      tech: ["AWS S3 Buckets", "WebSockets", "React Media Recorder"],
      image: "/foundra.png",
      github: "https://github.com/ColeWhitehurst/Capstone-Foundra",
      site: "https://www.foundra.app"
    },
  ];  