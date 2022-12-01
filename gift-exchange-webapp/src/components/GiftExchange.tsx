import * as React from "react";
import {useAuth} from "../App";
import {useEffect, useState} from "react";
import {GiftExchangeModel, GiftExchangeRepository} from "../data/DataProviders";
import {Link} from "react-router-dom";

export function GiftExchange() {
    const auth = useAuth();
    const [giftExchanges, setGiftExchanges] = useState<Array<GiftExchangeModel>>([]);

    useEffect(() => {
        async function loadGiftExchanges() {
            const giftExchangeData = await GiftExchangeRepository.fetchGiftExchangesForUser(auth.user);
            setGiftExchanges(giftExchangeData);
        }

        loadGiftExchanges();
    }, [auth.user, giftExchanges]);

    const giftExchangeElements = giftExchanges.map((giftExchange) => {
        const giftExchangeMembers = giftExchange.members.map((member) => {
            return <li key={member.id}>{member.id}</li>
        })

        return <li key={giftExchange.id}>
            <h2>{giftExchange.name}</h2>
            <ul>{giftExchangeMembers}</ul>
        </li>
    });

    return (
        <div>
            <h1>Gift Exchanges</h1>
            <Link to="/gift-exchanges/create">Create new gift exchange</Link>
            <ul>{giftExchangeElements}</ul>
        </div>
    )
}
