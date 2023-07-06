import "./Count.scss"

import iconUp from 'assets/img/icons/icon-up.svg'
import iconDown from 'assets/img/icons/icon-down.svg'

const Count = ({ count, increase, decrease, changeValue, id }) => {
	return (
		
			<div className="count">

				<div className='count-box'>
					<input onChange={(e)=>{changeValue(id, +e.target.value)}} type='number' className='count-input' min='1' max='100' value={count} />
				</div>
				<div className='count-controls'>
					<button type='button' className='count-up' onClick={()=>{increase(id)}}>
						<img src={iconUp} alt='Increase' />
					</button>
					<button type='button' className='count-down' onClick={()=>{decrease(id)}}>
						<img src={iconDown} alt='Decrease' />
					</button>
				</div>
			</div>
		
	);
};

export default Count;