const skills = [
  'Node.js',
  'TypeScript',
  'React',
  'Next.js',
  'Tailwind CSS',
  'Shadcn UI',
  'Flutter',
  'Dart',
  'REST APIs',
  'PostgreSQL',
  'Prisma',
  'Git/GitHub',
];

const projects = [
  {
    title: 'API de Controle Financeiro',
    description:
      'API REST com autenticação, cadastro de transações, filtros e validação de dados para organização financeira.',
    stack: 'Node.js • TypeScript • Prisma • PostgreSQL',
  },
  {
    title: 'App Flutter de Tarefas',
    description:
      'Aplicativo mobile com login, lista de tarefas, persistência local e integração com backend para sincronização.',
    stack: 'Flutter • Dart • API REST',
  },
  {
    title: 'Portfólio Web Responsivo',
    description:
      'Site moderno focado em apresentação profissional, performance e boa experiência em mobile e desktop.',
    stack: 'React • Tailwind CSS • Shadcn UI',
  },
];

const roadmap = [
  'Backend com Node.js e APIs bem estruturadas',
  'Interfaces web com React, Tailwind e Shadcn UI',
  'Apps mobile com Flutter e integração com backend',
  'Boas práticas: Git, código limpo e documentação',
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_35%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.14),transparent_30%),linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent)]" />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-10 lg:px-8">
          <header className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.35em] text-muted-foreground">
                Portfólio
              </p>
              <h1 className="text-lg font-semibold">
                <a href="#about">Lucas Santiago</a>
              </h1>
            </div>
            <a
              href="#contact"
              className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition hover:bg-accent"
            >
              Fale comigo
            </a>
          </header>

          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Disponível para estágio, freelas e vagas júnior
              </div>

              <div className="space-y-5">
                <h2 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                  Desenvolvedor júnior focado em Node.js, Web e Flutter
                </h2>
                <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
                  Crio interfaces modernas, APIs bem organizadas e aplicativos
                  mobile com foco em aprendizado rápido, consistência e entrega
                  de valor.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
                >
                  Ver projetos
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-medium transition hover:bg-accent"
                >
                  Entrar em contato
                </a>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                  <p className="text-3xl font-semibold">3+</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    projetos pessoais
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                  <p className="text-3xl font-semibold">2</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    frentes principais
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                  <p className="text-3xl font-semibold">100%</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    foco em evolução
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card/80 p-6 shadow-xl backdrop-blur">
              <div className="space-y-6">
                <div className="rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10 p-6">
                  <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                    Perfil
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold">Junior Full Stack</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    Interesse em construir aplicações web e mobile com boa
                    arquitetura, experiência de usuário e código escalável.
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Stack principal
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {['Node.js', 'TypeScript', 'React', 'Flutter', 'Tailwind'].map(
                      (item) => (
                        <span
                          key={item}
                          className="rounded-full border border-border bg-background px-3 py-1 text-sm"
                        >
                          {item}
                        </span>
                      )
                    )}
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-background p-5">
                  <p className="text-sm font-medium text-muted-foreground">
                    Objetivo atual
                  </p>
                  <p className="mt-2 leading-7">
                    Entrar em um time onde eu possa evoluir com backend, frontend
                    e mobile, contribuindo com entregas reais desde o início.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-8 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
              Sobre mim
            </p>
            <h3 className="mt-3 text-2xl font-semibold">
              Desenvolvedor em formação com foco em solução prática
            </h3>
            <p className="mt-4 leading-8 text-muted-foreground">
              Gosto de transformar ideias em produtos simples, bonitos e bem
              estruturados. Tenho interesse especial em APIs com Node.js,
              interfaces web com React e apps mobile com Flutter.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
              Foco técnico
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="rounded-2xl border border-border bg-background px-4 py-3 text-sm font-medium"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto w-full max-w-6xl px-6 py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Projetos
          </p>
          <h3 className="mt-2 text-2xl font-semibold">Alguns trabalhos e estudos</h3>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-3xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm font-medium text-muted-foreground">
                {project.stack}
              </p>
              <h4 className="mt-3 text-xl font-semibold">{project.title}</h4>
              <p className="mt-4 leading-7 text-muted-foreground">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-8 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
              Como eu trabalho
            </p>
            <h3 className="mt-3 text-2xl font-semibold">
              Processo simples e foco em entrega
            </h3>
            <div className="mt-6 space-y-4">
              {roadmap.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-background p-4"
                >
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                  <p className="leading-7">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            id="contact"
            className="rounded-3xl border border-border bg-primary p-8 text-primary-foreground shadow-sm"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-primary-foreground/70">
              Contato
            </p>
            <h3 className="mt-3 text-2xl font-semibold">
              Vamos conversar sobre a próxima oportunidade
            </h3>
            <p className="mt-4 leading-8 text-primary-foreground/80">
              Se você procura alguém dedicado, com vontade de aprender e com
              base em Node.js, web e Flutter, pode me chamar.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <p>Email: seuemail@exemplo.com</p>
              <p>GitHub: github.com/seuusuario</p>
              <p>LinkedIn: linkedin.com/in/seuusuario</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}