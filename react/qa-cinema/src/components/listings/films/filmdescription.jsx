const Filmdescription = (props) =>
 {
return (
    <>
    <h1>{props.film[0].title}</h1>
     <div className='container-fluid'>
        <div className="card-mb-3-col-standard" style={{ maxwidth: '540px' }}>
          <div className="row g-0">
            <div className="col-md-4 filmdinfo">
              <img src={props.film[0].image_url} className="film-img" alt=".." />
            </div>
            <div className="col-md-8 filminfo">
              <div className="card-body">
                <div className="description-box">
                  <h5 className="card-title">{props.film[0].title}</h5>
                  <div className="actors">
                    {props.film[0].actors.map((actor, index) => <span key={index} className="pe-2">{actor}</span>)}
                  </div>
                  <p className="card-director">Director(s): {props.film[0].director}</p>
                  <p className="card-synopsis">Synopsis: {props.film[0].synopsis}</p>
                  <p className="card-genre">Genre: {props.film[0].genre}</p>
                  <p className="card-classification">Classification: {props.film[0].classification}</p>
                  <p className="card-length"><small className="text-muted">Length: {props.film[0].length}</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        </div>
    </>
)
 }
 export default Filmdescription;