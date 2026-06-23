export default function Home() {
  return (
    <main className="min-h-screen bg-background px-6 py-10 text-foreground">
      <section className="mx-auto flex max-w-5xl flex-col gap-6">
        <p className="text-sm font-medium text-muted-foreground">Basketflow</p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-normal sm:text-5xl">
          Web app is ready.
        </h1>
        <p className="max-w-2xl text-base leading-7 text-muted-foreground">
          The Next.js App Router is now mounted from src/app and styled through
          the shared UI package.
        </p>
      </section>
    </main>
  );
}
