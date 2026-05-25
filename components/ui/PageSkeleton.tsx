// Shared skeleton for Suspense fallbacks on dynamic routes.
// Per nextjs-app-router-patterns skill: loading.tsx replaces the
// page content while data resolves. The skeleton mirrors the hero
// section layout to minimize perceived layout shift.

export function PageSkeleton({ heroOnly = false }: { heroOnly?: boolean }) {
  return (
    <main className="min-h-screen animate-pulse" aria-busy="true" aria-label="Loading">
      <section className="-mt-24 pt-32 pb-16 bg-gradient-to-br from-ocean-600 via-ocean-700 to-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-3 bg-white/15 rounded w-32 mb-4" />
          <div className="h-10 md:h-14 bg-white/25 rounded w-3/4 max-w-3xl mb-4" />
          <div className="h-5 bg-white/15 rounded w-full max-w-2xl mb-2" />
          <div className="h-5 bg-white/15 rounded w-2/3 max-w-xl" />
        </div>
      </section>

      {heroOnly ? null : (
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-4">
            <div className="h-4 bg-slate-200 rounded w-full" />
            <div className="h-4 bg-slate-200 rounded w-11/12" />
            <div className="h-4 bg-slate-200 rounded w-3/4" />
            <div className="h-4 bg-slate-200 rounded w-full" />
            <div className="h-4 bg-slate-200 rounded w-5/6" />
          </div>
        </section>
      )}
    </main>
  )
}
