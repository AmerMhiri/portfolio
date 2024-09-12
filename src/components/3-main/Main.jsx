
import './main.css'

function Main() {
  return (
    <main className='flex'>
      <section className='flex left-section'>
        <button className='active'>my achieves</button>
        <button className=''>all project</button>
        <button>web site </button>
        <button>application mobile </button>


      </section>

      <section className='flex right-section'>

        {["aa", "aaa", "cc", "AFA", "FFF"].map((item) => {
          return (
            <article key={item} className='card'>
              <img width={266} src="./1.jpg" alt="" />
              <div style={{ width: "266px" }} className='box'>
                <h1 className='title'> Landing page </h1>
                <p className='sub-title'>lofjahfnigh nyhjajfhgakjgfkahkf kjahkf</p>

                <div className="flex icons">
                  <div style={{ gap: '11px' }} className='flex'>
                    <div className="icon-link"></div>
                    <div className="icon-github"></div>
                  </div>

                  <a className='link ' href="">
                    more
                    <span className='icon-arrow-right'></span>
                  </a>
                </div>
              </div>

            </article>
          )
        })}


      </section>
    </main>
  )
}

export default Main