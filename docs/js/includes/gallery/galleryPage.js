export let galleryPage = `
<main class="transition-circle" id="gallery-page"> 
  <div class="container">
    <div class="grid">
      <div class="column-xs-12">
        <ul class="slider">
          <li class="slider-item active">
            <div class="grid vertical">
              <div class="column-xs-12 column-md-2 hide-mobile">
                <div class="intro">
                  <h1 class="title">Explore</h1>
                </div>
              </div>
              <div class="column-xs-12 column-md-10">
                <div class="image-holder">
                  <img src="https://source.unsplash.com/cddaZDt6uRw">
                </div>
                <div class="grid">
                  <div class="column-xs-12 column-md-9">
                    <div class="intro show-mobile">
                      <h1 class="title">Explore</h1>
                    </div>
                    <p class="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste odio, in necessitatibus quas obcaecati optio sint hic delectus sit atque?</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="slider-item">
            <div class="grid vertical">
              <div class="column-xs-12 column-md-2 hide-mobile">
                <div class="intro">
                  <h1 class="title">Learn</h1>
                </div>
              </div>
              <div class="column-xs-12 column-md-10">
                <div class="image-holder">
                  <img src="https://source.unsplash.com/Pz3EHf-KJfc">
                </div>
                <div class="grid">
                  <div class="column-xs-12 column-md-9">
                    <div class="intro show-mobile">
                      <h1 class="title">Learn</h1>
                    </div>
                    <p class="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste odio, in necessitatibus quas obcaecati optio sint hic delectus sit atque?</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="slider-item">
            <div class="grid vertical">
              <div class="column-xs-12 column-md-2 hide-mobile">
                <div class="intro">
                  <h1 class="title">Develop</h1>
                </div>
              </div>
              <div class="column-xs-12 column-md-10">
                <div class="image-holder">
                  <img src="https://source.unsplash.com/peYW3VwICpE">
                </div>
                <div class="grid">
                  <div class="column-xs-12 column-md-9">
                    <div class="intro show-mobile">
                      <h1 class="title">Develop</h1>
                    </div>
                    <p class="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste odio, in necessitatibus quas obcaecati optio sint hic delectus sit atque?</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="slider-item">
            <div class="grid vertical">
              <div class="column-xs-12 column-md-2 hide-mobile">
                <div class="intro">
                    <h1 class="title">Never Give up</h1>
                </div>
              </div>
              <div class="column-xs-12 column-md-10">
                <div class="image-holder">
                  <img src="https://source.unsplash.com/VmeOZQjTVGE">
                </div>
                <div class="grid">
                  <div class="column-xs-12 column-md-9">
                    <div class="intro show-mobile">
                      <a href="#">
                        <h1 class="title">Never Give Up</h1>
                      </a>
                    </div>
                    <p class="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste odio, in necessitatibus quas obcaecati optio sint hic delectus sit atque?</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      <div class="grid">
        <div class="column-xs-12">
          <div class="controls">
              <button class="previous">
                <span class="visually-hidden">Previous</span>
                <span class="icon arrow-left" aria-hidden="true"></span>
              </a>
              <button class="next">
                <span class="visually-hidden">Next</span>
                <span class="icon arrow-right" aria-hidden="true"></span>
              </a>
            </div>
          </div>
      </div>
    </div>
    </div>
</main>`


  //   <div class="wrapper">
  //   <nav>
  //     <div class="titles">
  //       <h4 style="text-align: right; font-weight: 400;">its Our Great Flows</h4>
  //       <hr />
  //       <h1>From Our Gallery</h1>
  //     </div>
  //     <div class="items">
  //       <span class="item active" data-name="all">All</span>
  //       <span class="item" data-name="bag">Sculpture</span>
  //       <span class="item" data-name="camera">Paintings</span>
  //       <span class="item" data-name="shoe">Modern Art</span>
  //       <span class="item" data-name="watch">Vintage Art</span>
  //       <span class="item" data-name="headphone">Others</span>
  //     </div>
  //   </nav>
  //   <!-- filter Images -->
  //   <div class="gallery">
  //     <div class="image" data-name="bag"><span><img src="suzu.jpg" alt=""></span></div>
  //     <div class="image" data-name="headphone"><span><img src="suzu.jpg" alt=""></span></div>
  //     <div class="image" data-name="camera"><span><img src="docs/img/black-gold-mask-original.png" alt=""></span></div>
  //     <div class="image" data-name="shoe"><span><img src="images/shoe-1.jpg" alt=""></span></div>
  //     <div class="image" data-name="headphone"><span><img src="docs/img/c69355112176709.600fec3f72b54.jpg" alt=""></span></div>
  //     <div class="image" data-name="watch"><span><img src="docs/img/db193f48383189.5896aa09666fa.jpg""></span></div>
  //     <div class="image" data-name="shoe"><span><img src="docs/img/c2ae77112176709.600fec3f717db.jpg" alt=""></span></div>
  //     <div class="image" data-name="camera"><span><img src="images/camera-2.jpg" alt=""></span></div>
  //   </div>
  //   </div>
  //   <!-- fullscreen img preview box -->
  //   <div class="preview-box">
  //   <div class="details">
  //     <span class="title">Image Category: <p></p></span>
  //     <span class="icon fas fa-times"></span>
  //   </div>
  //   <div class="image-box"><img src="" alt=""></div>
  // </div>
  // <div class="shadow"></div>