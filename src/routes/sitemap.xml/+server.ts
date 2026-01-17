import { locations } from '$lib/data/locations';

export async function GET() {
    const site = 'https://bktebike.com';

    const pages = [
        '/',
        // Add other static pages here if needed
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
            .map(
                (page) => `
    <url>
        <loc>${site}${page}</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
        <lastmod>${new Date().toISOString()}</lastmod>
    </url>
    `
            )
            .join('')
        }
    ${locations
            .map(
                (loc) => `
    <url>
        <loc>${site}/area/${loc.slug}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
        <lastmod>${new Date().toISOString()}</lastmod>
    </url>
    `
            )
            .join('')
        }
    </urlset>`;

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'max-age=0, s-maxage=3600'
        }
    });
}
