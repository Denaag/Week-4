function handleEvent(value) {
    console.log(value);
}

function handleError(err) {
    console.error(err);
}

doSomethingThatReturnsAPromise()
    .then(handleEvent);
    .catch(handleError);

doSomethingThatReturnsAPromise()//one way to do a promise
    .then((value) => {
        console.log(value);
    }).catch ((err) => {
        console.log(err);
    })