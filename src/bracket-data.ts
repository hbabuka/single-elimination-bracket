// ========== Interfaces ==========

export interface Team {
    id: number;
    name: string;
    imgUrl: string;
}

export interface Match {
    teams: { id: number; score: number }[];
}

export interface Round {
    title: string;
    matches: Match[];
}

// ========== Data ==========

export const teams: Team[] = [
    {
        id: 1,
        name: "The Cat",
        imgUrl: "https://cmp-image-store1.azureedge.net/7272b6b3-e9e0-4c93-c887-08d9f165fede_128_128",
    },
    {
        id: 2,
        name: "Purple Dragon",
        imgUrl: "https://cmp-image-store1.azureedge.net/22ac0419-6cdd-4b6b-c55a-08d9f165fede_128_128",
    },
    {
        id: 3,
        name: "Pizza Team",
        imgUrl: "https://cmp-image-store1.azureedge.net/98dbda64-f2fc-4b34-d932-08d9f165f549_128_128",
    },
    {
        id: 4,
        name: "Crazy Witch",
        imgUrl: "https://cmp-image-store1.azureedge.net/963104ad-02e6-4463-c886-08d9f165fede_128_128",
    },
    {
        id: 5,
        name: "Buzz",
        imgUrl: "https://cmp-image-store1.azureedge.net/87402a7e-1d35-423d-c883-08d9f165fede_128_128",
    },
    {
        id: 6,
        name: "The Eye",
        imgUrl: "https://cmp-image-store1.azureedge.net/2b8e3ed9-7223-46ba-c884-08d9f165fede_128_128",
    },
    {
        id: 7,
        name: "Big Mac",
        imgUrl: "https://cmp-image-store1.azureedge.net/ff766ddf-8d04-4d17-c885-08d9f165fede_128_128",
    },
    {
        id: 8,
        name: "Mindful Gaming",
        imgUrl: "https://cmp-image-store1.azureedge.net/776ae7cf-a317-4782-d92f-08d9f165f549_128_128",
    },
];

export const bracket: Round[] = [
    {
        title: "Quarter Finals",
        matches: [
            {
                teams: [
                    { id: 1, score: 5 },
                    { id: 2, score: 2 },
                ],
            },
            {
                teams: [
                    { id: 3, score: 4 },
                    { id: 4, score: 8 },
                ],
            },
            {
                teams: [
                    { id: 5, score: 2 },
                    { id: 6, score: 1 },
                ],
            },
            {
                teams: [
                    { id: 7, score: 3 },
                    { id: 8, score: 4 },
                ],
            },
        ],
    },
    {
        title: "Semi Finals",
        matches: [
            {
                teams: [
                    { id: 1, score: 5 },
                    { id: 4, score: 6 },
                ],
            },
            {
                teams: [
                    { id: 5, score: 2 },
                    { id: 8, score: 4 },
                ],
            },
        ],
    },
    {
        title: "Finals",
        matches: [
            {
                teams: [
                    { id: 4, score: 5 },
                    { id: 8, score: 3 },
                ],
            },
        ],
    },
];
