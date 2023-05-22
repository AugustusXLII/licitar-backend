import { UUID } from "node:crypto";
import { ApiProperty } from '@nestjs/swagger';

export class Disputa {
    @ApiProperty()
    id: UUID;
    @ApiProperty()
    currentBid: number;
    @ApiProperty()
    status: string;
    @ApiProperty()
    createdTime: number;
}
