-- Public-read bucket for REDACTED result screenshots only.
insert into storage.buckets (id, name, public) values ('results', 'results', true)
on conflict (id) do nothing;

create policy "results_public_read" on storage.objects
  for select using (bucket_id = 'results');

-- Only authenticated team members may upload, and only files named *-redacted.*
create policy "results_team_upload" on storage.objects
  for insert to authenticated
  with check (bucket_id = 'results' and name ~ '-redacted\.(jpg|jpeg|png|webp)$');
