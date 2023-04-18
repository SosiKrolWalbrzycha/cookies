function deleteCookie(name, options) {
    const opts = {
        path: "/",
        ...options
    }

    const cookieName = encodeURIComponent(name);
    let cookieText = cookieName + "=";
    if (opts.path) {
        cookieText += "; path=" + opts.path;
    }
    cookieText += "; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    document.cookie = cookieText;
    alert('Zmieniłem date na tak późną że ciastko znikęło')
}

