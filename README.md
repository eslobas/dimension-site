# Dimension — site pessoal

Site pessoal de **Diogo Vieira Monteiro**, engenheiro informático: portfólio e serviços.
Next.js 15 + Tailwind. Alojado na Vercel, domínio `dimension.pt`.

## Correr localmente
```bash
npm install
npm run dev   # http://localhost:3000
```

## Editar conteúdo
- Textos, serviços e projetos: `src/app/page.tsx`
- Cores da marca e tema: `src/app/globals.css`
- Metadados / SEO: `src/app/layout.tsx`

## Variáveis opcionais (`.env.local` / Vercel)
| Variável | Para quê |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL do site (ex.: `https://dimension.pt`) |
| `NEXT_PUBLIC_EMAIL` | Email de contacto |
| `NEXT_PUBLIC_GITHUB` | Link do GitHub |
| `NEXT_PUBLIC_LINKEDIN` | Link do LinkedIn (vazio = não aparece) |

## Publicar
```bash
npx vercel deploy --prod
```
