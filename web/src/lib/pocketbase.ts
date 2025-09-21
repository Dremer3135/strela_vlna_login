import PocketBase from 'pocketbase';
import { authStore } from './stores';

export const pb = new PocketBase(import.meta.env.VITE_POCKETBASE_URL);

// Set the initial value of the authStore
authStore.set(pb.authStore.model);

pb.authStore.onChange(() => {
    authStore.set(pb.authStore.model);
});