# Data Catalog - IISD-ELA datasets on public repositories

## Contents
1. [Purpose](#purpose)
2. [Repository Structure and Files](#repository-structure-and-files)
3. [Getting Started](#getting-started)
4. [Contact](#contact)

## Purpose
> The purpose of this repo is to serve as the source for a GitHub Pages (website) that is simply a table showing IISD-ELA datasets available on public repositories. For data users and the general public, all you really need is the resulting aesthetically rendered table. The rest of this GitHub is just behind-the-scenes content and information for internal staff to update the table.

## Repository Structure and Files

```
core-data-repos/
├── data/                         # data input (file contents ignored)
|   └── repo-pkgs-data.csv        # table of info that gets displayed
├── docs/                         # documentation
|   └── how-to-test.md            # for local testing of the web page
├── .gitignore                    # list of files for git to ignore
├── **index.html**                # the GitHub page content, in html
├── LICENSE                       # usage license
├── README.md                     # this file (orientation to the repo and big pic info)
├── **script.js**                 # javascript
└── **style.css**                 # css styling - colours, fonts, etc.

```

## Getting Started
To edit the table material (e.g. add a new repo package or URL), edit the CSV file (for location, see folder structure above)
- For hyperlinks, follow this format: label|url
- The text in each cell should always be in quotes, to ensure proper formatting in this context (not just when there are commas in a cell)
- The order should follow our standard data theme order - the ["our data" pages](https://www.iisd.org/ela/researchers/our-data/) are a good example

html, javascript, css:
- HTML to change the main things on the page (header, text, table)
- Javascript for interpreting formatting (e.g. hyperlinks as label|url)
- CSS for aesthetic formatting stuff

GitHub pages:
- This is done in your browser on GitHub, under the settings of this repository

Testing / how to see the table rendered:
- See notes in docs/how-to-test.md

## Contact
Chris Hay  
chay@iisd-ela.org  
IISD-ELA Scientific Data Manager  

otherwise: eladata@iisd-ela.org


