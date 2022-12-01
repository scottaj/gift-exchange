import * as React from "react";
import {GiftExchangeModel, GiftExchangeRepository} from "../data/DataProviders";
import {useAuth} from "../App";
import {useNavigate} from "react-router-dom";

export function CreateGiftExchange() {
    const auth = useAuth();
    const navigate = useNavigate();

    async function createExchange(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        let formData = new FormData(event.currentTarget);
        let giftExchange: GiftExchangeModel = {
            name: formData.get("exchangeName") as string,
            members: [{id: auth.user!}]
        }

        await GiftExchangeRepository.createGiftExchange(giftExchange);
        navigate("/gift-exchanges");
    }

    return (
        <div>
            <h2>Create Gift Exchange</h2>
            <form onSubmit={createExchange}>
                <label>
                    Gift Exchange Name
                    <input type="text" name="exchangeName"/>
                </label>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}