# Website Builder

## Stack
- Next.js with the App Router, TypeScript, plain CSS. No CSS frameworks.
- Supabase for login (Supabase Auth, email and password) and the database.
- Deployed on Vercel. Every pull request gets a preview link; merging to main deploys the live site at https://website-builder-ciano3.vercel.app/
- The owner of this project has no coding background and runs Claude Code in the browser only.

## Commands
- npm run dev: run the site locally
- npm run build: check the site builds before opening a pull request
- npm run lint: check code style
- These assume npm. If the repo uses a different package manager, say so instead of guessing.

## Never
- Add a dependency without asking first.
- Edit .env or any environment variable. Keys and passwords live only in Vercel > website-builder > Settings > Environment Variables.
- Change auth configuration without saying what is changing and why.
- Create new top-level folders.
- Merge a pull request. Open a draft pull request and stop.
- Edit roadmap.md, project-state.md, or CLAUDE.md during feature work. Only a dedicated docs session changes them.
- Put passwords, API keys, or connection strings in any file, prompt, or pull request.
- Use real personal data. Fake names and fake content only.
- Add a new library, service, or account without asking first.

## Conventions
- Explain every change in plain language in the pull request description, not only in code, so the owner can explain it at a live session.
- Every database table has Row Level Security turned on, so an owner can only read and change their own rows.
- Write database changes as SQL and include that SQL, with a plain-language explanation, in the pull request description.
- Store money as whole cents (25.00 dollars is 2500). Store times in UTC and display them in Pacific/Honolulu time.
- Keep each pull request to one slice or smaller.

## Current focus
See roadmap.md, work only on the slice marked ACTIVE.
