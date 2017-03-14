# Hugo Static Front-End Boilerplate

### Features

&nbsp; &nbsp; ✓ Modern JavaScript syntax.<br>
&nbsp; &nbsp; ✓ Modern cache-busting, asset compiling & SCSS syntax via [SASS](http://sass-lang.com/) & [Gulp](http://gulpjs.com/).<br>
&nbsp; &nbsp; ✓ Runs Anywhere, no need for admin privileges, databases, runtimes or interpreters.<br>
&nbsp; &nbsp; ✓ Can be deployed on Amazon S3, Github Pages, Dropbox or any web host.<br>
&nbsp; &nbsp; ✓ Fast - only milliseconds to build your entire site!<br>
&nbsp; &nbsp; ✓ Supports YAML, TOML, and JSON.<br>
&nbsp; &nbsp; ✓ Open Source & Free ([HMR](https://github.com/spf13/hugo)).<br>
&nbsp; &nbsp; ✓ Robust Documentation [gohugo.io](https://gohugo.io/overview/introduction/).<br>
&nbsp; &nbsp; ✓ **24/7** Community support on [gohugo](https://discuss.gohugo.io/).<br>



### Getting Started

**Step 1**. First you need to install Hugo. Fortunately, installation is very easy. Simply download the appropriate version for your platform from [Hugo Releases](https://github.com/spf13/hugo/releases). Once downloaded it can be run from anywhere. You don’t need to install it into a global location. This works well for shared hosts and other systems where you don’t have a privileged account.

Ideally, you should install it somewhere in your `PATH` for easy use. `/usr/local/bin` is the most probable location.

On OSX, if you have [Homebrew](http://brew.sh/), installation is even easier: just run `brew update` && `brew install hugo`.

For a more detailed explanation on how to install Hugo follow the corresponding installation guides:<br>
&nbsp; &nbsp; [Installation on OSX](https://gohugo.io/tutorials/installing-on-mac/)<br>
&nbsp; &nbsp; [Installation on Windows](https://gohugo.io/tutorials/installing-on-windows/)

To upgrade Hugo download and replace the executable you’ve placed in your `PATH`.

**Step 2**. Pull down and clone this repository

**Step 3**. Install our dev dependencies by running.

```shell
$ npm install                    # From root.
```

**Step 5**. Compile and build your static assets by running `gulp` in the terminal followed by:

```shell
$ hugo                           
```

**Step 6**. Serve your static website locally by running:

```shell
$ hugo server --port 1313         # And visiting http://localhost:1313
```



### Directory Layout

```shell
.
├── README.md                           # Setup & Usage Overview
├── archetypes                          # Default structure for pages and blog posts
│   ├── default.md                      # Defines Page Structure for home
│   ├── landing.md                      # Defines Post Structure for "content/landing"
│   ├── post.md                         # Defines Post Structure for "content/post"
├── config.toml                         # Site wide Configuration File
├── content                             # All of our text content
│   ├── post                            # Where you can write and manage blog post content
│   │   ├── first.md                    # Example blog post
│   │   ├── second.md                   # Example blog post
│   │   └── .....
│   └── views                           # Where we write and manage our view's Markdown content
│       ├── about.md                    # about page copy file written in Markdown
│       └── products.md                 # product page copy file written in Markdown
│       └── .....
├── data                                # Our dynamically injected styles & scripts in JSON format
│   ├── css
│   │   └── hash.json
│   └── js
│       └── hash.json
├── gulpfile.js
├── layouts                             # Markup layout templates
│   ├── _default                        # blog markup templates
│   │   ├── list.html                   # blog list template
│   │   └── single.html                 # single blog post template
│   ├── index.html
│   ├── partials                        
│   │   ├── ender.html
│   │   ├── footer.html
│   │   ├── header.html
│   │   └── nav.html
│   ├── shortcodes                      # Shortcodes lend HTML5 structure to our Markdown copy
│   │   ├── about.html
│   │   ├── contact.html
│   │   ├── .....
│   └── views                           
│       └── single.html                 # Single view acting as our SPA root anchor.
├── package.json
├── public                              # Our Gulp output compile folder
├── src                                 # Our Gulp generated asset input
│   ├── images
│   ├── js
│   └── scss
│       ├── main.scss
│       ├── pages
│       │   ├── _about.scss
│       │   └── _home.scss
│       └── vendor
│           └── _bootstrap.scss
└── static                              # Our Gulp generated asset output
    ├── css
    │   └── main-50fff5d4.css
    ├── images
    └── js
```
### Building and Editing Content Versus Styles

When developing, depending on what you are writing, you will need to follow the appropriate workflow.

When coding Markdown, (which is what our written content is written in), or Markup, (which dictates the structure of our written content), first run `hugo server --watch --port 1313` in order to fire up your local server and live reload your edits.

If you want to edit the Markdown content go to the `~/content/views' directory and edit the appropriate .md file semantically named after the view it represents. If you want to edit the HTML structure of that written content, go to the `~/layouts/shortcodes` and edit the appropriate HTML file.

In order to preprocess and manage our styles and scripts we're depending on Gulp to pipe and hash our assets and inject them into our `~/data` directory as JSON. When editing styles or scripts you will need to first run `gulp` in your command line, then `hugo` to build our `~/public` serve directory and `hugo server --port 1313` to view changes.

### Creating, Writing, & Editing Blog Posts

### View Routes

Every view declares its own route in the front-matter of its Markdown file, `~/content/views/example.md`. For more information visit https://gohugo.io/content/organization#url

### Site Wide Config Changes

### Incorporating & Using Themes

### Amazon S3 Deployment
