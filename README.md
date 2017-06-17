[![Sass-cli logo](/assets/logo.png?raw=true)](https://ravid7000.github.io/sass-cli/)


# sass-cli
CLI tool for Sass/SCSS


### Installation

```sh
$ npm install -g @sass/cli
```

---



### Quick Start

The quickest way to get started with sass-cli is to utilize the executable `sass(1)` to generate an application as shown below:

Create the app:

```bash
$ sass-cli new foo
```

Create sass app:

```bash
$ sass-cli new foo --sass
```

---



Install dependencies:

```bash
$ npm install
```

---



### Compile your styles:

```bash
$ npm start
```

```bash
$ grunt watch
```

### Generate component:

```bash
$ sass-cli g foo
```

---



### Command Line Options

This cli can also be further configured with the following command line flags.

    -h, --help          output usage information
        --version       output the version number
        new [value]     create new sass/scss project
    -s, --sass          use sass stylesheet (defaults to scss)
    -u, --unit          specify units (px|em|rem) (defaults to px)
    g,  generate        generate component
    -f, --force         force on non-empty directory

### License

[MIT](LICENSE)

