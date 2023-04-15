import AdministrativeService from './administrative-v2.service';
export declare class AdministrativeControllerVer02 {
    private administrativeService;
    constructor(administrativeService: AdministrativeService);
    getProvinces(): Promise<import("rxjs").Observable<any>>;
    getDistricts(provinceId: number): import("rxjs").Observable<any>;
    getWards(districtId: number): import("rxjs").Observable<any>;
}
