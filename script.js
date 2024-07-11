const OPTIONS = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '5f7b017e8amshff556b2d2908cd3p12dad9jsneb7d0c421d59',
        'x-rapidapi-host': 'ip-geo-location.p.rapidapi.com'

    }
}

const fetchIpInfo = ip => {
    return fetch('https://ip-geo-location.p.rapidapi.com/ip/$(ip)')
        .then(res => res.json())
        .catch(err => console.error(err))
}