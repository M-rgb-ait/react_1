import poert_1 from '../imgs/poert1.png'
import poert_2 from '../imgs/port2.png'
import poert_3 from '../imgs/port3.png'




export default function Layout() {
  return (
<>



<div   className="text-center pt-4" style={{color: 'rgb(44, 62, 80)'}}>
  <h2   className="text-uppercase mb-3 fs-1 fw-bolder">portfolio component</h2>
  <div   className="d-flex align-items-center justify-content-center mb-3">
    <div   className="line me-3" style={{backgroundColor: 'rgb(44, 62, 80)'}} />
    <i   className="fa-solid fa-star" /><div   className="line ms-3" style={{backgroundColor: 'rgb(44, 62, 80)'}} />
    </div>
    </div>







<div>
  <div className='container mb-4 mt-4'>
  <div className='row g-5'>
  <div className='col-lg-4 col-md-6'  data-bs-toggle="modal" data-bs-target="#exampleModal" >
    <div className='rounded-3 overflow-hidden position-relative'>
  <img className='w-100 rounded-3' src={poert_1} alt=""/>
<div  className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
  <i className="text-white fa-solid fa-plus fa-6x" />
  </div>
    </div>
  </div>
  <div className='col-lg-4 col-md-6'  data-bs-toggle="modal" data-bs-target="#exampleModal_2" >
    <div className='rounded-3 overflow-hidden position-relative'>
  <img className='w-100 rounded-3' src={poert_2} alt=""/>
<div  className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
  <i className="text-white fa-solid fa-plus fa-6x" />
  </div>
    </div>
  </div>
  <div className='col-lg-4 col-md-6'  data-bs-toggle="modal" data-bs-target="#exampleModal_3" >
    <div className='rounded-3 overflow-hidden position-relative'>
  <img className='w-100 rounded-3' src={poert_3} alt=""/>
<div  className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
  <i className="text-white fa-solid fa-plus fa-6x" />
  </div>
    </div>
  </div>


  
  <div className='col-lg-4 col-md-6'  data-bs-toggle="modal" data-bs-target="#exampleModal" >
    <div className='rounded-3 overflow-hidden position-relative'>
  <img className='w-100 rounded-3' src={poert_1} alt=""/>
<div  className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
  <i className="text-white fa-solid fa-plus fa-6x" />
  </div>
    </div>
  </div>
  <div className='col-lg-4 col-md-6'  data-bs-toggle="modal" data-bs-target="#exampleModal_2" >
    <div className='rounded-3 overflow-hidden position-relative'>
  <img className='w-100 rounded-3' src={poert_2} alt=""/>
<div  className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
  <i className="text-white fa-solid fa-plus fa-6x" />
  </div>
    </div>
  </div>
  <div className='col-lg-4 col-md-6'  data-bs-toggle="modal" data-bs-target="#exampleModal_3" >
    <div className='rounded-3 overflow-hidden position-relative'>
  <img className='w-100 rounded-3' src={poert_3} alt=""/>
<div  className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
  <i className="text-white fa-solid fa-plus fa-6x" />
  </div>
    </div>
  </div>

  </div>
  </div>
  

  {/* Modal */}
  <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
          <img src={poert_1} alt="" />
    </div>
  </div>
  <div className="modal fade" id="exampleModal_2" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
          <img src={poert_2} alt="" />
        </div>
  </div>
  <div className="modal fade" id="exampleModal_3" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
          <img  src={poert_3} alt="" />
        </div>
    </div>
</div>





</>
  )
}
