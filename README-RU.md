# Простое веб-фронтенд приложение голыми руками
:notebook: **Конспект и учебный пример**   
:zero: *--- Для начинающих с нуля ---*

:arrow_right: in english [README.md]

:computer: ***Встань на путь веб-фронтенд разработчика: с голыми руками, без знаний, но с открытым разумом!***

**Создание** несложного сетевого приложения "Привет, Мир!" стандартными средствами операционной системы.  
**Используемые технологии** - базовый набор разработчика клиентской части: *HTML*, *CSS*, *JavaScript*.  

© Д-р Норд, 2022 

### Лицензионные условия

- Исключительное право на содержимое, опубликованное в файлах [README.md] и [README-RU.md], принадлежит Доктору Норду, разрешается использовать его в личных некоммерческих целях, подробности изложены в файле [LICENSE-DN.txt].

- Учебное веб-приложение ["Привет, Мир!"][HW-web-app] (англ. "Hello World!") в виде структурированной совокупности файлов:
  ```
  css\main.css
  js\main.js
  index.html
  index-ru.html
  ```
  опубликовано под лицензией [BSD Zero Clause][L-0BSD] для свободного использования.

## Содержание

<details>
  <summary></summary>

  - [Предварительные условия](#prerequisites)
  - [Подготовка структуры проекта](#structure)
  - [Подготовка файлов проекта](#files-prep)
  - [Вёрстка и программирование](#development)
  - [Обсуждение](#discussion)
  - [Авторство и контакты](#author-contacts)
</details>

## <a name=prerequisites /> Предварительные условия

**Знания:**
  - Основные:
    - элементарное устройство компьютера (желательно хотя бы понимать, что такое аппаратная (железо) и программная (софт) части);
    - файловые системы (достаточно знать, что они существуют и для чего предназначены).
  - Дополнительные:
    - английский язык на уровне начинающего - A1 по [Общеевропейской системе компетенций владения иностранным языком][cefr]. 

**Умения:**
  - Основные:
    - включать компьютер и запускать программы;
    - пользоваться клавиатурой, набирать текст;
    - создавать файлы и папки.
  - Дополнительные:
    - набирать текст слепым десятипальцевым методом;
    - пользоваться файловым менеджером;
    - читать и писать на англ. языке.

**Оборудование:**
  - Основное:
    - Компьютер (ноутбук) с установленной операционной системой и входящими в стандартный пакет программами, среди которых:
      - файловый менеджер (проводник);
      - текстовый редактор (блокнот);
      - интернет-обозреватель (браузер);
      - интерфейс командной строки (консоль, терминал).
  - Дополнительное:
    - :tea: чашечка с чаем.
  
*Вряд ли вы найдёте операционную систему, не снабжённую терминалом :wink:*

Предполагается, что используется операционная система Windows 10. Тем не менее, вы можете использовать любую другую операционную систему с необходимым пакетом программ, в том числе установленных самостоятельно.

*Также вам обязательно понадобится хорошее настроение и желание потрудиться!*

## <a name=structure /> Подготовка структуры проекта

Включите компьютер и запустите Проводник.  
Перейдите в удобное для вас расположение, например, ```C:\Users\<Your_username>\```.  
Создайте папку (каталог, директорию) ```projects``` для хранения этого и других ваших проектов, в ней создайте папку с названием проекта, например, ```web-frontend-barehanded```.  
Рекомендуется использовать **только латинские символы, цифры, дефис ```-``` и символ подчёркивания ```_```**. При необходимости вы можете также использовать точку ```.```, однако следует помнить, что последняя точка в имени файла будет отделять имя файла от его расширения. Далее путь к файлам проекта ```C:\Users\<Your_username>\projects\web-frontend-barehanded``` будем обозначать ```<project_path>```.

В папке проекта создайте такие папки:
- ```css``` для файлов со стилями;
- ```js``` для файлов сценариев на языке JavaScript;
- ```img``` для файлов с изображениями (в данном проекте не потребуется).

**Задание для самостоятельно проработки:** создайте структуру проекта через терминал.  
Для запуска терминала:
  - нажмите комбинацию ```Win + R```;
  - в строке запуска наберите ```cmd```;
  - и нажмите ввод.
Запустится терминал и вы увидите мигающий курсор справа от треугольной скобки (знака "больше"): ```>_```, терминал готов принимать команды:
- создать папку можно командой ```> mkdir <folder_name>```;
- войти в созданную папку или выйти на уровень выше можно с помощью команд соответственно ```> cd <folder_name>``` или ```> cd ..```.

## <a name=files-prep /> Подготовка файлов проекта

Запустите Блокнот и создайте в заданных расположениях такие файлы (через меню File -> New Window -> Save As):
- ```<project_path>\index.html``` - HTML-страница, текстовую часть вы можете оформить на вашем родном языке;
- ```<project_path>\css\main.css``` - CSS-стили;
- ```<project_path>\js\main.js``` - сценарий на языке JavaScript.  
Дополнительно вы можете создать ещё одну HTML-страницу для отображения текста на любом другом языке (смотрите образец).

При сохранении файлов убедитесь, что выбрана кодировка UTF-8, которая позволяет использовать символы стандарта [UNICODE][unicode], включающего в себя знаки почти всех письменных языков нашей планеты, а также большое разнообразие других символов. Если по каким-то причинам вы решили использовать другую кодировку, то указывать нужно соответствующее [стандартное название IANA MIME для кодировок символов][iana-mime].  

**Задание для самостоятельно проработки:**
- запустите Блокнот через терминал с помощью команды: ```> notepad```; 
- откройте Проводник в нужной папке через терминал: ```> explorer <project_path>```.

## <a name=development /> Вёрстка и программирование

Наполните содержимым файлы, созданные на предыдущем этапе.  
Рекомендуется содержимое файлов набирать вручную самостоятельно, для вашего удобства вы можете в левой части экрана открыть образец, а в правой части экрана - один из ваших пустых файлов.  
Сначала сверстайте веб-страницу - ```index.html```.  
Не забудьте указать языковой тег в соответствии со [стандартом BCP47 "Теги для определения языка"][bcp47]. Чтобы правильно его сформировать, используйте рекомендуемый ресурс для [определения языкового тега в формате BCP47][bcp47-helper].  
Запустите браузер и посмотрите что получилось. Убедитесь, что вы получили то, что ожидали.  
Далее, пользуясь образцами, оформите стили (в файле ```main.css```) и запрограммируйте динамическую составляющую вашей страницы (в файле ```main.js```).  
Не забудьте подключить эти файлы к вашей веб-странице (в файле ```index.html```).  
Обновите страницу в браузере и оцените полученный результат.  
Дополнительно, если желаете оформить перевод страницы на другой язык, сделайте копию файла ```index.html```, к имени файла добавьте суффикс с сокращённым названием языка и выполните перевод отображаемого содержимого. Не забудьте изменить и языковой тег нового html-документа.   
Проверьте полученный результат.  
:warning: Если что-то не работает как задумано - сверьтесь с образцом и устраните ошибки.  
:white_check_mark: Если всё получилось - ваc можно поздравить с первым успехом в нелёгком деле фронтенд разработки!

## <a name=discussion /> Обсуждение

Основной результат:
- создана веб-страница с элементами динамически изменяющегося содержимого;
- использовались только стандартные средства операционной системы.

В чём позитив:
- попробовали в действии базовые технологии веб-фронтенд разработки, оценили вашу предрасположенность к этой профессии;
- при этом обошлись без засорения системы лишними программами.

Вскрытые проблемы:
- необходимость выполнения вручную рутинных действий: обновление страницы браузера для отображения изменений, форматирование исходного кода;
- устаревшая и неэффективная технология многоязыковой поддержки.

Задачи на будущее:
  - Основные:
    - подбор необходимых инструментов разработчика;
    - установка локального сервера для проверки результатов;
    - настройка предварительного просмотра в реальном времени;
    - публикация страницы в открытом доступе.
  - Дополнительные:
    - управление версиями;
    - использование цифровой подписи;
    - освоение менеджера паролей.
    
## <a name=author-contacts /> Авторство и контакты

***Александр Норд***, также известный как ***"Д-р Норд"*** - доктор технических наук, профессор:
- научные исследования и научное руководство;
- обучение индивидуально и в группах;
- проектирование и разработка;
- подготовка учебных курсов (общеобразовательных, узкоспециализированных, индивидуальных).  
*Нет ничего невозможного!*

:e-mail: <nordexium@gmail.com> - **напишите** письмо или...  
:octocat: https://drnord.github.io - **изучите** другие ресурсы Доктора Норда и **воспользуйтесь** альтернативными **средствами связи**.

[README.md]: README.md
[README-RU.md]: README-RU.md

[LICENSE-DN.txt]: LICENSE-DN.txt
[L-0BSD]: LICENSE-0BSD.txt

[HW-web-app]: https://drnord.github.io/web-frontend-barehanded/index-ru.html

[cefr]: https://tracktest.eu/english-levels-cefr/
[iana-mime]: https://www.iana.org/assignments/character-sets/character-sets.xhtml
[unicode]: https://home.unicode.org/
[bcp47]: https://www.ietf.org/rfc/bcp/bcp47.txt
[bcp47-helper]: https://r12a.github.io/app-subtags/