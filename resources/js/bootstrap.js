import _ from 'lodash';
import Echo from "laravel-echo"
import Web3 from 'pusher-js';

window._ = _;

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

import axios from 'axios';

window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */


window.io = Pusher;

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: "local",
    wsHost: window.location.hostname,
    wssHost: window.location.hostname,
    wsPort: 49465,
    wssPort: 49465,
    cluster: "mt1",
    forceTLS: true,
    disableStats: true,
    enabledTransports: ['ws', 'wss']
});
