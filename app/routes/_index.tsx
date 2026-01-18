import { json, type MetaFunction } from '@remix-run/cloudflare';
import { Link } from '@remix-run/react';
import { Header } from '~/components/header/Header';

export const meta: MetaFunction = () => {
  return [{ title: 'Piepio' }, { name: 'description', content: 'Talk with Piepio, your AI coding assistant' }];
};

export const loader = () => json({});

export default function Index() {
  return (
    <div className="flex h-full w-full flex-col bg-bolt-elements-background-depth-1">
      <Header />
      <main className="flex-1 overflow-y-auto">
        <section className="relative mx-auto flex max-w-5xl flex-col items-center px-6 pt-20 pb-16 text-center">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-amber-500/10 via-rose-500/5 to-sky-500/10" />
          <div className="inline-flex items-center gap-2 rounded-full border border-bolt-elements-borderColor bg-bolt-elements-background-depth-1/80 px-3 py-1 text-xs text-bolt-elements-textSecondary shadow-sm">
            <span className="i-ph:sparkle-duotone text-sm" />
            <span>Piepio The AI FullStack Engineer</span>
          </div>
          <h1 className="mt-6 text-balance text-5xl font-semibold leading-tight text-bolt-elements-textPrimary sm:text-6xl">
            Piepio builds your product
            <br />
            from prompt to production.
          </h1>
          <p className="mt-4 max-w-2xl text-balance text-bolt-elements-textSecondary text-base sm:text-lg">
            Bring your idea — Piepio builds the frontend, backend, auth, database, and payments instantly. Stay in the
            loop while an AI engineer ships real software for you.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/dashboard"
              className="rounded-full bg-bolt-elements-item-backgroundAccent px-6 py-2.5 text-sm font-medium text-bolt-elements-item-contentOnAccent shadow-sm transition-theme hover:bg-bolt-elements-item-backgroundAccentStrong"
            >
              Open Piepio Dashboard
            </Link>
            <Link
              to="/chat/new"
              className="rounded-full border border-bolt-elements-borderColor bg-bolt-elements-background-depth-1 px-6 py-2.5 text-sm font-medium text-bolt-elements-textPrimary hover:bg-bolt-elements-background-depth-2"
            >
              Start a new chat
            </Link>
          </div>
          <div className="mt-12 w-full max-w-3xl overflow-hidden rounded-3xl border border-bolt-elements-borderColor bg-bolt-elements-background-depth-2/80 shadow-lg">
            <div className="flex items-center justify-between border-b border-bolt-elements-borderColor px-4 py-2 text-xs text-bolt-elements-textSecondary">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Live preview
              </span>
              <span className="font-mono text-[10px] text-bolt-elements-textTertiary">piepio.dev · workspace</span>
            </div>
            <div className="flex items-center justify-between px-4 py-3 text-sm text-bolt-elements-textSecondary">
              <span>Ask Piepio to scaffold a full-stack app, connect Stripe, or refactor your codebase.</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
