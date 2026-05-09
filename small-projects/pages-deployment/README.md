# GitHub Pages Deployment Workflow

This project shows how to use **GitHub Actions** to automatically deploy a static website to **GitHub Pages** whenever `index.html` is updated on the `main` branch.

The site is intentionally simple so the focus stays on continuous integration and continuous deployment. The repository includes a basic `index.html`, a GitHub Actions workflow in `.github/workflows/static.yml`, and this README.

## How it works

The workflow should:

1. Watch for pushes to the `main` branch.
2. Check whether `index.html` was changed.
3. Deploy the repository contents as a GitHub Pages site.
4. Publish the site at:

```text
https://gansblaidx.github.io/Projects/
```

## Requirements

To complete the project, the repository should contain:

- An `index.html` file with a simple message.
- A `README.md` file explaining the project.
- A `.github/workflows/static.yml` workflow file.
- A GitHub Pages configuration enabled in the repository settings.

## Example workflow behavior

If you push a commit to `main` and the commit includes changes to `index.html`, the deployment workflow runs and publishes the updated site.

If you push changes that do not modify `index.html`, the workflow does not run.

## Learning focus

Created as a practice project for learning GitHub Pages deployment with GitHub Actions.
