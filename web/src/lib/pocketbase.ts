import PocketBase from 'pocketbase';
import { authStore } from './stores';

export const pb = new PocketBase(import.meta.env.VITE_POCKETBASE_URL);

pb.authStore.onChange(() => {
    authStore.set(pb.authStore.model);
});