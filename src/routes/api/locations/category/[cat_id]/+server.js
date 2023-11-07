import { json } from '@sveltejs/kit';

// import the client instance (created earlier)
import {supabase} from "$lib/supabase.js";

// Get locations for a category by category_id
export async function GET({ params, request, cookies }) {

    let cat = 0;
    if (params.cat_id && !isNaN(parseInt(params.cat_id))) {
        cat = parseInt(params.cat_id)
    }

    if (cat > 0) {

        const locations = await supabase
        .from('locations')
        .select('*')
        .eq('category_id', cat)
        .order('name', {ascending: true});

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
    return json({
        status: 400,
        error: 'Bad Request'
    });
}