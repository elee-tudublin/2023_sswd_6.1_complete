import { json } from '@sveltejs/kit';

// import the client instance (created earlier)
import {supabase} from "$lib/supabase.js";

// Get all locations
export async function GET({ request, cookies }) {

    const locations = await supabase
    .from('locations')
    .select('*');

    if (locations.error) {
        return json({
            status: locations.status,
            error: locations.error
        });
    }

    return json({
        data: locations.data,
        status: locations.status
    });
}

// Add a new location
export async function POST({ request, cookies }) {
    let data = await request.json();

    const new_loc = await supabase
    .from('locations')
    .insert([data])
    .select()

    if (new_loc.error) {
        return json({
            status: new_loc.status,
            error: new_loc.error
        });
    }

    return json({
        data: new_loc.data[0],
        status: new_loc.status
    });
}