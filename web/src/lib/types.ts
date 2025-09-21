export interface Contest {
    id: string;
    onlineStart: string; // Assuming ISO 8601 date string
    onlineEnd: string;   // Assuming ISO 8601 date string
    onSiteStart: string; // Assuming ISO 8601 date string
    onSiteEnd: string;   // Assuming ISO 8601 date string
    public: boolean;
    name: string;
    type: 'math' | 'physics';
}

export interface Team {
    id: string;
    name: string;
    player1email: string;
    player2email: string;
    player3email: string;
    player4email: string;
    player5email: string;
    contest: string;
}
