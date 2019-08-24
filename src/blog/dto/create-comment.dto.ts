import { ApiModelProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class CreateCommentDto {
    @ApiModelProperty()
    @IsString()
    readonly body: string;

    @ApiModelProperty()
    @IsString()
    readonly id: string;
}