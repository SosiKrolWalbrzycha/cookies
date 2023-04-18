//Funkcja dodająca Cookie


function setCookie(name, value, date, options) {
    // definiujemy zmienną opts, która moze zawierać różne parametry, które chcemy zawrzeć w ciastku
    const opts = {
        path: "/",
        ...options
    }

    if (navigator.cookieEnabled) { // weryfikacja czy ciasteczka są włączone w przeglądarce
        const cookieName = encodeURIComponent(name); // definiujemy nazwe i enkodujemy
        const cookieValue = encodeURIComponent(value); // definiujemy wartość parmantru i enkodujemy

       
        // definiujemy wartość parmantru i enkodujemy
        let cookieText = cookieName + "=" + cookieValue + "; expires=" + date + "; SameSite=Strict"; // łączymy parametr z wartością parmaetru
        
        console.log(cookieText);
     

        // if (opts.days && typeof opts.days === "number") {
        //     const data = new Date();
        //     data.setTime(data.getTime() + (opts.days * 24*60*60*1000));
        //     cookieText += "; expires=" + data.toUTCString();
        // }

    // if który zamienia liczbę dni na datę i definiuje "expires"


        if (opts.path) {
            cookieText += "; path=" + opts.path;
            // zakres ciastka
        }
        if (opts.domain) {
            cookieText += "; domain=" + opts.domain;
            //domena ciastka
        }
        if (opts.secure) {
            cookieText += "; secure";
            // przy uzyjemy dostepne tylko z https
        }

        document.cookie = cookieText;

        alert(`Dodałem ciastko z parmatrem name = ${decodeURIComponent(cookieName)} do którego przypisałem value = ${decodeURIComponent(cookieValue)}` )
    }
}

// setCookie("User", "Sosi", { days: 10, path: "/" });