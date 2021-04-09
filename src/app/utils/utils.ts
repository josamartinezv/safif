import { HttpParams } from '@angular/common/http'

export const createRequestParams = (req?: any): HttpParams => {
    let options: HttpParams = new HttpParams();
    console.warn('REQ params ', req);

    if(req){
        Object.keys(req).forEach(key => {

            options = options.append(key, req[key]);
        });
    }
    
    return options;
}