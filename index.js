new Vue({
  el: '#app',
  components: {
    'carousel': VueCarousel.Carousel,
    'slide': VueCarousel.Slide
  },
  template: `<div>
              <carousel :autoplay="true"
                :autoplayHoverPause="true"
                :autoplayTimeout=4000
                :loop="true"
                :perPage=1
                :navigationEnabled="true"
                :paginationEnabled="true"
                paginationActiveColor="#42b983"
                paginationColor="#fff"
                easing="linear"
                :paginationSize=20>
                <slide>
                  <img src="https://raw.githubusercontent.com/bryanlampert/toronto-adventure/dev/docs/level01-2.png">
                  <span class="label">
                    Toronto Adventure Game - Final Project <div>
                    Phaser, Javascript, Heroku
                  </span>
                </slide>
                <slide>
                  <img src="https://raw.githubusercontent.com/bryanlampert/jungle-rails/master/docs/cart.png">
                  <span class="label">
                    Jungle <div>
                    Ruby on Rails, Rspec
                  </span>
                </slide>
                <slide>
                  <img src="https://raw.githubusercontent.com/bryanlampert/chatty-app/master/docs/Chat%20Screenshot.png">
                  <span class="label">
                    Chatty App <div>
                    React, Babel, Node, Sass, Webpack
                  </span>
                </slide>
                <slide>
                  <img src="https://raw.githubusercontent.com/mandysGit/LHL-midterm/master/docs/filter-resource.png">
                  <span class="label">
                    My Personal Syllabus - Midterm Group Project <div>
                    EJS, Express, Knex, Sass, PostgreSQL, Webshot
                  </span>
                </slide>
                <slide>
                  <img src="https://raw.githubusercontent.com/bryanlampert/tweeter/master/docs/main-page.png">
                  <span class="label">
                    Tweeter <div>
                    Express, Node, MongoDB, Sass
                  </span>
                </slide>
                <slide>
                  <img src="https://raw.githubusercontent.com/bryanlampert/tinyApp/master/docs/URLs-List-Page.png">
                  <span class="label">
                    TinyApp <div>
                    Express, Node, EJS
                  </span>
                </slide>
              </carousel>
            </div>`
});