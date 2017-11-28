module.exports = {
  blogPostDir: "sample-posts", // The name of directory that contains your posts.
  siteTitle: "McCarthy.Vision", // Site title.
  siteTitleAlt: "McCarthy Vision", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "mccarthy.vision", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "The Portfolio of Brendan McCarthy.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteGATrackingID: "UA-97415716-1", // Tracking code ID for google analytics.
  postDefaultCategoryID: "Film", // Default category for posts.
  userName: "Brendan", // Username to display in the author segment.
  userVimeo: "https://www.vimeo.com/mccarthyvision", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Nyc, New York", // User location to display in the author segment.
  userAvatar: "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/17022207_10154899517005993_553906766744097461_n.jpg?oh=b066952f8bf7b793317e2735584be19d&oe=5AA348EB", // User avatar to display in the author segment.
  userDescription:
     // User description to display in the author segment.
    "I'm a NYC-based moving image creator. I grew up in rural Groton, Masachusetts and on the island of Oahu, Hawaii- A contrast that provided me with a unique perspective and voice. I'm a graduate of the Massachusetts College of Art and Design, which I credit with showing me the full scope and potential for moving image work. After four years in Boston, I returned to Oahu where I spent three years honing my craft as a cameraperson for Isle Media. Now I'm back on the East Coast, pursuing my vision of creative image making.",
    // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "Instagram",
      url: "https://instagram.com/mccarthyvision",
      iconClassName: "fa fa-instagram"
    },
    {
      label: "Vimeo",
      url: "https://vimeo.com/mccarthyvision",
      iconClassName: "fa fa-vimeo"
    },
    {
      label: "Linkedin",
      url: "https://www.linkedin.com/in/brendan-mccarthy-a45491132/",
      iconClassName: "fa fa-linkedin"
    },
    {
      label: "Email",
      url: "mailto:brendan@mccarthy.vision",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2017. Brendan McCarthy" // Copyright string for the footer of the website and RSS feed.
};
