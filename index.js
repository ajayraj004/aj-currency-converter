import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_gY0hHr6bjynSuEDizgj3U9XFNThrhzfKDkidyEqv');



export async function convertCurrency(fromcurrency, toCurrency, units) {
    const res = await freecurrencyapi.latest({
        base_currency: fromcurrency,
        currencies: toCurrency
    });

    const multiplier = res.data[toCurrency];
    return multiplier*units;
}
