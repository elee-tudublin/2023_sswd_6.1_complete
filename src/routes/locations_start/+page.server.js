// import the client instance (created earlier)
import {supabase} from "$lib/supabase.js";

// Load function
/** @type {import('./$types').PageServerLoad} */
export async function load( { fetch, params }) {
    // Query the locations table - see Supabase docs for examples: 
    // get locations data, any error, and http status
    // locations contains {data, error, status, statusText}
    const locations = await supabase
        .from('locations')
        .select('*');

    // return data
    if (locations.data) {
        return {
            status: locations.status,
            locations: locations.data,
        }
    }
    // in case of error - return status code amd mesage
    return {
        status: locations.status,
        error: locations.error
    };
}
