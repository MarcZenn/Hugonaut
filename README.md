# Web Application Static Front End Hugo Boilerplate

### Features

&nbsp; &nbsp; ✓ Modern JavaScript syntax, modern CSS syntax via [SASS](http://sass-lang.com/) & [Gulp](http://gulpjs.com/).<br>
&nbsp; &nbsp; ✓ Asset Cache-Busting <br>
&nbsp; &nbsp; ✓ Runs Anywhere, no need for admin privileges, databases, runtimes, interpreters or external libraries other than gulp.<br>
&nbsp; &nbsp; ✓ Can be deployed on S3, Github Pages, Dropbox or any web host.<br>
&nbsp; &nbsp; ✓ Fast - only milliseconds to build your entire site!<br>
&nbsp; &nbsp; ✓ Supports YAML, TOML, and JSON.<br>
&nbsp; &nbsp; ✓ Open Source & Free ([HMR](https://github.com/spf13/hugo)).<br>
&nbsp; &nbsp; ✓ Robust Documentation [gohugo.io](https://gohugo.io/overview/introduction/).<br>
&nbsp; &nbsp; ✓ **24/7** community support on [gohugo](https://discuss.gohugo.io/).<br>



### Getting Started

**Step 1**. If you have a MAC (preferably 64bit) download [Homebrew](http://brew.sh/) then run `brew install hugo`. If you have PC simply download the appropriate version from [here](https://github.com/spf13/hugo/releases).

**Step 2**. Update your $PATH. If you have a PC you will need too...If installed with Homebrew you should be good to go. You can run the command below to verify.

```shell
$ hugo help                # To test
```

**Step 3**. Clone this repository

**Step 4**. Install Gulp via npm

```shell
$ npm install                    
```

**Step 5**. Compile and build your static website by running:

```shell
$ hugo                           # From root.
```

**Step 6**. Serve your static website locally by running:

```shell
$ hugo server                    # From root.
```



### Directory Layout

```shell
.
├── README.md                           # Setup & Usage Overview
├── archetypes                          # Default structure for pages and blog posts
│   ├── default.md                      # Defines Page Structure for home
│   ├── landing.md                      # Defines Post Structure for "content/landing"
│   ├── post.md                         # Defines Post Structure for "content/post"
│   └── views.md                        # Defines Page Structure for "content/views"
├── config.toml                         # Site wide Configuration File
├── content                             # All of our text content
│   ├── post                            # Where you can write and manage blog post content
│   │   ├── first.md
│   │   ├── second.md
│   │   └── third.md
│   └── views                           # Where we write and manage our views content
│       ├── about.md
│       └── products.md
├── data                                # Our hashed data
│   ├── css
│   │   └── hash.json
│   ├── images
│   │   └── hash.json
│   └── js
│       └── hash.json
├── gulpfile.js
├── layouts
│   ├── _default                        # Where we write and manage our blog layouts
│   │   ├── list.html
│   │   └── single.html
│   ├── index.html
│   ├── partials                        # Markup partials
│   │   ├── ender.html
│   │   ├── footer.html
│   │   ├── header.html
│   │   └── nav.html
│   └── views                           # Where we write and manage our views layouts
│       └── single.html
├── package.json
├── public                              # Our output compile folder
├── src                                 # Our Gulp generated asset input folder
│   ├── images
│   ├── js
│   └── scss
│       ├── main.scss
│       ├── pages
│       │   ├── _about.scss
│       │   └── _home.scss
│       └── vendor
│           └── _bootstrap.scss
└── static                              # Our Gulp generated asset folder
    ├── css
    │   └── main-50fff5d4.css
    ├── images
    └── js
```

### Customizing Styles


### Building Views & Pages


### Creating, Writing, & Editing Blog Posts


### Site Wide Config Changes


### Incorporating & Using Themes
