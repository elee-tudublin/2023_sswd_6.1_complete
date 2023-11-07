import { json } from '@sveltejs/kit';

// import the client instance (created earlier)
import {supabase} from "$lib/supabase.js";

export async function GET({ request, cookies }) {

    const categories = await supabase
    .from('location_category')
    .select('*')
    .order('name', {ascending: true});

    if (categories.error) {
        return json({
            status: categories.status,
            error: categories.error
        });
    }

    return json({
        data: categories.data,
        status: categories.status
    });
}

// Add a new category
export async function POST({ request, cookies }) {
    let data = await request.json();

    const new_cat = await supabase
    .from('location_category')
    .insert([data])
    .select()

    if (new_cat.error) {
        return json({
            status: new_cat.status,
            error: new_cat.error
        });
    }

    // return first item in the array
    return json({
        data: new_cat.data[0]
    });
}