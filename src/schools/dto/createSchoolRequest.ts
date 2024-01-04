import { ApiProperty } from '@nestjs/swagger';

export class CreateSchoolRequest {
    @ApiProperty()
    address: string;

    @ApiProperty()
    name: string;
}
