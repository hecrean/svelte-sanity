import { createClient } from 'sanity-codegen';
import type { Documents } from '../types/schema';
import { SANITY_PROJECT_ID } from '../env';

export default createClient<Documents>({
	// Note: these are useful to pull from environment variables
	// (required) your sanity project id
	projectId: SANITY_PROJECT_ID,
	// (required) your sanity dataset
	dataset: '...',
	// (required) the fetch implementation to use
	fetch: window.fetch,
	//
	// (optional) if true, the client will prefer drafts over the published versions
	previewMode: true,
	// (optional) only required if your dataset is private or if you want to use preview mode
	token: '...'
	// by default sanity-codegen caches responses in memory. this can be disabled if desired
	// disabledCache: true,
});
