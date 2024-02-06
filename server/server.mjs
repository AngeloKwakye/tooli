import fetch from 'node-fetch';





const getJokes = async () => {
    const url = 'https://world-of-jokes1.p.rapidapi.com/v1/jokes/categories';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4ca7a935c0msh1c37bd10cb6fed8p194ebdjsn28dbf24b34c4',
            'X-RapidAPI-Host': 'world-of-jokes1.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
 
    } catch (error) {
        console.error(error);
    }
}

// Call the function
getJokes();
