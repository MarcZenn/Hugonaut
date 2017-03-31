# Introducing Hugonaut - A Simple Hugo Static Website Engine Framework

### Features

&nbsp; &nbsp; ✓ Free & Open-Sourced.<br>
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
$ hugo server --port 1313         # And visiting localhost:1313
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
├── aws.json                            # Our AWS Deployment Credentials
├── content                             # All of our text content
│   ├── post                            # Where you can write and manage blog post content
│   │   ├── blogpost.md                 # Example blog post
│   │   ├── blogpost.md                 # Example blog post
│   │   └── .....
│   └── views                           # Where we write and manage our view's Markdown content
│       ├── about.md                    # about page copy file written in Markdown
│       └── contact.md                  # product page copy file written in Markdown
│       └── .....
├── data                                # Our dynamically injected styles & scripts in JSON format
│   ├── css
│   │   └── hash.json
│   └── js
│       └── hash.json
├── gulpfile.js                         # compiles our assets and creates our JSON hashes.
├── layouts                             # Markup layout templates
│   ├── _default                        # blog markup templates
│   │   ├── list.html                   # entire blog list template
│   │   └── single.html                 # single blog post template
│   ├── index.html                      # our home page.
│   ├── partials                        
│   │   ├── ender.html
│   │   ├── footer.html
│   │   ├── header.html
│   │   └── nav.html
│   │   └── .....
│   ├── shortcodes                      # Shortcodes lend HTML5 structure to our Markdown copy
│   │   ├── about.html
│   │   ├── contact.html
│   │   ├── .....
│   └── views                           
│       └── single.html                 # Single view acting as our SPA root anchor beyond home page
├── package.json
├── public                              # Our Gulp output compile folder
├── src                                 # Our Gulp generated asset input
│   ├── images
│   ├── js
│       └── external
│          └── _material.js            # Using Google's material-design-lite for gridding etc.
│   └── scss
│       ├── main.scss
│       ├── pages
│       └── vendor
│           └── _material.min.css       # Using Google's material-design-lite for gridding etc.
└── static                              # Our Gulp generated asset output
    ├── css
    │   └── hashfile
    ├── images
    └── js
```

### Hashed Styles &amp; Scripts

In order to preprocess and manage our styles and scripts we are utilizing Gulp and Hugo data.

Essentially Gulp will pipe and hash our assets then inject each one into our `~/data/css` or `./data/js` directories as JSON. We can then access this JSON for a non-cached version of our latest css and javascript which we can inject via Hugo's built in site variables declared in our header element:

`{{index .Site.Data.css.hashcss "main.css"}}"`<br/>
`{{index .Site.Data.js.hashjs "main.js"}}"`

see `layouts/partials/header`.

### Updating &amp; Editing Content VS Updating &amp; Editing Styles &amp; Scripts

When developing, depending on what you are editing or writing, you will need to follow the appropriate workflow.

#### Writing or Updating Markup &amp; Markdown

To hotload and refresh localhost when writing/editing Markdown, (which is what our written content is written in), or Markup, (which dictates the structure of our written content aka HTML), first run `gulp` to build our public folder then run `hugo server --watch --port 1313` in order to fire up your local server on port 1313.

Its important to note that if you want to update Markdown content you must go to the `~/content/views/` directory and edit the appropriate .md file semantically named after the view it represents. If you want to edit the HTML structure of that written content you must go to the `~/layouts/shortcodes/` and edit the appropriate HTML file.

#### Writing or Updating CSS &amp; Scripts

To hotload and refresh localhost when writing/editing CSS or Javascript first run `gulp` to build our public folder then in a separate terminal window run `gulp watch` which will automatically run `hugo server --port 1313` for you.

### Creating, Writing, & Editing Blog Posts

To create a new blog post open your terminal, make sure you are at the root of this project repo and run `hugo new post/blogpostname.md` using the name of the blog post you'd like to write.

After running this command you will notice a new .md file under the `content/post/` directory. Open it and start writing!!

If you need to brush up your Markdown syntax you can use this [Cheat Sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) for help.

### View Routes

Every view declares its own route in the front-matter of its Markdown file, `~/content/views/example.md`. For more information visit https://gohugo.io/content/organization#url

### Site Wide Config Changes

This project relies on a .TOML for sitewide configurations. In that file you can configure your Google fonts, Google Analytics Id, Your base url and blog tags.

### Amazon Deployment

#### AWS S3 Static Website Hosting Setup

First you're going to need an Amazon Web Services account. AWS S3 is the recommended tool for hosting a static Hugo site. You can sign up here for an [Amazon AWS](https://aws.amazon.com/) account.

Next you will need to create a bucket. Your bucket name must be unique across all of S3. For more details on how to do this please visit this [guide](http://docs.aws.amazon.com/AmazonS3/latest/dev/walkthrough1.html#walkthrough1-create-bucket).

Once you have a bucket you will need to give it a bucket policy so that it is publicly available. For more details on what this is and how to implement one please visit this [guide](http://docs.aws.amazon.com/AmazonS3/latest/dev/example-bucket-policies.html). You will also need to configure your bucket for static website hosting. To do this follow this [instructions](http://docs.aws.amazon.com/AmazonS3/latest/user-guide/static-website-hosting.html).

To deploy using gulp you will need to create an IAM group and add users to that group within your AWS account. You can read a how-to guide on the process [here](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html).

To learn more about hosting a static website on Amazon Web Services and details on the steps mentioned above you can visit these [docs](http://docs.aws.amazon.com/gettingstarted/latest/swh/website-hosting-intro.html).

#### Deployment with Gulp

When you create IAM users within your AWS account you will be given a key and a secret. With these you will need to open the `~/aws.json` file and fill in the missing values for your key, secret and bucket name.

Download [gulp-awspublish](https://www.npmjs.com/package/gulp-awspublish) via `npm install gulp-awspublish --save-dev`.

To publish with gulp via the Terminal you will run a custom gulp task called 'publish' inside our gulpfile. To run this task run the command `gulp publish` in your terminal. This should build your `~/public` folder and deploy it to your AWS S3 bucket.

#### Deployment with Amazon CLI & Cloudfront

An alternate deployment is with Amazon &amp; Cloudfront.

For a comprehensive guide on setting up and hosting a Hugo static website on AWS S3 please refer to the following [instructions](https://lustforge.com/2016/02/27/hosting-hugo-on-aws/)

### Incorporating & Using Themes

For a comprehensive guide on setting up pre-built style themes please refer to the following [Hugo Documentation](https://gohugo.io/themes/overview/).
