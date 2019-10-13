import { GET_INSURANCES } from "../types"
import axios from "axios";


export function getInsurances(){
    const request = axios({
        url:'/api/insurances',
        method:'GET'
    }).then(({data}) => {
        return {...data,status:200}
    }).catch(({ response }) => {
        console.error(response)
    })

    return {
        type: GET_INSURANCES,
        payload:request
    }
}