# Your Project Title

## Contents
1. [Purpose](#purpose)
2. [Repository Structure and Files](#repository-structure-and-files)
3. [Getting Started](#getting-started)
4. [Any Additional Sections](#any-additional-sections)
5. [Contact](#contact)

## Purpose
> ### Section To-Do:
> - [ ] Add a description of what this project does and why it exists  
> - [ ] Delete all instructions text, including this to-do list

> The purpose of this repository is to serve as a template for IISD-ELA staff, helping establish standardized, well-structured GitHub projects across the organization. It was developed by the IISD-ELA Data team in 2025 as part of a broader goal to increase GitHub usage and improve organization.

> **For an example of an IISD-ELA GitHub repository that was created using this template, please see [IISD-ELA/automate-topic-tag-assignment](https://github.com/IISD-ELA/automate-topic-tag-assignment).**

## Repository Structure and Files
> ### Section To-Do:
> - [ ] Add a description of the repository structure here
> - [ ] Edit the repository tree below to match your actual repository (i.e., the repository you have created using this template)
> - [ ] Delete all instructions text, including this to-do list
```
<your-repo-name>/       # ideally, the name should be all lower case, with each word separated by a hyphen
│
├── data/               # data inputs used directly in scripts (see more notes below)
|   ├── tracked-data/    # small, example datasets, not ignored by git (see more notes below)
│   └── ...             # optional subfolders; update this tree if added
├── docs/               # any relevant documentation
│   └── ...             # optional subfolders; update this tree if added
├── debug/              # scripts or files related to debugging
│   └── ...             # optional subfolders; update this tree if added
│
├── scripts/            # R, Python, other code
│   └── ...             # optional subfolders; update tree if added
├── results/            # figures, tables, and other outputs
|   ├── tracked-data/    # small, example output items, not ignored by git (see more notes below)
│   └── ...             # optional subfolders; update tree if added
│
├── src/                # reusable functions, modules, pipelines
│   └── ...             # optional subfolders; update tree if added
├── infra/              # infrastructure files
│   └── ...             # optional subfolders; update tree if added
├── config/             # parameters, constants, .yml files
│   └── ...             # optional subfolders; update tree if added
│
├── README.md           # this file, required
├── .gitignore          # list of files for git to ignore, required
└── LICENSE             # usage license, required (see more notes below)

```

> ### Notes on Repository Structure
> The recommended repo structure is shown above. It helps keep IISD-ELA repositories organized and consistent. You are free to adapt this structure as needed by removing folders you don’t use, adding new folders and subfolders relevant to your project, and editing files like ```.gitignore```.

> The repo structure is organized here by usage: ```data/```, ```docs/```, ```debug/``` likely apply to all repos, but ```scripts/``` and ```results/``` may only be needed by research scientists. Similarly, ```src/```, ```infra/```, and ```config/``` may only be needed by the data team. The ```README.md``` and ```.gitignore``` files are required by all IISD-ELA repositories, whereas ```LICENSE``` is only required by public repositories.

### Notes on Data Files
> In most cases, you should *not* commit full, large datasets to the repository; these should remain on your local machine unless they are small, non-sensitive example datasets. To support this, common data file types are included in the .gitignore so that they are ignored by Git *by default*. However, an exception is made for the ```data/tracked-data/``` and ```results/tracked-data/``` directories, where example datasets and outputs *can* be committed. This is done using Git's negation rules (i.e., `!` patterns) in the `.gitignore`, so files like CSVs are ignored everywhere except inside these directories.
> If your project needs additional datasets to be tracked, you can adjust the `.gitignore` as needed.

> ### Notes on Licenses for Public Repositories
> Every public repository requires a license file. A license file tells others how they can use, share, or modify your code and documents. To add a license to your public repository:
> 1. Click **Add file > Create new file**
> 2. Name the license file: ```LICENSE``` (no file extension)
> 3. Click **"Choose a license template"**
> 4. Select a license (e.g., **MIT License** for simple, permissive use)
> 5. GitHub will automatically fill in the text with the current year and our organization
> 6. Scroll down and **Commit new file**.
> 7. Your repository now has an official license that lets other legally use and share your work.

> For more information on licensing your repo, see [GitHub's official documentation](https://can01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fdocs.github.com%2Fen%2Frepositories%2Fmanaging-your-repositorys-settings-and-features%2Fcustomizing-your-repository%2Flicensing-a-repository&data=05%7C02%7Ciyaktubay%40iisd-ela.org%7C36b4f87e16ac4024f93408de37377ccc%7C01a20ec6cfd9471cb34bedc36161c3ce%7C0%7C0%7C639008908684459389%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=cdmjoNz8Z%2BwbCw0MGbWcQeFuhEsAAQ%2BM2HEngarFMEc%3D&reserved=0).

> ### Notes on .gitkeep
> The folders in this template each contain a file called ```.gitkeep```, which tells git to keep the empty folders in the repository (otherwise they get automatically excluded). You can safely delete ```.gitkeep``` once you add your own files to a folder.

## Getting Started
> ### Section To-Do:
> - [ ] Write a description on how to get started on your workflow
> - [ ] Delete all instructions text, including this to-do list

> ### Quick, simple browser-based file upload (recommended for inactive projects)
> If you only need a place to dump code, documents, or small example datasets, and you don't expect to update them often if at all, you can work entirely in the GitHub website. After creating your own repository from this template, you can upload files, delete or add folders, and edit the provided files directly in your browser. 

> ### Full version-controlled workflow (recommended for active projects)
> If you want to track changes, collaborate, and keep a full history of your project, you need a local, cloned copy of the repository you created using this template. You can use **Git** and a code editor like **VS Code** (the standard used by the IISD-ELA data team). With this setup, you can commit changes locally, then push them to GitHub. This allows you to undo mistakes, maintain multiple versions, and work safely with collaborators.

> ### Creating your own repository from this template
> To create your own repository from this template, simply follow the instructions on GitHub's official [documentation on using template repositories](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template#creating-a-repository-from-a-template). Once you have created your repository, you're ready to upload files, delete or add folders, and edit the template files (like this one) as needed.

## Any Additional Sections
> ### Section To-Do:
> - [ ] Add any other information on your repository as needed
> - [ ] Delete all instructions text, including this to-do list

## Contact
> ### Section To-Do:
> - [ ] Add your name and email address
> - [ ] Delete all instructions text, including this to-do list

> Idil Yaktubay  
> iyaktubay@iisd-ela.org, eladata@iisd.net  
IISD-ELA


