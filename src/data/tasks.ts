export interface Task {
    id: number;
    title: string;
    description: string;
    date: string;
    heure: string;
    status: number; // 0 pour "à faire", 1 pour "fait"
}

export const tasks: Task[] = [
    { id: 1, title: "Todo List", description: "Create todo list in figma", date: "02/12/2024", heure: "12:31", status: 0 },
    { id: 2, title: "Clean Duboni", description: "Clean house", date: "02/12/2024", heure: "12:33", status: 1 },
    { id: 3, title: "Buy groceries", description: "Purchase fruits and vegetables", date: "02/12/2024", heure: "13:00", status: 0 },
    { id: 4, title: "Do laundry", description: "Wash clothes", date: "02/12/2024", heure: "14:00", status: 0 },
    { id: 5, title: "Study React", description: "Study React documentation", date: "02/12/2024", heure: "15:00", status: 0 },
    { id: 6, title: "Complete project report", description: "Write project report for work", date: "02/12/2024", heure: "16:30", status: 1 },
    { id: 7, title: "Meeting with team", description: "Discuss project progress", date: "02/12/2024", heure: "10:00", status: 0 },
    { id: 8, title: "Clean kitchen", description: "Clean dishes and countertops", date: "02/12/2024", heure: "17:00", status: 0 },
    { id: 9, title: "Watch tutorial", description: "Watch video on advanced React topics", date: "02/12/2024", heure: "18:00", status: 0 },
    { id: 10, title: "Take out trash", description: "Take out the trash to the dumpster", date: "02/12/2024", heure: "19:00", status: 0 },
    { id: 11, title: "Call mom", description: "Call mom to check in", date: "02/12/2024", heure: "20:00", status: 1 },
    { id: 12, title: "Grocery shopping", description: "Pick up groceries for the week", date: "02/12/2024", heure: "11:00", status: 0 },
    { id: 13, title: "Workout session", description: "Go for a run", date: "02/12/2024", heure: "07:00", status: 0 },
    { id: 14, title: "Meeting with client", description: "Discuss new project with the client", date: "02/12/2024", heure: "09:00", status: 1 },
    { id: 15, title: "Read book", description: "Read at least 50 pages of current book", date: "02/12/2024", heure: "20:30", status: 0 },
    { id: 16, title: "Write blog post", description: "Write a blog post about React hooks", date: "02/12/2024", heure: "21:00", status: 0 },
    { id: 17, title: "Fix bug in app", description: "Resolve issue in the shopping cart", date: "02/12/2024", heure: "22:00", status: 0 },
    { id: 18, title: "Buy new laptop", description: "Research best laptops for coding", date: "02/12/2024", heure: "23:00", status: 0 },
    { id: 19, title: "Clean the car", description: "Vacuum and wash the car", date: "02/12/2024", heure: "12:45", status: 0 },
    { id: 20, title: "Plan weekend trip", description: "Research destinations for a weekend trip", date: "02/12/2024", heure: "14:15", status: 1 },
    { id: 21, title: "Attend webinar", description: "Participate in online React webinar", date: "02/12/2024", heure: "16:00", status: 0 },
    { id: 22, title: "Clean bathroom", description: "Scrub shower and clean mirrors", date: "02/12/2024", heure: "17:30", status: 0 },
    { id: 23, title: "Update portfolio", description: "Add new projects to portfolio site", date: "02/12/2024", heure: "18:15", status: 1 },
    { id: 24, title: "Send email", description: "Send update email to team", date: "02/12/2024", heure: "19:30", status: 0 },
    { id: 25, title: "Buy birthday gift", description: "Buy gift for friend’s birthday", date: "02/12/2024", heure: "10:15", status: 0 },
    { id: 26, title: "Research new tech", description: "Research new trends in web development", date: "02/12/2024", heure: "21:30", status: 0 },
    { id: 27, title: "Go for a walk", description: "Take a walk around the neighborhood", date: "02/12/2024", heure: "08:00", status: 0 }
];

