Create `env.list` file with the following:

```
GITHUB_TOKEN=YOUR_GITHUB_TOKEN
```

Run

```
docker run -it --env-file env.list fork-repo node fork-repo.js "turbo-src/demo"
```

## Setup

```
docker build -t fork-repo .
```