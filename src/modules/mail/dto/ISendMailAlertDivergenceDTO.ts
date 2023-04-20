import { ApiProperty } from "@nestjs/swagger";

export class ISendMailAlertDivergenceDTO {
  // @ApiProperty({
  //   type: 'object',
  //   properties: {
  //     name: {
  //       type: "string"
  //     },
  //     registration: {
  //       type: "string"
  //     },
  //   }
  // })
  // @ApiProperty()
  // user: {
  //   name: string,
  //   registration: string
  // }

  @ApiProperty({
    type: 'object',
    properties: {
      client: {
        type: "string"
      },
      desc_product: {
        type: "string"
      },
      invoice: {
        type: "string"
      },
      cod_product: {
        type: "string"
      },
    }
  })
  inforGeneral: {
    client: string,
    desc_product: string,
    invoice: string,
    cod_product: string,
  }

  @ApiProperty({
    type: 'object',
    properties: {
      total_in_invoice: {
        type: "number"
      },
      total_scanned: {
        type: "number"
      },
      observation: {
        type: "string"
      }
    }
  })
  summary: {
    total_in_invoice: number,
    total_scanned: number,
    observation: string,
  }

  @ApiProperty({
    type: 'array',
    items: {
      properties: {
        serial_number: {
          type: "string"
        },
        qtd_product: {
          type: "number"
        },
        date_scanned: {
          type: "Date"
        }
      }
    }
  })
  detailing: {
    serial_number: string,
    qtd_product: number,
    date_scanned: Date,
  }[]


}