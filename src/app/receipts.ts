export class Receipt {
    id: number;
    name: string;
    description: string;
    ingredients: string;
    details: boolean;
    edit_form: boolean;
}

export class Comment {
    id: number;
    comment: string;
    stars: number;
}

export const RECEIPTS: Receipt[] = [
    {
        id: 1,
        name: "Vedella amb bolets",
        description: "Remenar-ho tot bé.",
        ingredients: "Vedella, bolets, ceba, tomàquet",
        details: true,
        edit_form: false
    },
];

export const COMMENTS: Comment[] = [
    {
        id: 1,
        comment: "M'encanta aquesta recepta!",
        stars: 5
    }
];                                    