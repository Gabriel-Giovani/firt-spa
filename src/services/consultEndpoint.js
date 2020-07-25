import {URL_API} from './base';

export function consultEndpoint(endpoint){
    return fetch(`${URL_API}/${endpoint}`).then(result=> result.json());
}