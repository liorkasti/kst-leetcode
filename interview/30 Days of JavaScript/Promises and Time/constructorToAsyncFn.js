const [isCookiesStoreOpen, isGoodCookieInStock] = [true, true];

// Promise constructor
const promiseConstructor = new Promise((res, rej) => {
    if (isCookiesStoreOpen && isGoodCookieInStock) {
        res("Cookie from constructor ");
    } else {
        rej("Oi vei cookie from constructor");
    }
});

// Async function
const asyncFunction = async () => {
    if (isCookiesStoreOpen && isGoodCookieInStock) {
        return "Cookie from asyncFn";
    }
    throw new Error("Oi vei cookie from asyncFn'");
}

const run = async () => {
    try {
        // Await both promise and async function
        const result1 = await promiseConstructor;
        const result2 = await asyncFunction();
        
        console.log("Result from promiseConstructor:", result1);
        console.log("Result from asyncFunction:", result2);
    } catch (error) {
        console.error(error.message);
    }

    // Log the promise and async function directly
    console.log("Promise constructor (unresolved):", promiseConstructor);
    console.log("Async function (unresolved):", asyncFunction());
}

// Run the async function
run();
