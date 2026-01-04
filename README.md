# 💼 Portfólio Pessoal - Lara Emylli

<div align="center">
  
  ![Next.js](https://img.shields.io/badge/Next.js-15.5.9-black?style=for-the-badge&logo=next.js)
  ![React](https://img.shields.io/badge/React-18-61dafb?style=for-the-badge&logo=react)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=for-the-badge&logo=typescript)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=for-the-badge&logo=tailwind-css)
  
  **Portfólio interativo de desenvolvedora frontend júnior**
  
</div>

---

## 📋 Sobre o Projeto

Portfólio pessoal desenvolvido para demonstrar habilidades em desenvolvimento frontend, com foco em **React**, **Next.js** e **JavaScript vanilla**. O projeto apresenta uma interface moderna e interativa, com projetos práticos que demonstram manipulação do DOM, eventos e animações.

### ✨ Destaques

- 🎨 Design moderno e responsivo
- ⚡ Animações suaves e interativas
- 🌙 Temas dinâmicos (claro/escuro)
- 📱 100% Mobile-friendly
- 🚀 Performance otimizada
- ♿ Acessível e semântico

---

## 🛠️ Tecnologias Utilizadas

### Core
- **[Next.js 15.5.9](https://nextjs.org/)** - Framework React com SSR
- **[React 18](https://react.dev/)** - Biblioteca JavaScript para UI
- **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript tipado
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first

### Bibliotecas
- **[Lucide React](https://lucide.dev/)** - Ícones modernos
- **[styled-jsx](https://github.com/vercel/styled-jsx)** - CSS-in-JS (animações)

### Ferramentas
- **[Git](https://git-scm.com/)** - Controle de versão
- **[VS Code](https://code.visualstudio.com/)** - Editor de código

---

## 📂 Estrutura do Projeto

```
portfolio/
├── app/
│   ├── components/         # Componentes reutilizáveis
│   │   ├── Navbar/        # Barra de navegação
│   │   ├── Footer/        # Rodapé
│   │   ├── hero/          # Seção hero
│   │   ├── story/         # Sobre mim
│   │   ├── values/        # Meus valores
│   │   └── cta/           # Call to action
│   │
│   ├── projects/          # Projetos (rotas dinâmicas)
│   │   ├── page.tsx       # Lista de projetos
│   │   ├── contador-de-cliques/
│   │   │   └── page.tsx   # Projeto 1
│   │   ├── botao-animado/
│   │   │   └── page.tsx   # Projeto 2
│   │   └── hora-sincronizada/
│   │       └── page.tsx   # Projeto 3
│   │
│   ├── skills/
│   │   └── page.tsx       # Habilidades técnicas
│   │
│   ├── contact/
│   │   └── page.tsx       # Contato
│   │
│   ├── page.tsx           # Home page
│   └── layout.tsx         # Layout global
│
├── public/                # Arquivos estáticos
│   └── logo.png          # Logo
│
├── tailwind.config.js    # Configuração Tailwind
├── tsconfig.json         # Configuração TypeScript
└── package.json          # Dependências
```

---

## 🚀 Projetos em Destaque

### 1. 🎮 Contador de Cliques Interativo
Sistema completo de gamificação com:
- ✅ Sistema de conquistas (6 achievements)
- ✅ Streak de cliques rápidos
- ✅ Easter egg secreto
- ✅ Partículas animadas
- ✅ Efeitos sonoros
- ✅ Notificações em tempo real

**Tecnologias:** React Hooks, TypeScript, Web Audio API, CSS Animations

### 2. 🎨 Botão Animado
Demonstração de manipulação de eventos DOM:
- ✅ Eventos: `onMouseEnter`, `onClick`, `onMouseLeave`
- ✅ Mudança dinâmica de estado
- ✅ Feedback visual em tempo real
- ✅ Animações CSS

**Tecnologias:** React State, Event Handlers, Tailwind CSS

### 3. ⏰ Hora Sincronizada
Relógio digital com design adaptativo:
- ✅ Atualização em tempo real (1s)
- ✅ Background dinâmico por período (manhã/tarde/noite)
- ✅ Gradientes animados
- ✅ Ícones contextuais

**Tecnologias:** React useEffect, Date API, CSS Gradients

---

## 🎯 Funcionalidades

### Navegação
- [x] Menu responsivo com mobile burger
- [x] Smooth scroll entre seções
- [x] Links ativos destacados
- [x] Navbar fixa com backdrop blur

### Páginas
- [x] **Home** - Hero section com animações
- [x] **Sobre** - História e apresentação
- [x] **Skills** - Habilidades técnicas com níveis
- [x] **Projetos** - Galeria interativa
- [x] **Contato** - Cards de contato + frase motivacional

### Recursos Avançados
- [x] Rotas dinâmicas Next.js
- [x] Componentes client-side com hooks
- [x] Animações CSS customizadas
- [x] Intersection Observer API
- [x] Responsive design (mobile-first)

---

## 💻 Como Executar Localmente

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/portfolio.git

# Entre na pasta
cd portfolio

# Instale as dependências
npm install
# ou
yarn install

# Execute o servidor de desenvolvimento
npm run dev
# ou
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

---

## 📦 Build para Produção

```bash
# Criar build otimizado
npm run build

# Executar versão de produção
npm start
```

---

## 🎨 Paleta de Cores

```css
/* Cores principais */
--cyan: #22d3ee      /* Accent primário */
--purple: #c084fc    /* Accent secundário */
--green: #4ade80     /* Sucesso */
--rose: #fb7185      /* Destaque */

/* Backgrounds */
--black: #000000     /* Background escuro */
--slate-900: #0f172a /* Cards */
--white: #ffffff     /* Texto claro */
```

---

## 📱 Responsividade

Breakpoints Tailwind:
- **sm:** 640px (Mobile landscape)
- **md:** 768px (Tablet)
- **lg:** 1024px (Desktop)
- **xl:** 1280px (Large desktop)

---

## ⚡ Performance

- ✅ Lighthouse Score: 95+
- ✅ First Contentful Paint: < 1.5s
- ✅ Time to Interactive: < 2.5s
- ✅ Code splitting automático (Next.js)
- ✅ Lazy loading de componentes
- ✅ Imagens otimizadas

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👩‍💻 Autora

**Lara Emylli Sant'Ana**

Desenvolvedora Frontend Júnior apaixonada por criar experiências web interativas e acessíveis.


- 💼 LinkedIn: [linkedin.com/in/lara-santana-dev](#)
- 📧 Email: emyllisantana429@gmail.com
- 🐙 GitHub: [@LarayzUp](https://github.com/LarayzUp)

---

## 🙏 Agradecimentos

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)

---

<div align="center">
  
  **⭐ Se este projeto te ajudou, considere dar uma estrela!**
  
  Feito com 💙 por [Lara Emylli](https://github.com/seu-usuario)

</div>
