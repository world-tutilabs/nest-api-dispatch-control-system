import { Injectable } from '@nestjs/common';

@Injectable()
export class ListExpeditionService {
  constructor(private readonly expeditionRepository: ExpedtitionRepository){}
  async execute(){
    const exp = [
      {
        id: '1', 
        qntd: 10,
        id_status: '1', 
        nf: 123, 
        produto: 'Tampa Traseira',
        cliente: 'Moto Honda',
        cod_barra: 1234, 
        id_caminhao: '1',
        carrinho: [
          {
          id: '12',
          id_exp: '1',
          codigo: 'TUTILABS-0001',
          quantidade: 5,
        },
        {
          id: '13',
          id_exp: '1',
          codigo: 'TUTILABS-0002',
          quantidade: 5,
        }
        ]
      }
    ]
    return exp
  }
}
