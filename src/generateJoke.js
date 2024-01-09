import axios from 'axios'

function generateJoke () {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }
    // The jokes in this p
    axios.get('https://icanhazdadjoke.com', config).then((res) => {
        document.getElementById('joke').innerHTML = res.data.joke
    })
}

export default generateJoke;
