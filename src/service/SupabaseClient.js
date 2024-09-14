import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://pdxjecbjlftuoatlyyuu.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBkeGplY2JqbGZ0dW9hdGx5eXV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYxOTM2OTEsImV4cCI6MjA0MTc2OTY5MX0.Pj9EdP1T07LcBngBVVrFNJGf_vOaBDb9QbgZUhY8p3s"
);
