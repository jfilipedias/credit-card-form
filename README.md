# Credit Card Form

![Autor](https://img.shields.io/badge/developer-jfilipedias-blue)
![Licença](https://img.shields.io/github/license/jfilipedias/credit-card-form)

Esse projeto foi desenvolvido para o desafio [#boraCodar 13 da Rocketseat](https://www.rocketseat.com.br/boracodar/desafios-anteriores/um-forms-de-cartao-de-credito-desafio-13). Nele foi implementado um formulário para preenchimento dos dados de um cartão de crédito com o objetivo de estudar microinterações e como elas impactam na experiência do usuário. Desse modo, forma implementadas máscaras, validações e feedbacks os inputs do formulário, preview em tempo real do preenchimento do cartão e animação de flip do cartão para preview do campo CVV ao disparar os eventos de `hover` no preview do cartão e `focus` no campo CVV do formulário.  

Para isso foram utilizadas tecnologias como [ReactJS](https://reactjs.org/) e [Vite](https://vitejs.dev/) para o desenvolvimento do projeto, [TailwindCSS](https://tailwindcss.com/) para a estilização da interface, [React Hook Form](https://react-hook-form.com/) e [Zod](https://zod.dev/) para validação do formulário e [Radix](https://radix-ui.com/) para acessibilidade com o componente Tooltip.

É importante notar que a aplicação **não salva** e **não envia** nenhuma informação para nenhum servidor remoto. De todo modo, não é recomendável que seja inserido nenhum dado real de cartão de crédito.

![Interface do projeto Credit Card Form](./docs/cover.png)

## Getting Started

Instale as dependências do projeto:

```shell
pnpm i
```

Execute o projeto:

```shell
pnpm dev
```

## Tecnologias

- [ESLint](https://eslint.org/)
- [Radix](https://radix-ui.com/)
- [React Hook Form](https://react-hook-form.com/)
- [ReactJS](https://reactjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Typescript](https://typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Zod](https://zod.dev/)

## Licença

Este projeto está licenciado sob o MIT. Consulte a [licença](LICENSE) para mais informações.
