// lib/echo.ts
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

if (typeof window !== 'undefined') {
    (window as any).Pusher = Pusher;
}

const echo = new Echo({
    broadcaster: 'pusher',
    key: process.env.NEXT_PUBLIC_PUSHER_APP_KEY!,
    cluster: process.env.NEXT_PUBLIC_PUSHER_APP_CLUSTER!,
    wsHost: process.env.NEXT_PUBLIC_BACKEND_URL!,
    wsPort: process.env.NEXT_PUBLIC_WEBSOCKET_PORT!,
    disableStats: true,
});

export default echo;