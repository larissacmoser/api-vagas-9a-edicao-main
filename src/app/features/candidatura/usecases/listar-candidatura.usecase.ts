import { CandidaturaRepository } from "../database/candidatura.database";

interface ListarCandidaturaParams{
    idCandidato: string
}

export class ListarCandidaturaUsecase {
    public async execute(data:ListarCandidaturaParams){
        const repository = new CandidaturaRepository();
        const listaCandidaturas = await repository.getById(data.idCandidato);

        if(!listaCandidaturas){
            return {
                ok:false,
                code:404,
                
            }
        }
    }
}