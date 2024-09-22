import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://pzpejgkyaswqkisvqnmn.supabase.co',
  process.env.supabaseKey
);
