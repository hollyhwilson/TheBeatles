import { error } from '@sveltejs/kit';
import { get } from 'svelte/store';
import { catalogue } from '$lib/stores';


/** @type {import('./$types').PageLoad} */
export function load({ params }) 
{
  const title = decodeURIComponent(params.title);
	const allItems = get(catalogue);
	const item = allItems.find((i) => i.title === title);

  if (!item) {
    throw error(404, 'Catalogue item not found');
  }

  return { item };
}