## VOSSA Animated Page

Marketing and catalog experience for VOSSA built with Next.js 16, React 19, and Tailwind CSS 4.

## Development

Run the local development server:

```bash
npm run dev
```

Open `http://localhost:3000` in the browser.

Because this repository is often used from Windows PowerShell with restricted script execution, `cmd /c npm run <script>` can be more reliable than `npm run <script>`.

## Project Notes

- App routes live in `src/app`.
- Shared UI and content live in `src/components`.
- Local brand fonts live in `src/app/fonts`.
- Static assets live in `public`.
- The project uses `next/font` for both Google and local font loading.

## Checks

```bash
cmd /c npm run lint
cmd /c npm run build
```

## Stack

- Next.js 16.2.2
- React 19.2.4
- Tailwind CSS 4
- TypeScript 5
