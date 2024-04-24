import axios from "axios";

const baseURL = "https://rvh98qbf-44321.brs.devtunnels.ms/Share";

const mercadoServiceApi = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
})

export const getAcaoPorCodigo = (codigo: string)  => {
    return mercadoServiceApi.get<any>(`${baseURL}/${codigo}`);
}