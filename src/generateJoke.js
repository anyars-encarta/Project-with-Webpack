import axios from 'axios'

function generateJoke () {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }
// fetch jokes from https://icanhazdad
    axios.get('https://icanhazdadjoke.com', config).then((res) => {
        document.getElementById('joke').innerHTML = res.data.joke
    })
}

export default generateJoke;
