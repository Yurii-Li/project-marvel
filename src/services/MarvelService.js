class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public';
    _apiKey = 'apikey=5210b14785e6643e770990b67a77ccaa';

    getResource = async (url) => {
        let res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    }

    getAllCharacters = async () => {
        return await this.getResource(`${this._apiBase}/characters?limit=9&${this._apiKey}`);
    }

    getCharacter = async (id) => {
        return await this.getResource(`${this._apiBase}/characters/${id}?${this._apiKey}`);
    }

}

export { MarvelService };