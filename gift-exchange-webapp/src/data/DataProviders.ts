
export interface UserModel {
    id: string;
}

export interface GiftExchangeModel {
    id?: number;
    name: string;
    members: Array<UserModel>;
}

export class GiftExchangeRepository {
    static async fetchGiftExchangesForUser(userId?: string): Promise<Array<GiftExchangeModel>> {
        if (!userId) {
            return Promise.resolve([]);
        } else {
            if (!localStorage.getItem("GiftExchanges")) {
                localStorage.setItem("GiftExchanges", "[]");
            }
            const localStorageData: Array<GiftExchangeModel> = JSON.parse(localStorage.getItem("GiftExchanges") ?? "[]")

            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(localStorageData);
                }, 500);
            });
        }
    }

    static async createGiftExchange(giftExchange: GiftExchangeModel): Promise<GiftExchangeModel> {
        if (!localStorage.getItem("GiftExchanges")) {
            localStorage.setItem("GiftExchanges", "[]");
        }

        const localStorageData: Array<GiftExchangeModel> = JSON.parse(localStorage.getItem("GiftExchanges") ?? "[]")
        return new Promise((resolve) => {
            setTimeout(() => {
                const updatedModel = {...giftExchange, id: Math.floor(Math.random() * 10000)};
                localStorageData.push(updatedModel);
                localStorage.setItem("GiftExchanges", JSON.stringify(localStorageData));
                resolve(updatedModel);
            }, 500);
        });
    }
}