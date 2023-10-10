interface Projects {
    id: number;
    title: string;
    languages: string;
    description: string;
}

export const projects: Projects[] = [
    {
        id: 1,
        title: "Budgeteers",
        languages: "Java",
        description: "A budgeting API where a user can perform CRUD actions on expenses within a designated budget. Technologies Used: JWT, Spring Boot, Spring Security, MockMVC"
    },
    {
        id: 0,
        title: "Tic-Tac-Toe",
        languages: "Javascript, HTML, CSS",
        description: "A game of tic-tac-toe between two players, one whom is randomly chosen to start. Technologies Used: Bootstrap, SweetAlerts"
    }
]