Create `env.list` file with the following:

```
GITHUB_TOKEN=YOUR_GITHUB_TOKEN
```

Run

```
docker run --env-file env.list fork-repo OWNER/REPO
```

## Setup

```
docker build -t fork-repo .
```