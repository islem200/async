//Task 01: Iterating with Async/Await

async function iterateWithAsyncAwait(arr) {
    for (let value of arr) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(value);
    }
};

//Task 02: Awaiting a Call

async function awaitCall() {
    const fetchData = () => new Promise(resolve => {
        setTimeout(() => resolve("Data fetched from API"), 1000);
    });
    
    const data = await fetchData();
    console.log(data);
};

//Task 03: Handling Errors with Async/Await

async function awaitCallWithErrorHandling() {
    const fetchData = () => new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error("API call failed")), 1000);
    });
    
    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.error("An error occurred while fetching data:", error.message);
    }
};

//Task 04: Chaining Async/Await

async function chainedAsyncFunctions() {
    const firstFunction = async () => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log("First function completed");
    };
    
    const secondFunction = async () => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log("Second function completed");
    };
    
    const thirdFunction = async () => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log("Third function completed");
    };

    await firstFunction();
    await secondFunction();
    await thirdFunction();
};

//Task 05: Awaiting Concurrent Requests

async function concurrentRequests() {
    const fetchData1 = () => new Promise(resolve => setTimeout(() => resolve("API call 1 result"), 1000));
    const fetchData2 = () => new Promise(resolve => setTimeout(() => resolve("API call 2 result"), 1000));
    
    const [result1, result2] = await Promise.all([fetchData1(), fetchData2()]);
    console.log("Combined Results:", result1, result2);
};

//Task 06: Awaiting Parallel Calls

async function parallelCalls(urls) {
    const fetchData = (url) => new Promise(resolve => {
        setTimeout(() => resolve(`Data from ${url}`), 1000);
    });
    
    const results = await Promise.all(urls.map(url => fetchData(url)));
    console.log("Responses:", results);
};






