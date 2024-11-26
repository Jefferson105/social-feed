export interface IFindDB {
    collectionName: string;
    query: any;
}
export interface IAggregateDB {
    collectionName: string;
    pipeline: any[];
}

export interface IUpdateDB extends IFindDB {
    data?: any;
    opt?: any;
}

export interface IInsertDB {
    collectionName: string;
    data: any;
}
