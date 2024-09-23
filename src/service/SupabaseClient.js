import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://pzpejgkyaswqkisvqnmn.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6cGVqZ2t5YXN3cWtpc3Zxbm1uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYzNjcwMzQsImV4cCI6MjA0MTk0MzAzNH0.h-mAFAcPDOyW6DeZLQTliYyJ4h9vti5rtt_z-oor7tM'
);
