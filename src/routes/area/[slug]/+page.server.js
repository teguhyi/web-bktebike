import { error } from '@sveltejs/kit';
import { locations } from '$lib/data/locations';

export function load({ params }) {
    const { slug } = params;
    const location = locations.find((loc) => loc.slug === slug);

    if (!location) {
        throw error(404, 'Lokasi tidak ditemukan');
    }

    const title = `Servis Sepeda Listrik di ${location.name} | Virel Ebike`;
    const description = `Jasa servis sepeda listrik panggilan di ${location.name}. Teknisi ahli ganti baterai, dinamo & controller. Cepat & Terpercaya.`;

    return {
        location,
        title,
        description,
        allLocations: locations // Passing all locations for internal linking
    };
}
