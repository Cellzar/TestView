export interface Data {
    data: Book[];
}

export interface Book {
    id:          number;
    title:       string;
    description: string;
    pageCount:   number;
    excerpt:     string;
    publicDate:  string;
}