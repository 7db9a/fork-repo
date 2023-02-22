const fs = require('fs');
const { Octokit } = require("@octokit/rest");

// Read the environment variable from the file
// Get the GitHub token from an environment variable
const envFile = fs.readFileSync('env.list', 'utf8');
const token = envFile.split('=')[1].trim();

// Get the repo name from the command line arguments
const repoName = process.argv[2];

// Check that the repo name is present
if (!repoName) {
  console.error("Usage: node fork-repo.js OWNER/REPO");
  process.exit(1);
}

// Create an instance of the Octokit client with the token
const octokit = new Octokit({
  auth: token,
});

// Fork the repo using the Octokit client
octokit.repos
  .createFork({
    owner: repoName.split("/")[0],
    repo: repoName.split("/")[1],
  })
  .then((response) => {
    console.log("Repo forked successfully!");
  })
  .catch((error) => {
    console.error("Error forking repo:", error);
  });
