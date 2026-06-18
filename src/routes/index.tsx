import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import {
  BookOpen,
  GraduationCap,
  Heart,
  MapPin,
  Calendar,
  Sparkles,
  Users,
  Trophy,
  School,
  Camera,
  Star,
  Compass,
} from "lucide-react";
import portraitAsset from "@/assets/portrait-beach.jpeg.asset.json";
import heroBooks from "@/assets/hero-books.jpg";
import schoolFundamentalAsset from "@/assets/school-fundamental.png.asset.json";
import futureAsset from "@/assets/presente-futuro.png.asset.json";
import ipatinga1 from "@/assets/ipatinga-1.png.asset.json";
import ipatinga2 from "@/assets/ipatinga-2.png.asset.json";
import ipatinga3 from "@/assets/ipatinga-3.png.asset.json";
import diamantina1 from "@/assets/diamantina-1.png.asset.json";
import diamantina2 from "@/assets/diamantina-2.png.asset.json";
import diamantina3 from "@/assets/diamantina-3.png.asset.json";
import quadrilha1 from "@/assets/quadrilha-1.jpeg.asset.json";
import quadrilha2 from "@/assets/quadrilha-2.jpeg.asset.json";
import fundamentalTurma from "@/assets/fundamental-turma.png.asset.json";
import fundamentalAtividades from "@/assets/fundamental-atividades.png.asset.json";
import fundamentalEscolaExtra from "@/assets/fundamental-escola-extra.png.asset.json";
import pandemiaFormatura1 from "@/assets/pandemia-formatura-1.png.asset.json";
import pandemiaFormatura2 from "@/assets/pandemia-formatura-2.png.asset.json";
import medioEscolaTimeline from "@/assets/medio-escola.png.asset.json";
import medioEscola from "@/assets/medio-patio.png.asset.json";
import medioTurma from "@/assets/medio-sala.png.asset.json";
import medioPatio from "@/assets/medio-turma.png.asset.json";
import medioSala from "@/assets/medio-aula.png.asset.json";
import jantar1 from "@/assets/jantar-1.png.asset.json";
import jantar2 from "@/assets/jantar-2.png.asset.json";
import interclasse1 from "@/assets/interclasse-1.png.asset.json";
import interclasse2 from "@/assets/interclasse-2.png.asset.json";

const portrait = portraitAsset.url;
const schoolElementary = schoolFundamentalAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Memorial de Experiências Educativas — Julia Fialho Freire" },
      { name: "description", content: "Memorial das experiências educativas de Julia Fialho Freire: trajetória escolar, memórias afetivas e sonhos na Pedagogia." },
      { property: "og:title", content: "Memorial de Experiências Educativas" },
      { property: "og:description", content: "Uma viagem pelas memórias escolares e pela jornada acadêmica de Julia Fialho Freire." },
    ],
  }),
  component: Index,
});

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Nav() {
  const items = [
    { href: "#quem-sou-eu", label: "Quem Sou Eu" },
    { href: "#fundamental", label: "Fundamental" },
    { href: "#medio", label: "Ensino Médio" },
    { href: "#futuro", label: "Presente e Futuro" },
  ];
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/75 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2 min-w-0">
          <span className="grid place-items-center h-9 w-9 rounded-full bg-primary/10 text-primary shrink-0">
            <BookOpen className="h-4 w-4" />
          </span>
          <span className="font-display font-semibold truncate">Memorial Educativo</span>
        </a>
        <nav className="hidden md:flex items-center gap-1">
          {items.map((i) => (
            <a
              key={i.href}
              href={i.href}
              className="px-3 py-2 text-sm rounded-full text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
            >
              {i.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <img src={heroBooks} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-20 md:py-32 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card/80 backdrop-blur border border-border/60 text-sm text-muted-foreground reveal">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          Memorial de Experiências Educativas
        </div>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-7xl font-semibold reveal">
          Cada lembrança é<br />
          <span className="text-gradient">um capítulo da minha história.</span>
        </h1>
        <p className="mt-6 mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground reveal">
          Uma viagem afetiva pelos caminhos que me trouxeram até aqui — da infância em Raul Soares
          até a jornada na Pedagogia.
        </p>
        <div className="mt-10 flex justify-center gap-3 reveal">
          <a href="#quem-sou-eu" className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium shadow-soft hover:translate-y-[-2px] transition-transform">
            Começar a leitura
          </a>
          <a href="#futuro" className="px-6 py-3 rounded-full border border-border bg-card/70 text-foreground font-medium hover:bg-card transition-colors">
            Ver o futuro
          </a>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title, icon: Icon }: { eyebrow?: string; title: string; icon?: React.ComponentType<{ className?: string }> }) {
  return (
    <div className="text-center mb-14 reveal">
      {eyebrow && (
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary font-semibold">
          {Icon && <Icon className="h-4 w-4" />}
          {eyebrow}
        </div>
      )}
      <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold">{title}</h2>
      <div className="mt-4 mx-auto h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent" />
    </div>
  );
}

function QuemSouEu() {
  const cards = [
    { icon: Users, label: "Nome completo", value: "Julia Fialho Freire" },
    { icon: MapPin, label: "Cidade natal", value: "Raul Soares — MG" },
    { icon: Calendar, label: "Data de nascimento", value: "08 de janeiro de 2007" },
    { icon: Sparkles, label: "Idade", value: "19 anos" },
    { icon: GraduationCap, label: "Curso atual", value: "Pedagogia UFV" },
    { icon: Heart, label: "Características", value: "Carinhosa, atenciosa, organizada e responsável" },
  ];
  return (
    <section id="quem-sou-eu" className="py-24 md:py-32 bg-gradient-sky">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle eyebrow="Seção 1" title="Quem Sou Eu" icon={Heart} />
        <div className="grid md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-10 items-center">
          <div className="reveal">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-4 bg-primary/10 rounded-[2rem] -rotate-3" />
              <div className="absolute -inset-2 bg-accent/30 rounded-[2rem] rotate-2" />
              <img
                src={portrait}
                alt="Retrato de Julia Fialho Freire"
                width={800}
                height={1024}
                className="relative rounded-[2rem] shadow-card object-cover aspect-[4/5] w-full"
              />
            </div>
          </div>
          <div className="reveal">
            <p className="text-lg md:text-xl leading-relaxed text-foreground/85">
              Meu nome é <strong className="text-foreground">Julia Fialho Freire</strong>. Sou natural
              de Raul Soares-MG, nasci em 08 de janeiro de 2007 e atualmente sou estudante do curso
              de <strong className="text-foreground">Pedagogia na UFV</strong>. Sou uma pessoa carinhosa,
              atenciosa, organizada e responsável. Gosto de ajudar as pessoas e acredito que a
              educação tem um papel fundamental na transformação da sociedade.
            </p>
          </div>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((c) => (
            <div
              key={c.label}
              className="reveal group rounded-2xl bg-card p-6 border border-border/60 shadow-card hover:shadow-soft hover:-translate-y-1 transition-all"
            >
              <div className="grid place-items-center h-11 w-11 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <c.icon className="h-5 w-5" />
              </div>
              <div className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
              <div className="mt-1 text-lg font-display font-semibold">{c.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PhotoSlot({ label }: { label: string }) {
  return (
    <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-secondary to-muted border border-dashed border-border flex flex-col items-center justify-center text-muted-foreground gap-2">
      <Camera className="h-6 w-6" />
      <span className="text-xs uppercase tracking-wider">{label}</span>
    </div>
  );
}

function MemoryCard({
  icon: Icon,
  title,
  description,
  photos = 3,
  images,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  photos?: number;
  images?: string[];
}) {
  const count = images?.length ?? photos;
  const gridCols = count === 2 ? "grid-cols-2" : "grid-cols-3";
  return (
    <div className="reveal rounded-3xl bg-card border border-border/60 shadow-card overflow-hidden hover:shadow-soft transition-shadow">
      <div className="p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <div className="grid place-items-center h-11 w-11 rounded-xl bg-accent/40 text-accent-foreground shrink-0">
            <Icon className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-muted-foreground leading-relaxed">{description}</p>
          </div>
        </div>
        <div className={`mt-6 grid ${gridCols} gap-3`}>
          {images
            ? images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${title} — foto ${i + 1}`}
                  loading="lazy"
                  className="aspect-[4/3] w-full rounded-xl object-cover border border-border/60 shadow-card"
                />
              ))
            : Array.from({ length: photos }).map((_, i) => (
                <PhotoSlot key={i} label={`Foto ${i + 1}`} />
              ))}
        </div>
      </div>
    </div>
  );
}

function Timeline({ school, location, period, image }: { school: string; location: string; period: string; image: string }) {
  return (
    <div className="reveal grid md:grid-cols-2 gap-8 items-center mb-14">
      <div className="relative">
        <div className="absolute -inset-3 bg-primary/10 rounded-[2rem] rotate-1" />
        <img src={image} alt={school} width={1024} height={768} loading="lazy" className="relative rounded-[2rem] shadow-card object-cover aspect-[4/3] w-full" />
      </div>
      <div>
        <div className="flex items-center gap-3 text-primary">
          <School className="h-5 w-5" />
          <span className="text-sm font-semibold uppercase tracking-wider">Escola</span>
        </div>
        <h3 className="mt-2 text-2xl md:text-3xl font-semibold">{school}</h3>
        <div className="mt-4 space-y-2 text-muted-foreground">
          <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" />{location}</div>
          <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-primary" />{period}</div>
        </div>
      </div>
    </div>
  );
}

function TeachersStrip({ teachers }: { teachers: { name: string; subject: string }[] }) {
  return (
    <div className="reveal mt-12 rounded-3xl bg-gradient-to-br from-primary/8 to-accent/20 p-8 border border-border/60">
      <div className="flex items-center gap-2 text-primary font-semibold">
        <Star className="h-5 w-5" />
        Professores Marcantes
      </div>
      <div className="mt-5 grid sm:grid-cols-2 gap-4">
        {teachers.map((t) => (
          <div key={t.name} className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border/60">
            <div className="grid place-items-center h-12 w-12 rounded-full bg-primary text-primary-foreground font-display font-semibold">
              {t.name.charAt(0)}
            </div>
            <div className="min-w-0">
              <div className="font-semibold truncate">{t.name}</div>
              <div className="text-sm text-muted-foreground">{t.subject}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Fundamental() {
  return (
    <section id="fundamental" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle eyebrow="Seção 2 · 2014 — 2021" title="Minha Trajetória no Ensino Fundamental" icon={BookOpen} />
        <Timeline
          school="Escola Municipal Coronel João Domingos"
          location="Raul Soares — MG"
          period="2014 a 2021"
          image={schoolElementary}
        />

        <div className="reveal grid sm:grid-cols-3 gap-3 mb-12">
          <img src={fundamentalEscolaExtra.url} alt="Ensino fundamental — a escola" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover border border-border/60 shadow-card" />
          <img src={fundamentalTurma.url} alt="Ensino fundamental — a turma" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover border border-border/60 shadow-card" />
          <img src={fundamentalAtividades.url} alt="Ensino fundamental — atividades" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover border border-border/60 shadow-card" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <MemoryCard
            icon={Compass}
            title="Excursão para Ipatinga"
            description="Uma viagem inesquecível: o encanto do shopping pela primeira vez e o zoológico cheio de descobertas, risadas e fotos com os colegas."
            images={[ipatinga1.url, ipatinga2.url, ipatinga3.url]}
          />
          <MemoryCard
            icon={MapPin}
            title="Excursão para Diamantina"
            description="A história viva nos monumentos históricos e o fortalecimento da minha amizade com a Alice, que se tornou uma das memórias mais doces dessa fase."
            images={[diamantina1.url, diamantina2.url, diamantina3.url]}
          />
          <MemoryCard
            icon={Sparkles}
            title="Quadrilha"
            description="Aquele momento mágico de confraternização com os colegas — música, dança e a alegria simples de estar junto."
            images={[quadrilha1.url, quadrilha2.url]}
          />
          <MemoryCard
            icon={Trophy}
            title="Formatura na Pandemia"
            description="Sem grandes salões, mas com afeto de sobra: um churrasco em um sítio com piscina celebrou o fim de um ciclo de forma simples e marcante."
            images={[pandemiaFormatura1.url, pandemiaFormatura2.url]}
          />
        </div>
      </div>
    </section>
  );
}

function Medio() {
  return (
    <section id="medio" className="py-24 md:py-32 bg-gradient-sky">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle eyebrow="Seção 3 · 2022 — 2024" title="Minha Trajetória no Ensino Médio" icon={GraduationCap} />
        <Timeline
          school="Escola Estadual Regina Pacis"
          location="Raul Soares — MG"
          period="2022 a 2024"
          image={medioEscolaTimeline.url}
        />

        <div className="reveal grid sm:grid-cols-4 gap-3 mb-12">
          <img src={medioEscola.url} alt="Ensino médio — escola" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover border border-border/60 shadow-card" />
          <img src={medioTurma.url} alt="Ensino médio — turma" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover border border-border/60 shadow-card" />
          <img src={medioPatio.url} alt="Ensino médio — pátio" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover border border-border/60 shadow-card" />
          <img src={medioSala.url} alt="Ensino médio — sala" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover border border-border/60 shadow-card" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <MemoryCard
            icon={Sparkles}
            title="Jantar do Terceiro Ano"
            description="A celebração da conclusão do Ensino Médio — entre lágrimas e sorrisos, um brinde a tudo o que vivemos juntos."
            images={[jantar1New.url, jantar2.url]}
          />
          <MemoryCard
            icon={Trophy}
            title="Interclasse Campeão"
            description="A conquista da turma, a vibração coletiva e a união entre os colegas — uma vitória que ficou guardada no coração."
            images={[interclasse1.url, interclasse2.url]}
          />
        </div>
      </div>
    </section>
  );
}

function Futuro() {
  const goals = [
    { icon: GraduationCap, text: "Concluir a graduação em Pedagogia" },
    { icon: Heart, text: "Tornar-me uma profissional comprometida com a educação" },
    { icon: Users, text: "Contribuir para a formação de crianças e jovens" },
    { icon: Sparkles, text: "Continuar aprendendo e me aperfeiçoando" },
  ];
  return (
    <section id="futuro" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle eyebrow="Seção 4" title="Presente e Futuro" icon={Compass} />

        <div className="grid md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] gap-12 items-center">
          <div className="reveal">
            <p className="text-lg md:text-xl leading-relaxed text-foreground/85">
              Hoje sou estudante de <strong className="text-foreground">Pedagogia na UFV</strong> e reconheço
              que cada etapa da minha trajetória escolar contribuiu para minha formação pessoal e
              acadêmica. As experiências vividas, os professores que encontrei, os amigos que fiz e os
              desafios que enfrentei ajudaram a construir quem sou atualmente.
            </p>
          </div>
          <div className="reveal">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-4 bg-accent/30 rounded-[2rem] rotate-3" />
              <img
                src={futureAsset.url}
                alt="Julia hoje, estudante de Pedagogia"
                width={1024}
                height={1024}
                loading="lazy"
                className="relative rounded-[2rem] shadow-card object-cover aspect-square w-full"
              />
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-semibold text-center reveal">Meus Objetivos</h3>
          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {goals.map((g, i) => (
              <div key={i} className="reveal flex items-start gap-4 p-6 rounded-2xl bg-card border border-border/60 shadow-card hover:shadow-soft transition-shadow">
                <div className="grid place-items-center h-11 w-11 rounded-xl bg-primary/10 text-primary shrink-0">
                  <g.icon className="h-5 w-5" />
                </div>
                <p className="text-lg pt-1.5">{g.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal mt-20 rounded-3xl bg-gradient-hero p-10 md:p-14 text-center border border-border/60 shadow-soft">
          <Sparkles className="h-8 w-8 text-primary mx-auto" />
          <p className="mt-6 text-xl md:text-2xl font-display italic leading-relaxed max-w-3xl mx-auto">
            “A educação é a semente que floresce em memórias — e cada memória escolar é um fio que
            tece a identidade de quem somos e de quem ainda seremos.”
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 border-t border-border/60 bg-card/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center text-sm text-muted-foreground">
        Memorial de Experiências Educativas · Julia Fialho Freire · com afeto e gratidão.
      </div>
    </footer>
  );
}

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <QuemSouEu />
        <Fundamental />
        <Medio />
        <Futuro />
      </main>
      <Footer />
    </div>
  );
}
