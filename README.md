# ELJA Studios — Website

A plain HTML/CSS/JS site — no build step, no dependencies to install. Four pages sharing one stylesheet and one script file. Ready to push straight to GitHub.

## File structure

```
index.html       Home
services.html    Services
about.html       About
contact.html     Contact
css/styles.css   Shared styles
js/script.js     Shared behavior (nav, scroll effects, accordion)
assets/          Logo, favicon, hero video, work images, team photos
README.md        This file
```

## Part 1 — Get it on GitHub

1. **Unzip the file.** You should end up with a folder containing everything listed above.
2. **Sign in to GitHub** (or create a free account) at github.com.
3. **Create a new repository.** Click the "+" icon top-right → "New repository." Name it something like `elja-site`. Leave everything else default, then click "Create repository."
4. **Upload your files.** On the new repo's page, click "uploading an existing file." Drag in everything from the unzipped folder — `index.html`, `services.html`, `about.html`, `contact.html`, `README.md`, and the `css`, `js`, and `assets` folders. Don't drag the outer folder itself or the `.zip` — just its contents, so `index.html` lands at the repo root. Scroll down and click "Commit changes."

   If your browser won't let you drag folders (only individual files), use `git` from the command line instead:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```

## Part 2 — Turn on GitHub Pages

5. In your repository, click **Settings** (top tab) → **Pages** (left sidebar).
6. Under "Build and deployment," change the **Branch** dropdown from "None" to **main**, keep the folder as **/ (root)**, and click **Save**.
7. Wait a minute or two, then refresh that page. GitHub will show "Your site is live at `https://YOUR-USERNAME.github.io/YOUR-REPO/`" with a clickable link. That's your site, live on the internet, for free.

## Part 3 — Connect your Squarespace domain

You bought the domain through Squarespace Domains, but the site itself is hosted on GitHub — that's a completely normal setup, and yes, it's just a matter of pointing the domain at GitHub instead of at Squarespace's own hosting. Two places need changes: GitHub (once) and Squarespace's DNS settings (a few records).

8. **Tell GitHub about your domain first.** Back in **Settings → Pages** on your repo, find the "Custom domain" box, type your domain (e.g. `eljastudios.com`, no `https://` or `www`), and click **Save**. This adds a `CNAME` file to your repo automatically — don't add one yourself.
9. **Go to your Squarespace domain's DNS settings.** At account.squarespace.com → **Domains** → click your domain → **DNS** → **DNS Settings** → scroll to **Custom Records**.
10. **Add four A records**, one at a time, so your bare domain (`eljastudios.com`) points to GitHub. For each, click "Add Record," choose type **A**, leave the host/name field blank (or `@` if it requires something), and enter one of these four IP addresses as the value — repeat four times, once per IP:
    ```
    185.199.108.153
    185.199.109.153
    185.199.110.153
    185.199.111.153
    ```
11. **Add one CNAME record** so `www.eljastudios.com` works too: type **CNAME**, host/name `www`, value `YOUR-USERNAME.github.io` (with a trailing period if Squarespace requires one, e.g. `your-username.github.io.`).
12. **Remove any conflicting records.** If Squarespace already has an A record, ALIAS record, or "Squarespace default" record on the bare domain from before, delete it — you can only have one set of A records pointing one place.
13. **Wait.** DNS changes typically take anywhere from a few minutes to 24–48 hours to fully propagate. It's normal for it to not work immediately.
14. **Back on GitHub**, once the domain resolves, revisit **Settings → Pages** — you should see a green checkmark next to your custom domain, and a checkbox for **"Enforce HTTPS"** will become available. Turn that on once it appears (may take a few extra hours after DNS first resolves).
15. Visit `https://eljastudios.com` — it should now show your site instead of a Squarespace placeholder page.

## What to check before launch

- **Instagram handle** — every "Follow" link and work-grid image currently points to `https://www.instagram.com/eljastudios/`. Confirm that's correct.
- **Email** — `eljastudios@gmail.com` is used throughout (pulled from your old site).
- **Logo** — the header/footer use a styled text wordmark in Anton (matches your real logo font). Your actual logo files are in `assets/` (`elja-mark-white-on-sage.png`, `elja-mark-sage-on-white.png`) — square tiles with a solid background, good for a favicon or social avatar, but you'll want a transparent-background version to drop into the nav bar itself.

## Notes

- All copy on Home, Services, and About is pulled directly from your existing site.
- Header is transparent over the hero video on the home page, and solid from the top on the other three pages — matches your original site's behavior.
- The Services page accordion (01 Concept / 02 Shoot-Ready / 03 In Production) opens one panel at a time, same as your original.
- The "Our AI Playground" grid on the homepage and both team photos on the About page all link out to Instagram / are your real content — no placeholders left on those.
