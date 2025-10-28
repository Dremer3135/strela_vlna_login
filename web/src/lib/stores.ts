import { writable, readable } from 'svelte/store';
import type { Contest, Team } from './types';
import { pb } from './pocketbase';
import type { RecordModel } from 'pocketbase';

// Auth Store
export const authStore = writable<RecordModel | null>(null);

// Contests Store
export const contestsStore = readable<Contest[]>([], (set) => {
    pb.collection('contests').getFullList<Contest>({ sort: '-created', filter: 'public = true' })
        .then(contests => {
            set(contests);
        })
        .catch(err => {
            console.error('Error fetching contests:', err);
            set([]);
        });
});

// Teams Store
export const teamsStore = writable<Team[]>([]);

export async function fetchTeams(teacherId: string) {
    try {
        const teams = await pb.collection('teams').getFullList<Team>({
            filter: `teacher = "${teacherId}"`,
        });
        teamsStore.set(teams);
    } catch (err) {
        console.error('Error fetching teams:', err);
    }
}
