[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Nozama-Client

An ecommerce site specializing in all the things people want:
  -Men's luxury watches
  -Books
  -Women's Apparel
  -Meat

The site has user authentication and four products pages for each type of product.  Upon sign in, a user gets an empty cart created.  They can add and remove any items from the cart and proceed to a checkout form.  The checkout form has error handling for unfilled fields, bad credit cards, etc.  Once an order is submitted, the cart for that order is deleted and a new one is created.  So the carts are unique to each order and a user can never have more than one active.

The UI was built using bootstrap and the products were displayed on the page using Handlebars.  In addition, the item profiles and the shopping cart are based on templates from codepen io.

TEAM FJORD - can we add to this?
# Contributors:
  -Deirdre Forte
  -Jon Cohen
  -Ryan Ongchoa
  -Alan Henderson

# URLs
- Client
  - Repo: https://github.com/jscohen/nozama-client-redo
  - Deployed: https://jscohen.github.io/nozama-client-redo/#
- Backend (API)
  - Repo: https://github.com/jscohen/nozama-api-redo
  - Deployed: https://nozama-api-redo.herokuapp.com/

# Design
- ERD, Schema and User Stories https://git.generalassemb.ly/ga-wdi-boston/team-project/files/44/ERD.USER.docx
- Wireframes:
--Landing - https://git.generalassemb.ly/storage/user/5717/files/e28eb522-3980-11e7-885b-d57e27d4f867
--Landing to Show Products - https://git.generalassemb.ly/storage/user/5717/files/86be3e32-3982-11e7-93c5-7ffd0d4c0fdd
--Landing Show Products to Cart - https://git.generalassemb.ly/storage/user/5717/files/dd38e0fc-3980-11e7-826b-ab57ed755eaf
--Cart to Orders - https://git.generalassemb.ly/storage/user/5717/files/e5ed8b58-3980-11e7-9666-b9998ce28f66
--Orders to Order History - https://git.generalassemb.ly/storage/user/5717/files/83426710-3982-11e7-8773-5de649ed7105

# Reflections and Lessons Learned
What went well and what could have gone better:

-Deirdre Forte:
This was a great team experience. Overall, the lesson learned over and over again is the importance of planning.  Two of my main concerns was the how four contributors would be able to "git push" without merge conflicts and the complexity of having three collections in addition to users.  Establishing a good git procedure and comprehensive ERD these were never issues.  I also learned the value of peer programming.   I peer programmed with each team member.  In addition to learning new coding skills from each, it also made it easier to understand other's code.  My team members rock!

-Jon Cohen:
I think having a team made the project much easier.  We didn't have much trouble with merge conflicts and were able to stay on top of what everyone was doing.  In addition, the team's varied skillsets made the product better.  I'm very happy with the UI, which is not really my strength, and the back end.  When it came to API work I felt more comfortable and our team's individual strengths complemented each other.

I struggled a bit with the back end and express.  Our team, particularly me, had difficulty implementing some back end changes meaning that we could not create the ability to change the quantity of the products in the cart.

I'd like to second what Dee Dee said about peer programming.  I also learned to love peer programming and got a lot out of it, especially following team members doing work in areas I'm less strong in.  I also had a great experience on this project.  Go team Fjord!

-Ryan Ongchoa
I enjoy working with a team!  Was a little scared in regards on how to manage the work with GIT etc.  But luckly Alan help us all with writen
documentations for it on the day we started our projects and were able to get past most of the project without any issues.  The teamwork and members in our group was great!  Able to peer program with everyone in our group and each person brings a skill set that is different then my own.  I was able to learn alot from the interactions with peer programing.  I was a little intimidate at the start of this project since I did not want to hold my team back.  But after getting started that feeling soon went away.  Everyone member in my group is great and would love to work with any of them in the future.  PINING FOR THE FJORDS!

-Alan Henderson
This was a great team and a fun project. I think Building an online storefront was more complicated than any of us thought but we got through it. Every member of this team had something unique to bring to the table. We pair programmed through some of the more complicated functionality which I think helped us all learn more about it as we went.
Working with Stripe was interesting. It was good experience to work with a third party API like this.
We weren't able to get in all of the functionality we wanted, but I am very proud of the site we built and how we worked as a team. The parrot may have ceased to be, but the FJORD legacy lives on.

## Dependencies

Install with `npm install`.

-   [Webpack](https://webpack.github.io)
-   [Bootstrap](http://getbootstrap.com)
-   [Handlebars.js](http://handlebarsjs.com)
-   [Stripe.js](http://stripe.com)


## Installation

1.  Install dependencies with `npm install`.

## Structure

Dependencies are stored in [`package.json`](package.json).

Do not configure `grunt` packages directly in the
[`Gruntfile.js`](Gruntfile.js). Instead, store configurations in the
[`grunt`](grunt) directory. You won't need a top-level key, since that's
generated by the `Gruntfile.js` based on the filename of the configuration
object stored in the `grunt` directory.

Developers should store JavaScript files in [`assets/scripts`](assets/scripts).
The "manifest" or entry-point is
[`assets/scripts/index.js`](assets/scripts/index.js). In general, only
application initialization goes in this file. It's normal for developers to
start putting all code in this file, but encourage them to break out different
responsibilities and use the `require` syntax put references where they're
needed.

Developers should set `config.apiOrigins.production` (and
`config.apiOrigins.development` if it differs from the default).  With
`apiOrigins` set, developers may rely on `config.apiOrigin` as the base for API
URLs.

Developers should store styles in [`assets/styles`](assets/styles) and load them
from [`assets/styles/index.scss`](assets/styles/index.scss).

Developers should use [getFormFields](forms.md) to retrieve form data to send to
an API.

To deploy a browser-template based SPA, run `grunt deploy`.

## Tasks

Developers should run these often!

-   `grunt nag` or just `grunt`: runs code quality analysis tools on your code
    and complains
-   `grunt reformat`: reformats all your code in a standard style
-   `grunt <server|serve|s>`: generates bundles, watches, and livereloads
-   `grunt test`: runs any automated tests, depends on `grunt build`
-   `grunt build`: place bundled styles and scripts where `index.html` can find
    them

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
