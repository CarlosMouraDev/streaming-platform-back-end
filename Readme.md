# 📺 Plataforma de Streaming Educacional – API REST

Esta API fornece os recursos principais para um sistema de **streaming de cursos online**, permitindo funcionalidades como autenticação de usuários, visualização de cursos e episódios, controle de tempo assistido, favoritar conteúdos, entre outros. Ela foi projetada seguindo boas práticas RESTful, utilizando autenticação baseada em JWT e segregação por controladores.

---

## 🔐 Autenticação (`/auth`)
Endpoints para registro e login de usuários.

| Método | Rota              | Descrição                          | Autenticado |
|--------|-------------------|------------------------------------|-------------|
| POST   | `/auth/register`  | Registrar novo usuário             | ❌          |
| POST   | `/auth/login`     | Login e geração de token JWT       | ❌          |

---

## 📂 Categorias (`/categories`)
Endpoints para listagem e visualização de categorias de cursos.

| Método | Rota                  | Descrição                         | Autenticado |
|--------|-----------------------|-----------------------------------|-------------|
| GET    | `/categories`         | Listar todas as categorias        | ✅          |
| GET    | `/categories/:id`     | Detalhes de uma categoria         | ✅          |

---

## 🎓 Cursos (`/courses`)
Endpoints para buscar, listar e visualizar cursos disponíveis na plataforma.

| Método | Rota                      | Descrição                         | Autenticado |
|--------|---------------------------|-----------------------------------|-------------|
| GET    | `/courses/search`         | Buscar cursos com filtros         | ✅          |
| GET    | `/courses/newest`         | Listar cursos mais recentes       | ❌          |
| GET    | `/courses/featured`       | Listar cursos em destaque         | ✅          |
| GET    | `/courses/popular`        | Listar cursos mais populares      | ✅          |
| GET    | `/course/:id`             | Detalhes de um curso específico   | ✅          |

---

## 📺 Episódios (`/episodes`)
Controle de acesso e progresso de episódios de cursos.

| Método | Rota                               | Descrição                                 | Autenticado |
|--------|------------------------------------|-------------------------------------------|-------------|
| GET    | `/episodes/stream`                 | Stream de vídeo via token na query string | 🔒 (via query) |
| GET    | `/episodes/:id/watchTime`          | Obter tempo assistido do episódio         | ✅          |
| POST   | `/episodes/:id/watchTime`          | Salvar tempo assistido                    | ✅          |

---

## ⭐ Favoritos (`/favorites`)
Gerenciamento de cursos favoritos do usuário.

| Método | Rota                | Descrição                         | Autenticado |
|--------|---------------------|-----------------------------------|-------------|
| GET    | `/favorites`        | Listar cursos favoritos           | ✅          |
| POST   | `/favorites`        | Adicionar curso aos favoritos     | ✅          |
| DELETE | `/favorites/:id`    | Remover curso dos favoritos       | ✅          |

---

## ❤️ Curtidas (`/likes`)
Controle de likes em conteúdos.

| Método | Rota           | Descrição                   | Autenticado |
|--------|----------------|-----------------------------|-------------|
| POST   | `/likes`       | Curtir conteúdo             | ✅          |
| DELETE | `/likes/:id`   | Remover curtida             | ✅          |

---

## 👤 Usuário Atual (`/users/current`)
Endpoints para visualizar e atualizar dados do usuário autenticado.

| Método | Rota                            | Descrição                             | Autenticado |
|--------|----------------------------------|---------------------------------------|-------------|
| GET    | `/users/current`                | Obter dados do usuário autenticado    | ✅          |
| GET    | `/users/current/watching`       | Ver cursos em andamento               | ✅          |
| PUT    | `/users/current`                | Atualizar dados do usuário            | ✅          |
| PUT    | `/users/current/password`       | Alterar senha                         | ✅          |

---

## 🔒 Autenticação
A maioria dos endpoints requer **autenticação via token JWT** no header:


---

## 📦 Tecnologias envolvidas
- Node.js
- Express.js
- JWT (JSON Web Token)
- Controllers por domínio
- Middleware de autenticação

---

## 🧪 Sugestão para testes
Você pode testar essa API com ferramentas como:
- [Postman](https://www.postman.com/)
- [Insomnia](https://insomnia.rest/)
- Frontend em React, Next.js ou qualquer consumidor REST

---