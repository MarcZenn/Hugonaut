# Web Application Static Front End Hugo Boilerplate

### Features

&nbsp; &nbsp; ✓ Modern JavaScript syntax, modern CSS syntax via [SASS](http://sass-lang.com/) & [Gulp](http://gulpjs.com/).<br>
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
├── README.md                       # Setup & Usage Overview
├── archetypes                      # Default structure for pages and blog posts
│   ├── default.md                  # Defines Page Structure for "content/views"
│   └── post.md                     # Defines Post Structure for "content/post"
├── config.toml                     # Site wide Configuration File
├── content                         # All of our actual content excluding CSS, JS, images etc.
│   ├── post                        # Where we write and manage our blog posts
│   │   ├── first.md                
│   │   ├── second.md
│   │   └── third.md
│   └── views                       # Where we write and manage our site views
│       └── home.md
├── data
├── layouts                         # In lieu of a theme, defines our overall html layout.
│   └── index.html
├── public                          # Our output build folder
│   ├── index.html
│   ├── index.xml
│   ├── post
│   │   └── index.xml
│   ├── sitemap.xml
│   ├── tags
│   │   ├── index.xml
│   │   └── updates
│   │       └── index.xml
│   └── views
│       ├── home
│       │   └── index.html
│       ├── index.html
│       └── index.xml
└── static                            # All our non-content files i.e. images, CSS, scripts, pdf's
```

### Customizing Styles


### Building Views & Pages


### Creating, Writing, & Editing Blog Posts


### Site Wide Config Changes


### Incorporating & Using Themes
