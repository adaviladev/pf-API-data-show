const OPTIONS = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '5f7b017e8amshff556b2d2908cd3p12dad9jsneb7d0c421d59',
        'x-rapidapi-host': 'ip-geo-location.p.rapidapi.com'
    }
}

const fetchIpInfo = ip => {
    return fetch(`https://ip-geo-location.p.rapidapi.com/ip/${ip}?format=json&language=en`, OPTIONS)
        .then(res => res.json())
        .catch(err => console.error(err))
}

const $form = document.querySelector('#form')
const $input = document.querySelector('#input')
const $submit = document.querySelector('#submit')
const $results = document.querySelector('#results')

$form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const {value} = $input
    if (!value) return


    $submit.setAttribute('disabled', '')
    $submit.setAttribute('aria-busy', 'true')

    const ipInfo = await fetchIpInfo(value)


    if(ipInfo) {
        $results.innerHTML = JSON.stringify(ipInfo, null, 2)
    }

    $submit.removeAttribute('disabled')
    $submit.removeAttribute('aria-busy')
})