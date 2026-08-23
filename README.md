# Aperture photography portfolio

A lightweight, responsive photography portfolio designed for free GitHub Pages hosting and a Namecheap-managed custom domain. It uses plain HTML, CSS, and JavaScript, so there is no build step and no paid hosting requirement.

## Personalize the site

1. Open `index.html` and replace `Aperture`, `Your Name`, `Your City`, the email address, social links, and descriptive copy.
2. Create an `images` folder and add optimized `.jpg`, `.webp`, or `.avif` photos. Aim for 1600–2400 pixels on the long edge and usually under 700 KB each.
3. Open `photos.js`. Replace each placeholder URL with a local path such as `images/coast-at-dawn.jpg`, then update the title, category, alt text, and orientation.
4. Replace the two background-image URLs in `styles.css` for the hero and About portrait.
5. Replace `sitemap.xml.example` with `sitemap.xml` after inserting the final domain.

## Preview locally

You can double-click `index.html`, or use any simple local web server. All main features work without a build process.

## Publish with GitHub Pages

1. Create a new public GitHub repository. Do not add a README or other starter files.
2. Upload every file in this folder to the repository's root and commit the changes.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**. Select the `main` branch and the `/(root)` folder, then click **Save**.
5. Wait for GitHub to publish the site. It will initially appear at `https://YOUR-GITHUB-USERNAME.github.io/REPOSITORY-NAME/`.

## Connect a Namecheap domain

Use `www` as the primary address and redirect the bare domain to it. This is the simplest, most reliable setup.

1. In GitHub, go to **Settings → Pages → Custom domain**, enter `www.yourdomain.com`, and click **Save**.
2. Rename `CNAME.example` to `CNAME`, replace its contents with only `www.yourdomain.com`, and commit it. GitHub may also create this file automatically when you save the custom domain in Settings.
3. In Namecheap, open **Domain List → Manage → Advanced DNS**.
4. Remove conflicting parking, URL redirect, or existing `www` records.
5. Add a **CNAME Record** with Host `www` and Value `YOUR-GITHUB-USERNAME.github.io` (do not include `https://` or the repository name). Leave TTL on Automatic.
6. Add four **A Records** for Host `@`, one for each GitHub Pages address listed below:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
7. Save the records. DNS can take from minutes to 24–48 hours to fully update.
8. Return to GitHub Pages. When the DNS check succeeds, enable **Enforce HTTPS**. GitHub may take additional time to issue the certificate.

Do not add the repository name to the Namecheap CNAME value. Do not use a Namecheap URL Redirect Record for the apex while the four A records are present; GitHub handles the `yourdomain.com` to `www.yourdomain.com` redirect when both are configured correctly.

## Before launch

- Update the page title, description, and social preview text in `index.html`.
- Add a real `sitemap.xml` and update `robots.txt` with its URL if desired.
- Test every image, email link, and social link on a phone and desktop.
- Keep the original full-resolution photographs backed up elsewhere; the website should contain optimized copies.
