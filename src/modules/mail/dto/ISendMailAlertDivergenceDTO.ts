interface ISendMailAlertDivergenceDTO{
   user: {
     name: string,
     registration: string
   }

   inforGeneral: {
    client: string,
    desc_product: string,
    invoice: string,
    cnpj: string,
    cod_product: string,
   }

   summary:{
    total_in_invoice: number,
    total_scanned: number,
    observation: string,
   }

   detailing: {
    serial_number: string,
    qtd_product: number,
    date_scanned: Date,
   }[]


}