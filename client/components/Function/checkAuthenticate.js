import {_helper} from './API';

export default () => {
    return _helper.fetchGET(
        '/users/checkAuthenticate',
        {
        }
    )
    .then((response) => {
        if (response) {
            const { data, status } = response;
            if (status == 200) {
                return true;
            }
            else {
                return false;
            }
        }
    })
}

