## Простой пример проекта используя `bun`

### Установка `bun` на компьютер

```
# скрипт установки (рекомендуется)
curl -fsSL https://bun.sh/install | bash

# используя npm
npm install -g bun

# используя Homebrew
brew tap oven-sh/bun
brew install bun

# используя Docker
docker pull oven/bun
docker run --rm --init --ulimit memlock=-1:-1 oven/bun
```

### frontend

```
bun install (установить зависимости)
bun run dev (запустить vite)
```

### simple-server

```
bun install (установить зависимости)
bun run index.tsx (запустить сервер)
```
