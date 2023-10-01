import React from 'react'
import './Registration.css'
function Registration() {
  const data = [
    { a_type: 'Student / Scholar', Rfee: '₹4000', Rfel: '₹5000' },
    { a_type: 'Faculty', Rfee: '₹5000', Rfel: '₹6000' },
    { a_type: 'Industry', Rfee: '₹6000', Rfel: '₹7000' },
    { a_type: 'Foreign', Rfee: '$90 (USD)', Rfel: '	$100 (USD)' },
  ];
  return (
    
    <div className='main'>
       <div className="gdlr-page-title-wrapper gdlr-parallax-wrapper gdlr-title-normal"  data-bgspeed="0.5"  >
			<div className="gdlr-page-title-container container" >
				<h1 className="gdlr-page-title">Registration</h1>
							</div>	
		  </div>	
      <div>
            <br/><br/><br/>
            <table className='tab'>
              <thead className='t_head'>
                <tr>
                  <th className='tab_head'>Author Category</th>
                  <th className='tab_head'>Registration Fee(Early Bird)</th>
                  <th className='tab_head'>Registration Fee(Late)</th>
                </tr>
              </thead>
              <tbody>
                {data.map(item => (
                  <tr key={item.a_type} className='tar'>
                    <td className='tab_data'>{item.a_type}</td>
                    <td className='tab_data'>{item.Rfee}</td>
                    <td className='tab_data'>{item.Rfel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
      </div>
      <div className='reg_process'>
				<h1 className="gdlr-page-title">Registration process will be updated soon enough</h1>

      </div>
    </div>
  )
}

export default Registration