import { createFileRoute } from "@tanstack/react-router";
import cover from "@/assets/couverture.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Saveurs & Maison — 20 recettes gourmandes (e-book)" },
      { name: "description", content: "E-book de 20 recettes rapides, gourmandes et appétissantes pour se régaler au quotidien. 12,97 €." },
      { property: "og:title", content: "Saveurs & Maison — 20 recettes gourmandes" },
      { property: "og:description", content: "20 recettes simples et délicieuses, sur tous vos appareils. 12,97 €." },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PRICE = "12,97 €";

const recettes = [
  ["Pain perdu caramélisé", "Pommes fondantes, sirop doré"],
  ["Crevettes ail & citron", "Prêtes en 15 minutes"],
  ["Burger maison", "Cheddar fondant, pain brioché"],
  ["Penne crémeuses au poulet", "Parmesan, tomates cerises"],
  ["Riz sauté aux légumes", "Coloré et parfumé"],
  ["Fondant au chocolat", "Cœur coulant, framboises"],
];

const avis = [
  ["Sarah", "Des recettes vraiment simples, toute la famille a adoré le burger !"],
  ["Karim", "Parfait pour les soirs de semaine. Le fondant est devenu un classique."],
  ["Léa", "Joliment présenté, clair, et tout est délicieux. Je recommande."],
];

function BuyButton({ label = "Découvrir les 20 recettes" }: { label?: string }) {
  return (
    <a href="#acheter" className="btn-buy">
      {label}
    </a>
  );
}

function Index() {
  return (
    <main>
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <span className="font-serif text-xl font-semibold">Saveurs &amp; Maison</span>
        <a href="#acheter" className="text-sm font-bold text-primary">{PRICE}</a>
      </header>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-4 md:grid-cols-2 md:pt-12">
        <div className="order-2 md:order-1">
          <p className="font-hand text-2xl text-primary">E-book numérique</p>
          <h1 className="mt-2 text-4xl font-semibold leading-tight md:text-6xl">
            20 recettes rapides &amp; gourmandes
          </h1>
          <p className="mt-5 max-w-md text-lg text-muted-foreground">
            Des idées simples et délicieuses pour se régaler au quotidien, sans y passer des heures.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <BuyButton />
            <span className="font-serif text-3xl font-semibold">{PRICE}</span>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <img
            src={cover.url}
            alt="Couverture de l'e-book Saveurs & Maison — 20 recettes"
            className="mx-auto w-full max-w-sm rotate-1 rounded-lg shadow-warm"
          />
        </div>
      </section>

      <section className="bg-card py-12">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 text-center md:grid-cols-4">
          {["20 recettes gourmandes", "Rapides à préparer", "Des étapes simples", "Sur tous vos appareils"].map((t) => (
            <p key={t} className="font-serif text-lg">{t}</p>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-3xl font-semibold md:text-4xl">Un avant-goût du livre</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {recettes.map(([t, d], i) => (
            <div key={t} className="rounded-2xl bg-card p-6">
              <span className="font-hand text-2xl text-primary">n°{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-1 text-xl font-semibold">{t}</h3>
              <p className="mt-1 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-muted-foreground">… et 14 autres recettes à découvrir.</p>
      </section>

      <section className="bg-muted py-20">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="text-3xl font-semibold md:text-4xl">Ils se sont régalés</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {avis.map(([n, t]) => (
              <figure key={n} className="rounded-2xl bg-card p-6">
                <p className="text-primary">★★★★★</p>
                <blockquote className="mt-3">« {t} »</blockquote>
                <figcaption className="mt-4 font-bold">{n}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="acheter" className="mx-auto max-w-3xl px-5 py-20 text-center">
        <img src={cover.url} alt="" className="mx-auto w-40 rounded-md shadow-warm" />
        <h2 className="mt-8 text-3xl font-semibold md:text-5xl">La cuisine, c'est le bonheur en mode simple</h2>
        <p className="mt-4 font-serif text-5xl font-semibold text-primary">{PRICE}</p>
        <p className="mt-2 text-muted-foreground">E-book PDF · Téléchargement immédiat</p>
        <div className="mt-8"><BuyButton label="Je veux mes 20 recettes" /></div>
      </section>

      <footer className="bg-secondary py-8 text-center text-sm text-secondary-foreground">
        © {new Date().getFullYear()} Saveurs &amp; Maison
      </footer>
    </main>
  );
}
