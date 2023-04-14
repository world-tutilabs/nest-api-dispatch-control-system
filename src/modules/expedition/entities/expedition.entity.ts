import { ApiProperty } from "@nestjs/swagger";

export class Expedition {
    @ApiProperty()
    id_expedition: string;
    @ApiProperty()
    amount: number;
    @ApiProperty()
    id_status: string;
    @ApiProperty()
    nf: string;
    @ApiProperty()
    barcode: string;
    @ApiProperty()
    id_truck: string;
    @ApiProperty()
    description_product: string;
    @ApiProperty()
    code_product: string;
    @ApiProperty()
    observation: string;
    @ApiProperty()
    client: string;
}
