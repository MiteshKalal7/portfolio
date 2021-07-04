import Link from 'next/link'

function Hero({ title, page, prevPage, prevPageLink }) {
  return (
    <section class="breadcrumb-area banner-6">
      <div class="text-block">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 v-center">
              <div class="bread-inner">
                <div class="bread-menu wow fadeInUp" data-wow-delay=".2s">
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    {prevPage && (
                      <li>
                        <Link href={`/${prevPageLink}`}>{prevPage}</Link>
                      </li>
                    )}
                    <li>
                      <a>{page}</a>
                    </li>
                  </ul>
                </div>
                <div class="bread-title wow fadeInUp" data-wow-delay=".5s">
                  <h2>{title}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
