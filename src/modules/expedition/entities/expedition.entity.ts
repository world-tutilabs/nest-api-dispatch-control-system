import { ApiProperty } from "@nestjs/swagger";

export class Expedition {
    @ApiProperty()
    id: string;
    @ApiProperty()
    amount: number;
    @ApiProperty()
    fk_status: string;
    @ApiProperty()
    nf: string;
    @ApiProperty()
    barcode: string;
    @ApiProperty()
    fk_truck: string;
    @ApiProperty()
    description_product: string;
    @ApiProperty()
    code_product: string;
    @ApiProperty()
    observation: string;
    @ApiProperty()
    client: string;
    @ApiProperty()
    fk_user: string;
}
