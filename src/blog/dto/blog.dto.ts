class CommentDto {
    readonly body: string;
    readonly date: Date;
}

class MetaDto {
    readonly vote: number;
    readonly favs: number;
}

export class BlogDto {
    readonly title: string;
    readonly author: string;
    readonly body: string;
    readonly comments: CommentDto;
    readonly date: Date;
    readonly hidden: boolean;
    readonly meta: MetaDto;
}
