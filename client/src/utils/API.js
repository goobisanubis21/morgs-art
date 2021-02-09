import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {

    getBook: function () {
        return axios.get("api/paitnings")
    }
};