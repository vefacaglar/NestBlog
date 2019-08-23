export class CreateBlogDto {
    readonly title: string;
    readonly author: string;
    readonly body: string;
    readonly date: Date;
    readonly hidden: boolean;
}
