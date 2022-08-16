# Simple web-frontend application with bare hands
:notebook: **Conspectus and case study**   
:zero: *--- Beginner friendly ---*

:arrow_right: на русском [README-RU.md]

:computer: ***Embrace the frontend web-developer way: bare handed, knowledgeless, but open minded!***

**Creating** a simple web-application "Hello World!" using standard means of an operating system.  
**Used technologies** - frontend developer's basic set: *HTML*, *CSS*, *JavaScript*.  

© 2022 Dr. Nord 

### License conditions

- The exclusive copyright owner of the content, that is published in the files [README.md] and [README-RU.md], is Dr. Nord, you are allowed to use it for personal non-commercial purposes, see [LICENSE-DN.txt] for details.

- The tutorial web-application ["Hello World!"][HW-web-app] (rus. ""Привет, Мир!") as a structured totality of files:
  ```
  css\main.css
  js\main.js
  index.html
  index-ru.html
  ```
  is published under the free [BSD Zero Clause][L-0BSD] License.

## Table of contents

<details>
  <summary></summary>

  - [Prerequisites](#prerequisites)
  - [Project structure preparation](#structure)
  - [Project files preparation](#files-prep)
  - [Layout and programming](#development)
  - [Discussion](#discussion)
  - [Authorship and contacts](#author-contacts)
</details>

## <a name=prerequisites /> Prerequisites

**Knowledge:**
  - Basic:
    - elementary computer architecture (desirable at least to understand what the hardware and software are);
     - file systems (enough to know of their existence and purpose).
  - Additional:
    - English at the beginner level - A1 according to the [Common European Framework of Reference for Languages][cefr]. 

**Skills:**
  - Basic:
    - turn on a computer and run programs;
    - use a keyboard, type text;
    - create files and folders.
  - Additional:
    - type text with a blind ten-finger method;
    - use a file manager;
    - Read and write in English.

**Equipment:**
  - Basic:
    - A computer (notebook) with an installed operating system and standard programs package, including:
      - file manager (File Explorer);
      - text editor (Notepad);
      - browser (Internet Explorer);
      - command line interface (console, terminal).
  - Additional:
    - :tea: a cup of tea.
  
*Unlikely to find an operating system without a terminal :wink:*

It is assumed that you are using the Windows 10 operating system. However, you can use any other operating system with the necessary software package, including those installed by yourself.

*You will also need to be in a good mood and have a burning desire to work!*

## <a name=structure /> Project structure preparation

Turn on your computer and start File Explorer.  
Navigate to a location that is convenient for you, for example, ```C:\Users\<Your_username>\```.  
Create a folder (directory) ```projects``` to store this and other projects, inside it create a folder with the name of the project, for example, ```web-frontend-barehanded```.  
It is recommended to use **only latin characters, numbers, hyphen ```-``` and underscore ```_```**. You can also use a dot ```.``` if needed, however, be aware that the last dot in the filename will separate the filename from its extension. Hereinafter the path to the project files ```C:\Users\<Your_username>\projects\web-frontend-barehanded``` we will name as ```<project_path>```.

In the project folder, create the following folders:
- ```css``` for style files;
- ```js``` for script files in JavaScript;
- ```img``` for image files (not required in this project).

**Self-study task:** create a project structure via terminal.  
To launch a terminal:
  - press a combination ```Win + R```;
  - in the launch line type ```cmd```;
  - and hit enter.
The terminal will start and you will see a blinking cursor to the right of the triangular bracket (the "greater than" sign): ```>_```, now the terminal is ready to receive commands:
- you can create a folder with the command ```> mkdir <folder_name>```;
- you can enter the created folder or move one level higher using the commands respectively ```> cd <folder_name>``` or ```> cd ..```.

## <a name=files-prep /> Project files preparation

Launch Notepad and create the following files in the given locations (via menu File -> New Window -> Save As):
- ```<project_path>\index.html``` - HTML-page, a text part you can type in your native language;
- ```<project_path>\css\main.css``` - CSS-styles;
- ```<project_path>\js\main.js``` - scripts in JavaScript.  
Optionally you can create an additional HTML-page to display text in any other language (see the example).

When saving files, make sure the UTF-8 encoding is selected, which allows usage of characters of the [UNICODE][unicode] standard, which includes signs of almost all written languages of our planet, as well as a wide variety of other symbols. If for some reason you decide to use a different encoding, then you need to specify an appropriate [standard IANA MIME name for characher encoding][iana-mime].  

**Self-study task:**
- launch notepad via terminal with the command: ```> notepad```; 
- open File Explorer in a desired folder via terminal: ```> explorer <project_path>```.

## <a name=development /> Layout and programming

Fill in the files created in the previous step.  
It is recommended to manually type the contents of the files, for your convenience, you can open an example on the left side of the screen and one of your empty files on the right side of the screen.  
First, lay out the web page - ```index.html```.  
Don't forget to specify the language tag according to [the BCP47 standard "Tags for Identifying Languages"][bcp47]. To form it properly, use the recommended resource for [identifying a language tag in BCP47 format][bcp47-helper].  
Launch your browser and see what happens. Make sure you get what you expect.  
Next, using the example, design the styles (in the file ```main.css```) and program the dynamic component of your page (in the file ```main.js```).  
Don't forget to include these files in your web-page (in the file ```index.html```).  
Refresh the page in a browser and evaluate the result.  
Additionally, if you want to translate the page into another language, make a copy of the file ```index.html```, add a suffix with the abbreviated name of the language to the file name and translate the displayed content. Don't forget to change the language tag of the new html-document as well.   
Check the result.  
:warning: If something does not work as intended - check the example and fix errors.  
:white_check_mark: If everything worked out - my congratulations, you have just succeeded in the difficult task of front-end development!

## <a name=discussion /> Discussion

Main result:
- created a web page with elements of dynamically changing content;
- only standard operating system tools were used.

What is positive:
- tried the basic technologies of web front-end development in action, assessed your predisposition to this profession;
- and managed to get the result without clogging the system with extra programs.

Revealed issues:
- the need to manually perform routine actions: refreshing the browser page to display changes, formatting the source code;
- obsolete and inefficient multilingual support technology.

Future work:
  - Basic:
    - selection of necessary developer tools;
    - installation of a local server for result checking;
    - real-time preview setting;
    - publication of the page in the public domain.
  - Additional:
    - version control;
    - digital signature usage;
    - password manager mastering.
    
## <a name=author-contacts /> Authorship and contacts
***Alexander Nord***, aka ***"Dr. Nord"*** - Doctor of Engineering Sciences, Professor:
- scientific research and academic supervising;
- training individually and in groups;
- design and development;
- preparation of training courses (general, specialized, individual).  
*Nothing's impossible!*

:e-mail: <nordexium@gmail.com> - **write** a letter or...  
:octocat: https://drnord.github.io - **explore** other Dr. Nord's resources and **use** alternative means of **communication**.

[README.md]: README.md
[README-RU.md]: README-RU.md

[LICENSE-DN.txt]: LICENSE-DN.txt
[L-0BSD]: LICENSE-0BSD.txt

[HW-web-app]: https://drnord.github.io/web-frontend-barehanded

[cefr]: https://tracktest.eu/english-levels-cefr/
[iana-mime]: https://www.iana.org/assignments/character-sets/character-sets.xhtml
[unicode]: https://home.unicode.org/
[bcp47]: https://www.ietf.org/rfc/bcp/bcp47.txt
[bcp47-helper]: https://r12a.github.io/app-subtags/
