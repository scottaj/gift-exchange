
export interface UserModel {
    id: string;
}

export interface GiftExchangeModel {
    id?: number;
    name: string;
    members: Array<UserModel>;
}

export async function fetchGiftExchangesForUser(userId?: string): Promise<Array<GiftExchangeModel>> {
    if (!userId) {
        return Promise.resolve([]);
    } else {
        const mockData: Promise<Array<GiftExchangeModel>> = new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    {id: 1, name: 'Scott Family Christmas 2022', members: [{id: 'al'}, {id: 'jeanette'}]},
                    {id: 2, name: 'Head Family Christmas 2022', members: [{id: 'al'}, {id: 'jeanette'}]}
                ]);
            }, 500);
        })

        return mockData;
    }
}