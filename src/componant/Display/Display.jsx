import poert_4 from '../imgs/avataaars.svg'

export default function Display() {
  return (
<>

<div className="Display pb-5 d-flex justify-content-center align-items-center text-white">
    <div   className="text-center">
        <img  src={poert_4} alt className="mb-3" />
        <div  className="text-center pt-4" style={{color: 'white'}}>
        <h2  className="text-uppercase mb-3 fs-1 fw-bolder">start Framework</h2>
        <div  className="d-flex align-items-center justify-content-center mb-3">
            <div   className="line me-3" style={{backgroundColor: 'white'}} />
            <i   className="fa-solid fa-star" />
            <div   className="line ms-3" style={{backgroundColor: 'white'}} />
            </div>
        </div>
            <div  >Graphic Artist - Web Designer - Illustrator</div>
    </div>
</div>



</>
  )
}
