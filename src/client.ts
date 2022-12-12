import { createClient } from '@supabase/supabase-js';

const PROJECT_URL = `https://qpmxzkurjuqxshchqzkb.supabase.co`

const API_KEY = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwbXh6a3VyanVxeHNoY2hxemtiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA3OTIxNzQsImV4cCI6MTk4NjM2ODE3NH0.2iKL3f2B9ekTtCgMCD1U7ssnDKvarlI__OEZxJaLxyU`

export const supabase = createClient(PROJECT_URL, API_KEY)