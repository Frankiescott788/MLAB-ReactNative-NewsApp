import { createClient } from '@supabase/supabase-js'


const supabase = createClient("https://rlzxocoqmxxaudiivvmb.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsenhvY29xbXh4YXVkaWl2dm1iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM3NzczNzgsImV4cCI6MjA0OTM1MzM3OH0.i8fMIAhVrL3MNvRoHde-TgGeuI6w7y7LqBkrVVCxrAQ", {
  })

export default supabase