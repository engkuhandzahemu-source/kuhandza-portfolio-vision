import { createFileRoute } from "@tanstack/react-router";

import escolaVerde from "@/assets/IMG-20260407-WA0029.jpg.asset.json";
import escolaAntiga from "@/assets/IMG-20260423-WA0033.jpg.asset.json";
import equipa from "@/assets/IMG-20260521-WA0049.jpg.asset.json";
import logistica from "@/assets/IMG-20260521-WA0057.jpg.asset.json";
import alvenaria from "@/assets/IMG-20260605-WA0091.jpg.asset.json";
import reboco from "@/assets/IMG-20260610-WA0045.jpg.asset.json";
import obraMonte from "@/assets/IMG-20260612-WA0048.jpg.asset.json";
import fundacoes from "@/assets/IMG-20260819-WA0031.jpg.asset.json";
import escavacao from "@/assets/IMG-20260819-WA0041.jpg.asset.json";
import poco from "@/assets/IMG-20260819-WA0051.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kuhandza Construções | Construção Civil em Nampula" },
      {
        name: "description",
        content:
          "Empreiteira de construção civil em Nampula: escolas, infraestruturas públicas, fundações, alvenaria e reabilitação. Obra entregue com rigor técnico.",
      },
      { property: "og:title", content: "Kuhandza Construções | Construção Civil em Nampula" },
      {
        property: "og:description",
        content:
          "Escolas, infraestruturas e reabilitações executadas em Nampula com equipas próprias e padrão técnico exigente.",
      },
    ],
  }),
  component: Index,
});

const servicos = [
  {
    n: "01",
    t: "Edifícios Públicos",
    d: "Escolas, centros de saúde e blocos administrativos executados de raiz, do movimento de terras à pintura final.",
  },
  {
    n: "02",
    t: "Fundações & Estruturas",
    d: "Escavação, sapatas, vigas de fundação e pilares em betão armado com controlo dimensional em obra.",
  },
  {
    n: "03",
    t: "Reabilitação",
    d: "Recuperação de edifícios degradados: coberturas, alvenarias, rebocos, caixilharia e acabamentos.",
  },
  {
    n: "04",
    t: "Águas & Saneamento",
    d: "Poços, cisternas, fossas sépticas e redes prediais executadas com impermeabilização cuidada.",
  },
  {
    n: "05",
    t: "Logística de Obra",
    d: "Transporte e distribuição de materiais em zonas rurais de difícil acesso, com meios próprios.",
  },
  {
    n: "06",
    t: "Fiscalização Técnica",
    d: "Acompanhamento, medição e relatórios de progresso para donos de obra e financiadores.",
  },
];

const projetos = [
  {
    img: escolaVerde.url,
    titulo: "Escola Primária — Bloco Concluído",
    local: "Distrito de Mogovolas, Nampula",
    tag: "Concluído",
    span: "md:col-span-8 md:row-span-2",
    alt: "Bloco escolar pintado de verde com cobertura metálica, em fase final de obra",
  },
  {
    img: fundacoes.url,
    titulo: "Fundações em Betão Armado",
    local: "Nampula Cidade",
    tag: "Estrutura",
    span: "md:col-span-4",
    alt: "Equipa a executar vigas de fundação e pilares em obra",
  },
  {
    img: escavacao.url,
    titulo: "Abertura de Caboucos",
    local: "Rapale, Nampula",
    tag: "Terraplenagem",
    span: "md:col-span-4",
    alt: "Trabalhadores a escavar caboucos para fundações",
  },
  {
    img: obraMonte.url,
    titulo: "Bloco de Salas de Aula",
    local: "Nampula, Moçambique",
    tag: "Em curso",
    span: "md:col-span-7",
    alt: "Obra de alvenaria de salas de aula com monte ao fundo",
  },
  {
    img: alvenaria.url,
    titulo: "Vigas de Coroamento",
    local: "Nacala-a-Velha",
    tag: "Estrutura",
    span: "md:col-span-5",
    alt: "Pedreiros a montar armadura de viga de coroamento sobre andaime",
  },
  {
    img: reboco.url,
    titulo: "Alvenaria e Rebocos",
    local: "Nampula",
    tag: "Acabamentos",
    span: "md:col-span-5",
    alt: "Paredes de alvenaria rebocadas ao longo de um edifício",
  },
  {
    img: escolaAntiga.url,
    titulo: "Reabilitação de Escola Existente",
    local: "Monapo, Nampula",
    tag: "Reabilitação",
    span: "md:col-span-7",
    alt: "Edifício escolar antigo a ser preparado para reabilitação",
  },
  {
    img: poco.url,
    titulo: "Cisterna de Água",
    local: "Meconta, Nampula",
    tag: "Saneamento",
    span: "md:col-span-6",
    alt: "Trabalhador a impermeabilizar o interior de uma cisterna de betão",
  },
  {
    img: logistica.url,
    titulo: "Transporte de Materiais",
    local: "Zonas rurais de Nampula",
    tag: "Logística",
    span: "md:col-span-6",
    alt: "Equipa a transportar vigas de madeira por caminho rural",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#topo" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center bg-primary font-display text-lg text-primary-foreground">
              K
            </span>
            <span className="font-display text-sm leading-4 tracking-tight">
              KUHANDZA
              <span className="block text-[0.6rem] font-normal tracking-[0.3em] text-muted-foreground">
                CONSTRUÇÕES
              </span>
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a className="transition-colors hover:text-primary" href="#servicos">
              Serviços
            </a>
            <a className="transition-colors hover:text-primary" href="#obras">
              Obras
            </a>
            <a className="transition-colors hover:text-primary" href="#empresa">
              Empresa
            </a>
          </nav>
          <a
            href="#contacto"
            className="bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-primary-foreground transition-opacity hover:opacity-90"
          >
            Pedir orçamento
          </a>
        </div>
        <div className="hazard-bar h-1" />
      </header>

      {/* HERO */}
      <section id="topo" className="relative flex min-h-screen items-end overflow-hidden">
        <img
          src={escolaVerde.url}
          alt="Escola construída pela Kuhandza Construções em Nampula"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/40" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-40">
          <p className="eyebrow reveal">Nampula · Moçambique · Desde 2015</p>
          <h1 className="reveal mt-5 max-w-4xl font-display text-5xl leading-[0.95] sm:text-7xl lg:text-8xl">
            CONSTRUÍMOS
            <span className="block text-primary">O QUE FICA</span>
          </h1>
          <p className="reveal mt-6 max-w-xl text-lg text-muted-foreground">
            Empreiteira de construção civil especializada em escolas, infraestruturas públicas
            e obras de raiz no norte de Moçambique. Equipas próprias, prazos cumpridos,
            qualidade verificável em obra.
          </p>
          <div className="reveal mt-10 flex flex-wrap gap-x-12 gap-y-6 border-t border-border/70 pt-8">
            {[
              ["+40", "obras executadas"],
              ["+120", "colaboradores"],
              ["10", "distritos servidos"],
            ].map(([k, v]) => (
              <div key={v}>
                <div className="font-display text-4xl text-primary">{k}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">O que fazemos</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">ÁREAS DE ACTUAÇÃO</h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Do estudo do terreno à entrega das chaves — assumimos empreitadas completas ou
            especialidades isoladas.
          </p>
        </div>
        <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {servicos.map((s) => (
            <div key={s.n} className="group bg-background p-8 transition-colors hover:bg-card">
              <span className="font-display text-sm text-primary">{s.n}</span>
              <h3 className="mt-4 font-display text-xl">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              <div className="mt-6 h-px w-10 bg-primary transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </section>

      {/* OBRAS */}
      <section id="obras" className="border-y border-border bg-card/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="eyebrow">Portfólio</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">OBRAS EM IMAGEM</h2>
          <div className="mt-14 grid auto-rows-[240px] gap-4 md:grid-cols-12">
            {projetos.map((p) => (
              <figure
                key={p.titulo}
                className={`group relative overflow-hidden bg-secondary ${p.span}`}
              >
                <img
                  src={p.img}
                  alt={p.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
                <span className="absolute left-4 top-4 bg-primary px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-primary-foreground">
                  {p.tag}
                </span>
                <figcaption className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-lg leading-tight">{p.titulo}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {p.local}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* EMPRESA */}
      <section id="empresa" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="relative">
            <img
              src={equipa.url}
              alt="Técnicos da Kuhandza Construções em visita a uma frente de obra"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="hazard-bar absolute -bottom-3 -right-3 h-2 w-2/3" />
          </div>
          <div>
            <p className="eyebrow">A empresa</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">
              GENTE DE OBRA,
              <span className="block text-primary">NÃO DE GABINETE</span>
            </h2>
            <p className="mt-6 text-muted-foreground">
              A Kuhandza Construções nasceu em Nampula com uma ideia simples: obra bem feita
              exige presença permanente no estaleiro. Os nossos engenheiros e encarregados
              acompanham cada frente, do primeiro cabouco à última demão de tinta.
            </p>
            <p className="mt-4 text-muted-foreground">
              Trabalhamos com o Estado, autarquias, ONGs e privados, incluindo em comunidades
              rurais onde a logística é o primeiro desafio da obra.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Equipas próprias e equipamento de segurança certificado",
                "Relatórios fotográficos e medições semanais",
                "Materiais com ensaio e rastreio de fornecedor",
                "Mão-de-obra local em cada distrito onde entramos",
              ].map((i) => (
                <li key={i} className="flex gap-3 text-sm">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-primary" />
                  <span className="text-muted-foreground">{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section className="border-y border-border bg-card/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="eyebrow">Como trabalhamos</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">DO TERRENO À ENTREGA</h2>
          <div className="mt-14 grid gap-8 md:grid-cols-4">
            {[
              ["Levantamento", "Visita ao local, análise do solo e do acesso, orçamento detalhado."],
              ["Estaleiro", "Montagem, segurança, contratação de mão-de-obra local e materiais."],
              ["Execução", "Fundações, estrutura, alvenarias, cobertura e acabamentos."],
              ["Entrega", "Vistoria conjunta, correcções e garantia pós-obra."],
            ].map(([t, d], i) => (
              <div key={t} className="border-t-2 border-primary pt-5">
                <div className="font-display text-3xl text-primary/40">0{i + 1}</div>
                <h3 className="mt-2 font-display text-lg">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="relative overflow-hidden">
        <img
          src={logistica.url}
          alt="Equipa da Kuhandza a transportar materiais para uma frente de obra rural"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/90" />
        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Contacto</p>
              <h2 className="mt-3 font-display text-4xl sm:text-6xl">
                TEM UMA OBRA
                <span className="block text-primary">PARA ARRANCAR?</span>
              </h2>
              <p className="mt-6 max-w-md text-muted-foreground">
                Envie o caderno de encargos ou descreva a ideia. Respondemos com visita técnica
                e orçamento em até 5 dias úteis.
              </p>
            </div>
            <div className="grid gap-px self-start bg-border sm:grid-cols-2">
              {[
                ["Escritório", "Av. do Trabalho, Nampula\nMoçambique"],
                ["Telefone", "+258 84 000 0000\n+258 87 000 0000"],
                ["E-mail", "geral@kuhandza.co.mz"],
                ["Horário", "Seg–Sex 07h30–17h00\nSáb 08h00–12h00"],
              ].map(([t, v]) => (
                <div key={t} className="bg-background p-6">
                  <div className="text-[0.65rem] uppercase tracking-[0.22em] text-primary">{t}</div>
                  <p className="mt-2 whitespace-pre-line text-sm text-muted-foreground">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="hazard-bar h-1" />
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span className="font-display text-sm text-foreground">KUHANDZA CONSTRUÇÕES</span>
          <span>© {new Date().getFullYear()} — Construção civil, Nampula, Moçambique.</span>
        </div>
      </footer>
    </div>
  );
}
