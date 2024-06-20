import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addReklams } from '../../redux/slice/ticketSlice'
import { getAllData } from '../../service/requests'

const HomeAsside = () => {
  const data = useSelector((state) => state.allTicket.reklams)
  const dispatch = useDispatch()
  useEffect(() => {
    getAllData("reklams").then((res) => {
      dispatch(addReklams(res));
    });
  }, [data])


  const handleExternalLink = (url) => (event) => {
    event.preventDefault();
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  
  return (
    <div className='advert'>
      {
        data && data.map((elem,i)=>{
          return(
            
      <div key={i} className="reklam" onClick={handleExternalLink(elem.reklamLink)}>
      <img src={elem.image} alt="reklam" />
      </div>
          )
        })
      }
    </div>
  )
}

export default HomeAsside
