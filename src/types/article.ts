export type Article = {
    id: Number;
    title: string;
    content: string;
    annotation: string;
}
export type Articles = {
    meta: any;
    contents: Array<Article>;
}