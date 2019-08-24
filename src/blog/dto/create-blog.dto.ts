import { ApiModelProperty } from '@nestjs/swagger'
import { IsString, IsDate, IsBoolean, IsNumber } from 'class-validator'

export class CreateBlogDto {

    @ApiModelProperty()
    @IsString()
    readonly title: string;

    @ApiModelProperty()
    @IsString()
    readonly author: string;

    @ApiModelProperty()
    @IsString()
    readonly body: string;

    readonly date: Date;

    @ApiModelProperty()
    @IsBoolean()
    readonly hidden: boolean;

    readonly meta: {
        favs: number;
        readonly votes: number;
    };
}
