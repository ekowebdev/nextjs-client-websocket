// lib/pusher.ts
import Pusher from 'pusher-js';

const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_APP_KEY!, {
    cluster: process.env.NEXT_PUBLIC_PUSHER_APP_CLUSTER!,
    wsHost: process.env.NEXT_PUBLIC_BACKEND_URL!,
    wsPort: 6001,
    disableStats: true,
  });

export default pusher;