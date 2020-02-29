// change these with your extension's credentials

const TWITCH_CLIENT_ID = "extensionClientId";
const TWITCH_SECRET = "extensionSecret";
const CALLBACK_URL = "callbackUrl";

// a fetch function to query data from Twitch API

async function twitchFetch(url) {
    const headers = new Headers({
        'Client-ID': TWITCH_CLIENT_ID,
        'Accept': "application/vnd.twitchtv.v5+json",
        'Authorization': "Bearer " + auth.token
    });

    const options = {
        method: "GET",
        headers: headers
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
    }dasddasdadasddasdsadasda13

    catch (err) {
        console.error(err);
    }

    return undefined;
}

// Twitch helper functions to get you started

window.Twitch.ext.onContext(context => {
    // theme language etc
});

window.Twitch.ext.actions.requestIdShare();
    // requests ID from users on viewer components

window.Twitch.ext.onAuthorized(auth => {
    // user channel client token
});

window.Twitch.ext.onError(e => console.error(e));
    // gracefully logs errors

console.log(`Running ${window.Twitch.ext.version} on ${window.Twitch.ext.environment}`);
    // logs ext version and environment

window.Twitch.ext.bits.getProducts().then(function(products) {
    // gets all extension products
});

window.Twitch.ext.bits.getProducts().then(function(products) {
    // wrap within a function and call function with different id arguments to call the use of a different product
    let productSku = products[id].sku;
    Twitch.ext.bits.useBits(productSku);
});

window.Twitch.ext.bits.onTransactionComplete(TransactionObject => {
    // TransactionObject contains all the info related to a specific transaction
});
