import { reactive } from 'vue';

export const search = reactive ({
    _search_query : '',
    _order : '-rating',
    _response_list : [],
    _page_size : 30,
    _url : 'https://api.rawg.io/api/games',
    _key : '',
    _genre : '',

    getData(param) {
        this._search_query = param ? param : this._search_query;
        this._uri = this._url + '?search=' + this._search_query +
                '&page_size=' + this._page_size +
                '&key=' + this._key +
                '&genre=' + this._genre;
        fetch( this._uri, {
                method: 'GET',
                headers: {
                'Content-Type': 'application/json'
                },
        })
        .then((res) => {
            if (!res.ok) {
            throw Error(res.statusText);
            }
            return res.json();
        })
        .then((data) => {
            this._response_list = data.results;
            console.log ('res = ' ,  this._response_list);
        })
        .catch((err) => console.log(err))
    },
})
