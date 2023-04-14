import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_ANON_KEY
);

//createClient('https://ryywbodcbzdifqoaarye.supabase.co','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5eXdib2RjYnpkaWZxb2FhcnllIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQwOTE2MzksImV4cCI6MTk4OTY2NzYzOX0.PT8r9YjcgJq78w-hKm1BOV2m8cApAPeNTYDb4_5_DOE');