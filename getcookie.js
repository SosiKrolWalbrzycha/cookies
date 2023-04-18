
function getCookie(name) {
    if (document.cookie !== "") {
        const cookies = document.cookie.split(/; */);

        for (let cookie of cookies) {
            const [ cookieName, cookieValue] = cookie.split("=");
            if (cookieName === decodeURIComponent(name)) {
                alert(`Dzień dobry wiem, że masz na nazwisko ${decodeURIComponent(cookieValue)}`); 
            }
        }
    }

    return undefined;
}


