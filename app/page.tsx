import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Building2,
  Mail,
  MapPin,
  Phone,
  Clock,
  ChevronRight,
  HardHat,
  Compass,
  Lightbulb,
  CheckCircle,
} from "lucide-react"

export default function EngenhariaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b sticky top-0 z-50 w-full bg-background">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Building2 className="h-6 w-6" />
            <span className="text-xl font-bold">EngenhariaTech</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#inicio" className="text-sm font-medium hover:text-primary">
              Início
            </Link>
            <Link href="#servicos" className="text-sm font-medium hover:text-primary">
              Serviços
            </Link>
            <Link href="#sobre" className="text-sm font-medium hover:text-primary">
              Sobre Nós
            </Link>
            <Link href="#projetos" className="text-sm font-medium hover:text-primary">
              Projetos
            </Link>
            <Link href="#equipe" className="text-sm font-medium hover:text-primary">
              Equipe
            </Link>
            <Link href="#contato" className="text-sm font-medium hover:text-primary">
              Contato
            </Link>
          </nav>
          <Button className="hidden md:flex">Solicitar Orçamento</Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <span className="sr-only">Menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section id="inicio" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Soluções de Engenharia para o Futuro
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Transformando ideias em projetos inovadores com excelência técnica e compromisso com a
                    sustentabilidade.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg">Conheça Nossos Serviços</Button>
                  <Button size="lg" variant="outline">
                    Fale Conosco
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=550&width=550"
                  width={550}
                  height={550}
                  alt="Engenharia moderna"
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="servicos" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Nossos Serviços</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Excelência em Engenharia</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Oferecemos soluções completas em engenharia para atender às necessidades do seu projeto.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-4">
                  <HardHat className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Engenharia Civil</h3>
                <p className="text-center text-muted-foreground">
                  Projetos estruturais, fundações, edificações residenciais e comerciais com foco em segurança e
                  qualidade.
                </p>
                <Button variant="link" className="gap-1">
                  Saiba mais <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-4">
                  <Compass className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Projetos Industriais</h3>
                <p className="text-center text-muted-foreground">
                  Desenvolvimento de plantas industriais, otimização de processos e implementação de novas tecnologias.
                </p>
                <Button variant="link" className="gap-1">
                  Saiba mais <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Consultoria Técnica</h3>
                <p className="text-center text-muted-foreground">
                  Assessoria especializada, laudos técnicos, perícias e soluções para problemas complexos de engenharia.
                </p>
                <Button variant="link" className="gap-1">
                  Saiba mais <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Equipe de engenharia"
                  className="rounded-xl object-cover"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Sobre Nós</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Nossa História e Valores</h2>
                  <p className="text-muted-foreground md:text-xl/relaxed">
                    Fundada em 2005, a EngenhariaTech se consolidou como referência no mercado brasileiro de engenharia,
                    com mais de 500 projetos concluídos com sucesso em todo o território nacional.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <p className="font-medium">Compromisso com a excelência técnica</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <p className="font-medium">Inovação e sustentabilidade em cada projeto</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <p className="font-medium">Equipe altamente qualificada e especializada</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <p className="font-medium">Atendimento personalizado às necessidades do cliente</p>
                  </div>
                </div>
                <Button className="w-fit">Conheça Nossa Trajetória</Button>
              </div>
            </div>
          </div>
        </section>

        <section id="projetos" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Portfólio</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nossos Projetos</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Conheça alguns dos nossos principais projetos e realizações em diferentes áreas da engenharia.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="group relative overflow-hidden rounded-lg border">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  width={400}
                  height={300}
                  alt="Projeto Residencial"
                  className="object-cover transition-transform group-hover:scale-105 h-60 w-full"
                />
                <div className="p-4">
                  <h3 className="font-bold">Condomínio Residencial Verde Horizonte</h3>
                  <p className="text-sm text-muted-foreground">
                    Projeto estrutural completo para condomínio com 120 unidades habitacionais e área de lazer.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  width={400}
                  height={300}
                  alt="Projeto Industrial"
                  className="object-cover transition-transform group-hover:scale-105 h-60 w-full"
                />
                <div className="p-4">
                  <h3 className="font-bold">Planta Industrial Tecnometal</h3>
                  <p className="text-sm text-muted-foreground">
                    Desenvolvimento de planta industrial com 15.000m² e implementação de processos automatizados.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  width={400}
                  height={300}
                  alt="Projeto Comercial"
                  className="object-cover transition-transform group-hover:scale-105 h-60 w-full"
                />
                <div className="p-4">
                  <h3 className="font-bold">Centro Empresarial Inovação</h3>
                  <p className="text-sm text-muted-foreground">
                    Projeto completo para edifício comercial com 12 andares e certificação de sustentabilidade.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Button variant="outline">Ver Todos os Projetos</Button>
            </div>
          </div>
        </section>

        <section id="equipe" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Nossa Equipe</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Profissionais Especializados</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contamos com uma equipe multidisciplinar de engenheiros e técnicos altamente qualificados.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-2">
                <div className="overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    width={200}
                    height={200}
                    alt="Engenheiro"
                    className="aspect-square object-cover"
                  />
                </div>
                <h3 className="font-bold">Dr. Carlos Silva</h3>
                <p className="text-sm text-muted-foreground">Diretor de Engenharia</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    width={200}
                    height={200}
                    alt="Engenheira"
                    className="aspect-square object-cover"
                  />
                </div>
                <h3 className="font-bold">Dra. Ana Oliveira</h3>
                <p className="text-sm text-muted-foreground">Engenheira Estrutural</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    width={200}
                    height={200}
                    alt="Engenheiro"
                    className="aspect-square object-cover"
                  />
                </div>
                <h3 className="font-bold">Dr. Marcos Santos</h3>
                <p className="text-sm text-muted-foreground">Engenheiro Industrial</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    width={200}
                    height={200}
                    alt="Engenheira"
                    className="aspect-square object-cover"
                  />
                </div>
                <h3 className="font-bold">Dra. Juliana Costa</h3>
                <p className="text-sm text-muted-foreground">Consultora Técnica</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Depoimentos</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">O Que Dizem Nossos Clientes</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A satisfação de nossos clientes é o nosso maior reconhecimento.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="space-y-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-primary"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "A equipe da EngenhariaTech superou todas as nossas expectativas. Profissionais extremamente
                    competentes e comprometidos com prazos e qualidade."
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-muted">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      width={40}
                      height={40}
                      alt="Cliente"
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Roberto Mendes</p>
                    <p className="text-sm text-muted-foreground">Construtora Horizonte</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="space-y-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-primary"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "Contratamos a consultoria para resolver problemas estruturais complexos e o resultado foi
                    excelente. Recomendo fortemente."
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-muted">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      width={40}
                      height={40}
                      alt="Cliente"
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Fernanda Almeida</p>
                    <p className="text-sm text-muted-foreground">Incorporadora Visão</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="space-y-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-primary"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "O projeto industrial desenvolvido pela EngenhariaTech trouxe eficiência e economia para nossa
                    operação. Parceiros de longo prazo."
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-muted">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      width={40}
                      height={40}
                      alt="Cliente"
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Paulo Ribeiro</p>
                    <p className="text-sm text-muted-foreground">Indústria Metalúrgica BR</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Contato</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Entre em Contato</h2>
                  <p className="text-muted-foreground md:text-xl/relaxed">
                    Estamos prontos para atender às suas necessidades e desenvolver soluções personalizadas para o seu
                    projeto.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-bold">Endereço</h3>
                      <p className="text-muted-foreground">Av. Paulista, 1000, São Paulo - SP, 01310-100</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-bold">Telefone</h3>
                      <p className="text-muted-foreground">(11) 3456-7890</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-bold">E-mail</h3>
                      <p className="text-muted-foreground">contato@engenhariatech.com.br</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-bold">Horário de Atendimento</h3>
                      <p className="text-muted-foreground">Segunda a Sexta: 8h às 18h</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4">Envie sua Mensagem</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="nome"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Nome
                      </label>
                      <Input id="nome" placeholder="Seu nome completo" />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        E-mail
                      </label>
                      <Input id="email" type="email" placeholder="seu@email.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="telefone"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Telefone
                    </label>
                    <Input id="telefone" placeholder="(00) 00000-0000" />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="assunto"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Assunto
                    </label>
                    <Input id="assunto" placeholder="Assunto da mensagem" />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="mensagem"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Mensagem
                    </label>
                    <Textarea id="mensagem" placeholder="Descreva seu projeto ou dúvida" className="min-h-[120px]" />
                  </div>
                  <Button type="submit" className="w-full">
                    Enviar Mensagem
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <Building2 className="h-6 w-6" />
            <p className="text-sm font-medium">
              &copy; {new Date().getFullYear()} EngenhariaTech. Todos os direitos reservados.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Política de Privacidade
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Termos de Uso
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Mapa do Site
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

