
function host(url, type) {
    const apiKey = 'AIzaSyAClDSbq3bjaJZmbGgsk_Xmw-fu9cinEB8';
    const baseUrl = 'https://movies-d7fb7-default-rtdb.europe-west1.firebasedatabase.app/';
    if (type === 'auth') {
        return `${url}${apiKey}`;
    } else if (type === 'data') {
        return `${baseUrl}${url}`;
    }


}

export function request(type, url, methods, body) {
    try {
        return fetch(host(url, type), {
            method: methods,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then((res) => res.json())
            .catch((error) => console.log(error.message));
    } catch (error) {
        console.log('Session timeout');
    }



};