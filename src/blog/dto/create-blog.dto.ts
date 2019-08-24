import { ApiModelProperty } from '@nestjs/swagger'
import { IsString, IsDate, IsBoolean } from 'class-validator'

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

    @ApiModelProperty()
    @IsDate()
    readonly date: Date;

    @ApiModelProperty()
    @IsBoolean()
    readonly hidden: boolean;
}
