## Usage

Example forks the turbo-src/demo repo into your personal github account.

```
docker run -it fork-repo node fork-repo.js "turbo-src/demo"
```

## Setup
Create `env.list` file with the following:

```
GITHUB_TOKEN=YOUR_GITHUB_TOKEN
```

```
docker build -t fork-repo .
```