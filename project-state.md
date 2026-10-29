# Project state
Last updated: 2026-10-28

## Works
- Live Next.js site (App Router, TypeScript, plain CSS) deployed on Vercel at https://website-builder-ciano3.vercel.app/
- Supabase project created and linked to the repo: https://supabase.com/dashboard/project/yhqglsmamnuavxynnvjk
- Every pull request gets a Vercel preview link; merging to main deploys the live site.

## Broken or flaky
- Nothing known to be broken.
- The site does not use Supabase yet: no login, no database tables.

## Environment notes
- Keys and passwords go only in Vercel > website-builder > Settings > Environment Variables. Not yet checked whether the Supabase keys are already set there.
- Package manager assumed to be npm; not yet confirmed against the repo.
- Supabase's free built-in email sender only sends a few emails per hour, so test sign-ups may wait on confirmation emails.
- Unconfirmed: Vercel's free Hobby plan may be limited to non-commercial use, and Supabase may pause free projects after about a week of inactivity. Both matter only if a real business uses the site.
- Fake names and fake content only. No real personal data.

## Next session
- Build slice 1: sign up and log in, using Supabase Auth with email and password and email confirmation on.
- Expect to approve adding @supabase/ssr, Supabase's helper library for Next.js.
