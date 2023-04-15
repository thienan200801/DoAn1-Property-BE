import AdministrativeService from './administrative-v2.service';
export declare class AdministrativeController {
    private administrativeService;
    constructor(administrativeService: AdministrativeService);
    getProvinces(): import("rxjs").Observable<any>;
    getDistricts(provinceId: number): import("rxjs").Observable<any>;
    getWards(districtId: number): import("rxjs").Observable<any>;
}
