import { Injectable } from '@angular/core';



@Injectable({
    providedIn: 'root',
})
export class UtilityService {

    constructor() {

    }

    epochToDate(epochParam) {
        return new Date(epochParam * 1000)
    }

}
