interface Projects {
    id: number;
    title: string;
    languages: string;
    description: string;
    github: string;
    img: any;
}
export const projects: Projects[] = [
    {
        id: 1,
        title: "Budgeteers",
        languages: "Java",
        description: "A budgeting API where a user can perform CRUD actions on expenses within a designated budget. Technologies Used: JWT, Spring Boot, Spring Security, MockMVC",
        github: "https://github.com/lizabawa/budgeteers-server",
        img: "https://github.com/lizabawa/budgeteers-server/raw/main/endpoints.png"
    },
    {
        id: 0,
        title: "Tic-Tac-Toe",
        languages: "Javascript, HTML, CSS",
        description: "A game of tic-tac-toe between two players, one whom is randomly chosen to start. Technologies Used: Bootstrap, SweetAlerts",
        github: "https://github.com/lizabawa/tic-tac-toe",
        img: "https://github.com/lizabawa/tic-tac-toe/raw/main/media/ttt-ui.png"
    }
]