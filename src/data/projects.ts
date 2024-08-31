import { Project } from "../types/Project";

export const projects: Project[] = [
  {
    id: 1,
    name: "Travel Cost Search System",
    description:
      "The Travel Cost Search System is an application developed using Python that utilizes the A* algorithm to calculate the most cost-effective train travel routes from Jakarta to various cities. It presents the optimal path and total cost in a user-friendly interface. The application's features include a combo box input to minimize user errors and ensure reliable route suggestions and aims to address the lack of information about cheap train routes.",
    image: "Routwise Project Photo.png",
    link: "https://drive.google.com/file/d/14BtTM1lGbt8wr6I3jIYr3tGql1i96RZ1/view",
    techStack: ["Python", "A* Algorithm", "GUI"],
  },
  {
    id: 2,
    name: "Lite Database Application for Brilla Futura Catering",
    description:
      "The Lite Database Application for Brilla Futura Catering was created to ensure data confidentiality and administrative access control. The application features an intuitive GUI that simplifies order management and financial tasks while providing a quick overview of operations. It achieves data normalization up to the 3rd Normal Form (3NF), optimizing its structure and enhancing data integrity and efficiency.",
    image: "brilla futura.png",
    link: "https://drive.google.com/file/d/14BtTM1lGbt8wr6I3jIYr3tGql1i96RZ1/view",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];
