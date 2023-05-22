import { UUID } from "node:crypto";
import { ApiProperty } from '@nestjs/swagger';

export class User {
    @ApiProperty()
    id: UUID;
    @ApiProperty()
    username: string;
    @ApiProperty()
    password: string;
}
